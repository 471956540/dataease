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
    save: '保存',
    input_limit: '长度在 {0} 到 {1} 个字符',
    save_success: '保存成功',
    roger_that: '知道了',
    delete_success: '删除成功',
    copy: '复制',
    operating: '操作',
    label: '备注',
    search_keywords: '输入关键字搜索',
    detail: '详情',
    prev: '上一步',
    description: '描述',
    next: '下一步',
    name: '名称',
    input_name: '请输入名称',
    yes: '是',
    no: '否',
    every: '每',
    minute: '分钟',
    second: '秒',
    hour: '秒',
    day: '天',
    every_exec: '执行一次',
    cron_exp: 'cron表达式'
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
  },
  dataset: {},
  datasource: {
    datasource: '数据源',
    create: '新建数据源',
    config: '数据源配置',
    table: '数据源表',
    table_name: '表名',
    remark: '备注',
    column_name: '字段名',
    field_type: '字段类型',
    field_description: '字段描述',
    dl: '数据湖',
    other: '其他',
    local_file: '本地文件',
    select_ds_type: '选择数据源类型',
    ds_info: '录入数据源信息',
    sync_info: '数据同步设置',
    input_name: '请输入名称',
    input_limit_2_25: '2-25字符',
    input_limit_2_50: '2-50字符',
    data_source_configuration: '数据源配置',
    data_source_table: '数据源表',
    auth_method: '认证方式',
    passwd: '用户名密码',
    kerbers_info: '请确保 krb5.Conf、Keytab Key，已经添加到路径：/opt/dataease/conf',
    client_principal: 'Client Principal',
    keytab_Key_path: 'Keytab Key Path',
    please_select_left: '请从左侧选择',
    show_info: '数据源信息',
    type: '类型',
    please_choose_type: '请选择数据源类型',
    please_choose_data_type: '请选择计算模式',
    data_base: '数据库名称',
    user_name: '用户名',
    password: '密码',
    host: '主机名/IP地址',
    doris_host: 'Doris 地址',
    query_port: 'Query Port',
    http_port: 'Http Port',
    port: '端口',
    datasource_url: '地址',
    please_input_datasource_url: '请输入 Elasticsearch 地址，如: http://es_host:es_port',
    please_input_data_base: '请输入数据库名称',
    please_select_oracle_type: '选择连接类型',
    please_input_user_name: '请输入用户名',
    please_input_password: '请输入密码',
    please_input_host: '请输入主机',
    please_input_url: '请输入URL地址',
    please_input_port: '请输入端口',
    modify: '编辑数据源',
    copy: '复制数据源',
    validate_success: '校验成功',
    validate: '校验',
    search_by_name: '根据名称搜索',
    delete_warning: '确定要删除吗?',
    input_limit: '{num}字符',
    oracle_connection_type: '服务名/SID',
    oracle_sid: 'SID',
    oracle_service_name: '服务名',
    get_schema: '获取 Schema',
    schema: 'Schema',
    charset: '字符集',
    targetCharset: '目标字符集',
    please_choose_schema: '请选择数据库 Schema',
    please_choose_charset: '请选择数据库字符集',
    please_choose_targetCharset: '请选择目标字符集',
    edit_datasource_msg: '修改数据源信息，可能会导致该数据源下的数据集不可用，确认修改？',
    repeat_datasource_msg: '已经存在相同配置的数据源信息, ',
    confirm_save: '确认保存?',
    in_valid: '无效数据源',
    initial_pool_size: '初始连接数',
    min_pool_size: '最小连接数',
    max_pool_size: '最大连接数',
    max_idle_time: '最大空闲(秒)',
    bucket_num: 'Bucket 数量',
    replication_num: '副本数量',
    please_input_bucket_num: '请输入 Bucket 数量',
    please_input_replication_num: '请输入副本数量',
    acquire_increment: '增长数',
    connect_timeout: '连接超时(秒)',
    please_input_initial_pool_size: '请输入初始连接数',
    please_input_min_pool_size: '请输入最小连接数',
    please_input_max_pool_size: '请输入最大连接数',
    please_input_max_idle_time: '请输入最大空闲(秒)',
    please_input_acquire_increment: '请输入增长数',
    please_input_query_timeout: '请输入查询超时',
    please_input_connect_timeout: '请输入连接超时(秒)',
    no_less_then_0: '高级设置中的参数不能小于零',
    port_no_less_then_0: '端口不能小于零',
    priority: '高级设置',
    data_mode: '数据模式',
    direct: '直连模式',
    extract: '抽取模式',
    all_compute_mode: '直连、抽取模式',
    extra_params: '额外的JDBC连接字符串',
    please_input_dataPath: '请输入 JsonPath 数据路径',
    show_api_data: '查看API数据结构',
    warning: '包含无效数据表',
    data_table: '数据表',
    data_table_name: '数据表名称',
    method: '请求方式',
    url: 'URL',
    add_api_table: '添加API数据表',
    edit_api_table: '编辑API数据表',
    base_info: '基础信息',
    column_info: '数据结构',
    request: '请求',
    isUseJsonPath: '是否指定JsonPath',
    path_all_info: '请填入完整地址',
    jsonpath_info: '请填入JsonPath',
    req_param: '请求参数',
    headers: '请求头',
    query_param: 'QUERY參數',
    query_info: '地址栏中跟在？后面的参数,如: updateapi?id=112',
    key: '键',
    value: '值',
    data_path: '提取数据',
    data_path_desc: '请用JsonPath填写数据路径',
    body_form_data: 'form-data',
    body_x_www_from_urlencoded: 'x-www-form-urlencoded',
    body_json: 'json',
    body_xml: 'xml',
    body_raw: 'row',
    request_body: '请求体',
    auth_config: '认证配置',
    auth_config_info: '请求需要进行权限校验',
    verified: '认证',
    verification_method: '认证方式',
    username: '用户名',
    api_table_not_empty: 'API 数据表不能为空',
    has_repeat_name: 'API 数据表名称重复',
    has_repeat_field_name: '字段名重复，请修改后再选择',
    api_field_not_empty: '字段不能为空',
    success_copy: '复制成功',
    valid: '有效',
    invalid: '无效',
    api_step_1: '连接API',
    api_step_2: '提取数据',
    _ip_address: '请输入主机名/IP地址',
    display_name: '显示名称',
    connection_mode: '连接方式',
    driver_file: '驱动文件',
    edit_driver: '编辑驱动',
    driver_name: '驱动名称',
    drive_type: '驱动类型',
    add_driver: '添加驱动',
    diver_on_the_left: '请在左侧选择驱动',
    no_data_table: '暂无数据表',
    on_the_left: '请在左侧选择数据源',
    create_dataset: '创建数据集',
    table_description: '表描述',
    relational_database: '关系型数据库',
    data_warehouse_lake: '数仓/数据湖',
    non_relational_database: '非关系型数据库',
    all: '所有',
    this_data_source: '确定删除该数据源吗？',
    delete_this_dataset: '确定删除该数据集吗？',
    edit_folder: '编辑文件夹',
    click_to_check: '点击去查看血缘关系',
    please_select: '请选择',
    delete_this_item: '是否要删除此项？',
    can_be_uploaded: '仅支持上传JAR格式的文件',
    query_timeout: '查询超时',
    add_data_source: '添加数据源',
    delete_this_driver: '确定删除该驱动吗？',
    basic_info: '基本信息',
    data_preview: '预览数据',
    update_type: '更新方式',
    all_scope: '全量更新',
    add_scope: '增量更新',
    select_data_time: '选择日期时间',
    execute_rate: '执行频率',
    execute_once: '立即执行',
    simple_cron: '简单重复',
    cron_config: '表达式设定',
    no_limit: '无限制',
    set_end_time: '设定结束时间',
    exec_time: '执行时间',
    start_time: '开始时间',
    end_time: '结束时间'
  }
}
