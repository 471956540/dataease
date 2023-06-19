package io.dataease.xpack.permissions.auth.manage;

import cn.hutool.core.collection.CollectionUtil;
import io.dataease.api.permissions.auth.dto.BusiResourceCreator;
import io.dataease.api.permissions.auth.dto.BusiResourceEditor;
import io.dataease.constant.BusiResourceEnum;
import io.dataease.exception.DEException;
import io.dataease.utils.AuthUtils;
import io.dataease.utils.CacheUtils;
import io.dataease.utils.CommonBeanFactory;
import io.dataease.utils.LogUtil;
import io.dataease.xpack.permissions.auth.dao.auto.entity.PerAuthBusiRole;
import io.dataease.xpack.permissions.auth.dao.auto.entity.PerAuthBusiUser;
import io.dataease.xpack.permissions.auth.dao.auto.entity.PerBusiResource;
import io.dataease.xpack.permissions.auth.dao.auto.mapper.PerBusiResourceMapper;
import io.dataease.xpack.permissions.auth.dao.ext.mapper.BusiAuthExtMapper;
import jakarta.annotation.Resource;
import org.apache.commons.lang3.ObjectUtils;
import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Component
public class SyncAuthManage {

    @Resource
    private PerBusiResourceMapper perBusiResourceMapper;

    @Resource
    private BusiAuthExtMapper busiAuthExtMapper;

    @Resource
    private UserAuthManage userAuthManage;

    @Resource
    private RoleAuthManage roleAuthManage;

    /**
     * 从业务系统同步资源到权限系统
     *
     * @param creator
     */
    @Transactional
    public void syncResource(BusiResourceCreator creator) {
        Long pid = creator.getPid();
        Long oid = AuthUtils.getUser().getDefaultOid();

        PerBusiResource perBusiResource = new PerBusiResource();
        perBusiResource.setId(creator.getId());
        perBusiResource.setName(creator.getName());
        perBusiResource.setOrgId(oid);
        perBusiResource.setPid(creator.getPid());
        perBusiResource.setExtraFlag(creator.getExtraFlag());
        if (ObjectUtils.isNotEmpty(creator.getLeaf()) && creator.getLeaf()) {
            perBusiResource.setLeaf(creator.getLeaf());
        }
        BusiResourceEnum resourceEnum = BusiResourceEnum.valueOf(creator.getFlag().toUpperCase());
        perBusiResource.setRtId(resourceEnum.getFlag());
        PerBusiResource parent = null;
        if (ObjectUtils.isNotEmpty(pid) && !pid.equals(0L) && ObjectUtils.isNotEmpty(parent = perBusiResourceMapper.selectById(pid))) {
            String rootWay = StringUtils.isBlank(parent.getRootWay()) ? parent.getId().toString() : (parent.getRootWay() + "," + parent.getId());
            perBusiResource.setRootWay(rootWay);
        }
        perBusiResourceMapper.insert(perBusiResource);
        proxy().syncAuthForResource(perBusiResource.getId(), perBusiResource.getRtId(), perBusiResource.getRootWay());
    }

    // 把同步的资源授权给当前用户
    // 获取root_way查询root_way已授权的角色以及用户 并把当前同步的资源授权给这些角色和用户
    // 这是保障权限继承机制
    @Transactional
    public void syncAuthForResource(Long id, Integer rt, String rootWay) {
        List<PerAuthBusiUser> perAuthBusiUsers = userAuthManage.uidForRootWay(rootWay);
        PerAuthBusiUser authBusiUser = userAuthManage.curUserPer(id, rt);
        perAuthBusiUsers = ObjectUtils.isEmpty(perAuthBusiUsers) ? new ArrayList<>() : perAuthBusiUsers;
        perAuthBusiUsers.add(authBusiUser);
        userAuthManage.syncCascade(perAuthBusiUsers, id);

        List<PerAuthBusiRole> perAuthBusiRoles = roleAuthManage.ridForRootWay(rootWay);
        List<Long> rids = null;
        if (CollectionUtil.isNotEmpty(perAuthBusiRoles)) {
            roleAuthManage.syncCascade(perAuthBusiRoles, id);
            rids = perAuthBusiRoles.stream().map(PerAuthBusiRole::getRid).toList();
        }
        clear(rt, perAuthBusiUsers.stream().map(PerAuthBusiUser::getUid).toList(), rids);
    }

    private void clearCache(Integer rtId, List<Long> uids, List<Long> rids) {
        Long oid = AuthUtils.getUser().getDefaultOid();
        String globalKey = oid.toString() + rtId;
        CacheUtils.keyRemove("org_global_resource", globalKey);
        CacheUtils.keyRemove("all_oid_flag_resource", globalKey);
        if (CollectionUtil.isNotEmpty(uids)) {
            List<String> userKeys = uids.stream().map(uid -> oid.toString() + uid.toString() + rtId.toString()).toList();
            userKeys.forEach(userkey -> {
                CacheUtils.keyRemove("user_busi_pers_interactive", userkey);
                CacheUtils.keyRemove("user_busi_pers", userkey);
            });
        }

        if (CollectionUtil.isNotEmpty(rids)) {
            List<String> roleKeys = rids.stream().map(rid -> rid.toString() + rtId.toString()).toList();
            roleKeys.forEach(rolekey -> {
                CacheUtils.keyRemove("role_busi_pers_interactive", rolekey);
                CacheUtils.keyRemove("role_busi_pers", rolekey);
            });
        }
    }

    private void clear(Integer rtId, List<Long> uids, List<Long> rids) {
        clearCache(rtId, uids, rids);
        try {
            TimeUnit.MILLISECONDS.sleep(1000L);
            clearCache(rtId, uids, rids);
        } catch (Exception e) {
            DEException.throwException(e);
        }
    }

    private SyncAuthManage proxy() {
        return CommonBeanFactory.getBean(SyncAuthManage.class);
    }

    public void editResourceName(BusiResourceEditor editor) {
        /*QueryWrapper<PerBusiResource> queryWrapper = new QueryWrapper<>();
        BusiResourceEnum resourceEnum = BusiResourceEnum.valueOf(editor.getFlag().toUpperCase());
        queryWrapper.eq("id", editor.getId());
        queryWrapper.eq("rt_id", resourceEnum.getFlag());
        PerBusiResource perBusiResource = perBusiResourceMapper.selectOne(queryWrapper);*/
        Optional.ofNullable(perBusiResourceMapper.selectById(editor.getId())).ifPresent(resource -> {
            resource.setName(editor.getName());
            resource.setExtraFlag(editor.getExtraFlag());
            perBusiResourceMapper.updateById(resource);
        });
    }

    @Transactional
    public void delResource(Long id) {
        // 暂未做级联处理，待需求明确再做不迟
        busiAuthExtMapper.delUserPerByResource(id);
        busiAuthExtMapper.delRolePerByResource(id);
        perBusiResourceMapper.deleteById(id);
    }

}
