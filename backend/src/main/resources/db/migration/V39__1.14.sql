INSERT INTO `sys_menu` VALUES (700, 1, 2, 1, '系统配置', 'sys-settings', 'system/settings/index', 12, 'sys-tools', 'system-settings', b'0', b'0', b'0', NULL, NULL, NULL, NULL, NULL);
INSERT INTO `sys_menu` VALUES (710, 700, 0, 1, '外观配置', 'sys-appearance', 'system/settings/AppearanceSetting', 2, 'sys-tools', 'appearance', b'0', b'0', b'0', 'appearance:read', NULL, NULL, NULL, NULL);
INSERT INTO `sys_menu` VALUES (730, 1, 0, 1, '数据同步表单', 'sys-task-ds-form', 'system/task/form', 11, NULL, '/task-ds-form', b'1', b'0', b'1', NULL, NULL, NULL, NULL, NULL);

UPDATE `sys_menu` set pid = 700, menu_sort = 1 where menu_id = 6 and `name` = 'system-param';



ALTER TABLE `sys_theme`
DROP COLUMN `img`,
DROP COLUMN `img_id`,
ADD COLUMN `senior` TINYINT(1) NULL DEFAULT NULL AFTER `status`;


update sys_background_image set classification ='商务';
update sys_background_image set name ='边框10' where id ='dark_1';
