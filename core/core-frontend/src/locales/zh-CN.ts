export default {
  common: {
    inputText: '请输入',
    add: '添加',
    account: '账号',
    email: '邮箱',
    phone: '手机号',
    pwd: '密码',
    require: '必填',
    personal_info: '个人信息',
    about: '关于',
    exit_system: '退出系统',
    letter_start: '必须以字母开头',
    required: '必填',
    operate: '操作',
    create_time: '创建时间',
    edit: '编辑',
    delete: '删除',
    please_input: '请输入',
    please_select: '请选择',
    cancel: '取消',
    sure: '确定',
    input_limit: '长度在 {0} 到 {1} 个字符',
    save_success: '保存成功',
    roger_that: '知道了',
    delete_success: '删除成功',
    copy: '复制'
  },
  login: {
    welcome: '欢迎使用',
    btn: '登录',
    username_format: '3-10位字母数字下划线且以字母开头',
    pwd_format: '密码长度在5-15'
  },
  component: {
    columnList: '列表项',
    selectInfo: '请选择列表中要展示的信息',
    allSelect: '全选'
  },
  system: {
    user: '用户',
    role: '角色',
    addUser: '@:common.add@:system.user'
  },
  user: {
    change_password: '修改密码',
    name: '名称',
    role: '角色',
    state: '状态',
    default_pwd: '默认密码',
    confirm_delete: '确认删除该用户吗？'
  },
  role: {
    add_title: '添加角色',
    edit_title: '编辑角色',
    name: '角色名称',
    type: '角色类型',
    desc: '角色描述',
    average_role: '普通用户',
    org_admin: '组织管理员',
    confirm_delete: '确认删除该角色吗？',
    delete_tips:
      '<div id="u7755_text" class="text" style="font-size: 12px;"><p><span style="color:#F59A23;">友情提示，角色被删除后，归属于角色的用户将做如下处理：</span></p><p><span style="color:#7F7F7F;">1、用户拥有当前组织的其他角色，那么角色被删除后，将用户从该角色中移除。</span></p><p><span style="color:#7F7F7F;">2、该角色是用户在当前组织下拥有的唯一角色，但用户拥有其他组织下的角色，那么角色被删除后，用户也将从当前组织中移除。</span></p><p><span style="color:#7F7F7F;">3、该角色是用户在当前组织下拥有的唯一角色，用户在系统的其他组织下也没有任何角色，那么角色被删除后，用户也将从当前系统中删除。</span></p><p><span style="color:#7F7F7F;"><br></span></p></div>',
    confirm_unbind_user: '确定移除改用户吗',
    clear_in_system:
      '友情提示，从当前角色移除后，该用户已没有任何组织的任何角色，用户将从系统中删除。',
    clear_in_org:
      '友情提示，从当前角色移除后，该用户已没有当前组织的任何角色，将从当前组织中移除。',
    add_user: '为角色添加用户({0})',
    unbind_success: '移除成功',
    bind_success: '绑定成功'
  },
  org: {
    org_title: '组织管理',
    org_move: '组织迁移',
    add: '添加组织',
    name: '组织名称',
    sub_count: '下属组织数',
    search_placeholder: '请输入名称搜索',
    add_sub: '添加子组织',
    edit: '编辑组织',
    parent: '上级组织',
    default_cannot_move: '默认组织不能删除',
    cannot_delete: '无法删除',
    confirm_delete: '确认删除该组织吗？',
    delete_children_first: '请先删除子组织后，再删除当前组织',
    confirm_content: '友情提示，组织被删除后，组织下的资源也将被删除',
    give_up_resource: '放弃资源，直接删除',
    move_resource_first: '先迁移资源'
  },
  auth: {
    user_dimension: '按用户配置',
    resource_dimension: '按资源管理',
    user: '用户',
    role: '角色',
    resource: '资源权限',
    menu: '菜单和操作权限',
    panel: '仪表板',
    screen: '数据大屏',
    dataset: '数据集',
    datasource: '数据源',
    empty_desc: '请选择用户/角色以及资源类型',
    uncommitted_tips: '有未提交的权限变更，是否提交？'
  }
}
