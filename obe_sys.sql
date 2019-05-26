/*
Navicat MySQL Data Transfer

Source Server         : phpstudy
Source Server Version : 50553
Source Host           : localhost:3306
Source Database       : obe_sys

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-05-26 21:29:56
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for obe_college
-- ----------------------------
DROP TABLE IF EXISTS `obe_college`;
CREATE TABLE `obe_college` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `type` tinyint(1) DEFAULT NULL,
  `code` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_admin` varchar(255) DEFAULT NULL,
  `update_admin` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_college
-- ----------------------------
INSERT INTO `obe_college` VALUES ('1', '计算机学院', null, null, '1', null, null, null, null);
INSERT INTO `obe_college` VALUES ('2', '计算机学院', null, null, '1', '2019-05-25 16:05:29', null, null, null);
INSERT INTO `obe_college` VALUES ('3', '计算机学院', null, 'college_6587714704', '0', '2019-05-25 16:05:48', null, null, null);
INSERT INTO `obe_college` VALUES ('4', '会计学院', null, 'college_6587715662', '0', '2019-05-25 16:06:06', null, null, null);

-- ----------------------------
-- Table structure for obe_course
-- ----------------------------
DROP TABLE IF EXISTS `obe_course`;
CREATE TABLE `obe_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL DEFAULT '' COMMENT '课程代码',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '课程名称',
  `credits` int(11) NOT NULL DEFAULT '0' COMMENT '学分',
  `week_of_school` varchar(255) NOT NULL DEFAULT '' COMMENT '周学时',
  `evaluation_mode` tinyint(1) NOT NULL COMMENT '考核方式',
  `college_id` int(11) NOT NULL DEFAULT '0' COMMENT '学院ID',
  `major_field` varchar(255) NOT NULL COMMENT '专业方向',
  `course_type` tinyint(1) NOT NULL COMMENT '课程性质',
  `count` int(11) NOT NULL DEFAULT '0' COMMENT '课程容量',
  `has_count` int(11) NOT NULL DEFAULT '0' COMMENT '已选课程数',
  `teacher_id` int(11) NOT NULL COMMENT '老师ID',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `create_admin` varchar(255) NOT NULL DEFAULT '',
  `update_admin` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_course
-- ----------------------------
INSERT INTO `obe_course` VALUES ('1', '1', '1', '1', '1', '1', '1', '0', '1', '1', '0', '0', '1', null, null, '', '0000-00-00 00:00:00');
INSERT INTO `obe_course` VALUES ('3', 'c_3_t_12019-05-25_course_6587917180', '大学英语', '4', '7', '1', '3', '计算机', '1', '90', '0', '1', '0', '2019-05-25 21:41:58', null, '', '0000-00-00 00:00:00');
INSERT INTO `obe_course` VALUES ('4', 'c_3_t_3_course_6587759039', '大学体育', '1', '7', '1', '3', '计算机', '1', '90', '0', '3', '0', '2019-05-25 17:18:23', null, '', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for obe_grade
-- ----------------------------
DROP TABLE IF EXISTS `obe_grade`;
CREATE TABLE `obe_grade` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `code` varchar(255) NOT NULL,
  `college_id` int(11) NOT NULL DEFAULT '0',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `count` int(11) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_grade
-- ----------------------------
INSERT INTO `obe_grade` VALUES ('1', '2015级信管二班', 'teacher_6587932872', '3', '1', '0', '2019-05-25 22:08:07');
INSERT INTO `obe_grade` VALUES ('2', '2017信管一班', 'grade_6587933508', '3', '0', '0', '2019-05-25 22:09:10');
INSERT INTO `obe_grade` VALUES ('3', '2015级信管二班', 'grade_6587934782', '3', '0', '0', '2019-05-25 22:11:18');

-- ----------------------------
-- Table structure for obe_performance
-- ----------------------------
DROP TABLE IF EXISTS `obe_performance`;
CREATE TABLE `obe_performance` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `college_id` int(11) DEFAULT NULL,
  `grade_id` int(11) DEFAULT NULL,
  `student_id` int(11) DEFAULT NULL,
  `teacher_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `score` varchar(255) DEFAULT NULL,
  `remark` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_performance
-- ----------------------------
INSERT INTO `obe_performance` VALUES ('1', '3', '2', '2', null, '3', '111', '11', '0', '2019-05-25 23:44:11');
INSERT INTO `obe_performance` VALUES ('2', '3', '2', '1', null, '4', '99', '11', '0', '2019-05-25 23:46:25');

-- ----------------------------
-- Table structure for obe_student
-- ----------------------------
DROP TABLE IF EXISTS `obe_student`;
CREATE TABLE `obe_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL DEFAULT '' COMMENT '学号',
  `college_id` int(11) NOT NULL DEFAULT '0',
  `grade_id` int(11) NOT NULL DEFAULT '0',
  `name` varchar(255) NOT NULL,
  `age` int(11) NOT NULL,
  `sex` tinyint(1) NOT NULL,
  `phone` varchar(255) NOT NULL DEFAULT '',
  `user_id` varchar(255) NOT NULL DEFAULT '' COMMENT 'open_id',
  `nick` varchar(255) NOT NULL DEFAULT '',
  `head` varchar(255) NOT NULL,
  `is_deleted` varchar(255) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_student
-- ----------------------------
INSERT INTO `obe_student` VALUES ('1', 'c_3_g_2_course_6587944764', '3', '2', '杨春坪', '21', '1', '18983663382', '', '', '', '0', '2019-05-25 22:31:37');
INSERT INTO `obe_student` VALUES ('2', 'c_3_g_2_course_6587952139', '3', '2', '汪琦', '22', '2', '15823029033', '', '', '', '0', '2019-05-25 22:40:13');

-- ----------------------------
-- Table structure for obe_teacher
-- ----------------------------
DROP TABLE IF EXISTS `obe_teacher`;
CREATE TABLE `obe_teacher` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `college_id` int(11) NOT NULL COMMENT '学院ID',
  `sex` tinyint(4) NOT NULL,
  `title` varchar(255) NOT NULL COMMENT '职称',
  `age` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL DEFAULT '',
  `code` varchar(255) DEFAULT NULL,
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_teacher
-- ----------------------------
INSERT INTO `obe_teacher` VALUES ('1', '杜颖', '3', '1', '3', '28', '18983663382', 'teacher_6587739171', '0', '2019-05-25 17:30:46');
INSERT INTO `obe_teacher` VALUES ('2', '胡定鹏', '4', '1', '1', '21', '15823029033', 'teacher_6587738594', '0', '2019-05-25 17:30:57');
INSERT INTO `obe_teacher` VALUES ('3', '张泽', '4', '1', '2', '42', '42456749', 'teacher_6587738956', '0', '2019-05-25 17:31:08');

-- ----------------------------
-- Table structure for system_auth
-- ----------------------------
DROP TABLE IF EXISTS `system_auth`;
CREATE TABLE `system_auth` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL COMMENT '权限名称',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '权限状态',
  `sort` bigint(20) unsigned DEFAULT '0' COMMENT '排序权重',
  `desc` varchar(255) DEFAULT '' COMMENT '备注说明',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_auth_status` (`status`) USING BTREE,
  KEY `index_system_auth_title` (`title`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COMMENT='系统-权限';

-- ----------------------------
-- Records of system_auth
-- ----------------------------
INSERT INTO `system_auth` VALUES ('1', '成绩登录管理员', '1', '0', '成绩登录管理员', '2019-05-26 10:40:40');
INSERT INTO `system_auth` VALUES ('2', '老师', '1', '0', '老师', '2019-05-26 10:40:49');
INSERT INTO `system_auth` VALUES ('3', '学生', '1', '0', '学生', '2019-05-26 10:40:58');

-- ----------------------------
-- Table structure for system_auth_node
-- ----------------------------
DROP TABLE IF EXISTS `system_auth_node`;
CREATE TABLE `system_auth_node` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `auth` bigint(20) unsigned DEFAULT NULL COMMENT '角色',
  `node` varchar(200) DEFAULT NULL COMMENT '节点',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_auth_auth` (`auth`) USING BTREE,
  KEY `index_system_auth_node` (`node`(191)) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统-权限-授权';

-- ----------------------------
-- Records of system_auth_node
-- ----------------------------

-- ----------------------------
-- Table structure for system_config
-- ----------------------------
DROP TABLE IF EXISTS `system_config`;
CREATE TABLE `system_config` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT '' COMMENT '配置名',
  `value` varchar(500) DEFAULT '' COMMENT '配置值',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_config_name` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=70 DEFAULT CHARSET=utf8mb4 COMMENT='系统-配置';

-- ----------------------------
-- Records of system_config
-- ----------------------------
INSERT INTO `system_config` VALUES ('1', 'app_name', 'OBE课程成绩评定系统');
INSERT INTO `system_config` VALUES ('2', 'site_name', 'OBE课程成绩评定系统');
INSERT INTO `system_config` VALUES ('3', 'app_version', 'v1.0');
INSERT INTO `system_config` VALUES ('4', 'site_copy', '©版权所有 YCP');
INSERT INTO `system_config` VALUES ('5', 'site_icon', 'http://127.0.0.1:8000/upload/f47b8fe06e38ae99/08e8398da45583b9.png');
INSERT INTO `system_config` VALUES ('7', 'miitbeian', '');
INSERT INTO `system_config` VALUES ('8', 'storage_type', 'local');
INSERT INTO `system_config` VALUES ('9', 'storage_local_exts', 'doc,gif,icon,jpg,mp3,mp4,p12,pem,png,rar');
INSERT INTO `system_config` VALUES ('10', 'storage_qiniu_bucket', 'https');
INSERT INTO `system_config` VALUES ('11', 'storage_qiniu_domain', '用你自己的吧');
INSERT INTO `system_config` VALUES ('12', 'storage_qiniu_access_key', '用你自己的吧');
INSERT INTO `system_config` VALUES ('13', 'storage_qiniu_secret_key', '用你自己的吧');
INSERT INTO `system_config` VALUES ('14', 'storage_oss_bucket', 'cuci-mytest');
INSERT INTO `system_config` VALUES ('15', 'storage_oss_endpoint', 'oss-cn-hangzhou.aliyuncs.com');
INSERT INTO `system_config` VALUES ('16', 'storage_oss_domain', '用你自己的吧');
INSERT INTO `system_config` VALUES ('17', 'storage_oss_keyid', '用你自己的吧');
INSERT INTO `system_config` VALUES ('18', 'storage_oss_secret', '用你自己的吧');
INSERT INTO `system_config` VALUES ('36', 'storage_oss_is_https', 'http');
INSERT INTO `system_config` VALUES ('43', 'storage_qiniu_region', '华东');
INSERT INTO `system_config` VALUES ('44', 'storage_qiniu_is_https', 'https');
INSERT INTO `system_config` VALUES ('45', 'wechat_mch_id', '1332187001');
INSERT INTO `system_config` VALUES ('46', 'wechat_mch_key', 'A82DC5BD1F3359081049C568D8502BC5');
INSERT INTO `system_config` VALUES ('47', 'wechat_mch_ssl_type', 'p12');
INSERT INTO `system_config` VALUES ('48', 'wechat_mch_ssl_p12', '65b8e4f56718182d/1bc857ee646aa15d.p12');
INSERT INTO `system_config` VALUES ('49', 'wechat_mch_ssl_key', 'cc2e3e1345123930/c407d033294f283d.pem');
INSERT INTO `system_config` VALUES ('50', 'wechat_mch_ssl_cer', '966eaf89299e9c95/7014872cc109b29a.pem');
INSERT INTO `system_config` VALUES ('51', 'wechat_token', 'mytoken');
INSERT INTO `system_config` VALUES ('52', 'wechat_appid', 'wx60a43dd8161666d4');
INSERT INTO `system_config` VALUES ('53', 'wechat_appsecret', '9978422e0e431643d4b42868d183d60b');
INSERT INTO `system_config` VALUES ('54', 'wechat_encodingaeskey', '');
INSERT INTO `system_config` VALUES ('55', 'wechat_push_url', '消息推送地址：http://127.0.0.1:8000/wechat/api.push');
INSERT INTO `system_config` VALUES ('56', 'wechat_type', 'thr');
INSERT INTO `system_config` VALUES ('57', 'wechat_thr_appid', 'wx60a43dd8161666d4');
INSERT INTO `system_config` VALUES ('58', 'wechat_thr_appkey', 'cb1610a7030b373c233d2921a8f81f21');
INSERT INTO `system_config` VALUES ('60', 'wechat_thr_appurl', '消息推送地址：http://127.0.0.1:8000/wechat/api.push');
INSERT INTO `system_config` VALUES ('61', 'component_appid', 'wx28b58798480874f9');
INSERT INTO `system_config` VALUES ('62', 'component_appsecret', '87ddce1cc24e4cd691039f926febd942');
INSERT INTO `system_config` VALUES ('63', 'component_token', 'P8QHTIxpBEq88IrxatqhgpBm2OAQROkI');
INSERT INTO `system_config` VALUES ('64', 'component_encodingaeskey', 'L5uFIa0U6KLalPyXckyqoVIJYLhsfrg8k9YzybZIHsx');
INSERT INTO `system_config` VALUES ('65', 'system_message_state', '0');
INSERT INTO `system_config` VALUES ('66', 'sms_zt_username', '可以找CUCI申请');
INSERT INTO `system_config` VALUES ('67', 'sms_zt_password', '可以找CUCI申请');
INSERT INTO `system_config` VALUES ('68', 'sms_reg_template', '您的验证码为{code}，请在十分钟内完成操作！');
INSERT INTO `system_config` VALUES ('69', 'sms_secure', '可以找CUCI申请');

-- ----------------------------
-- Table structure for system_data
-- ----------------------------
DROP TABLE IF EXISTS `system_data`;
CREATE TABLE `system_data` (
  `id` bigint(11) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL COMMENT '配置名',
  `value` longtext COMMENT '配置值',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_data_name` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='系统-数据';

-- ----------------------------
-- Records of system_data
-- ----------------------------
INSERT INTO `system_data` VALUES ('1', 'menudata', '[{\"name\":\"请输入名称\",\"type\":\"view\",\"url\":\"3252\"}]');

-- ----------------------------
-- Table structure for system_jobs
-- ----------------------------
DROP TABLE IF EXISTS `system_jobs`;
CREATE TABLE `system_jobs` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `queue` varchar(100) NOT NULL,
  `payload` longtext NOT NULL,
  `attempts` bigint(20) unsigned NOT NULL DEFAULT '0',
  `reserved` bigint(20) unsigned NOT NULL DEFAULT '0',
  `reserved_at` int(10) unsigned DEFAULT NULL,
  `available_at` int(10) unsigned NOT NULL,
  `created_at` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_jobs_reserved` (`reserved`) USING BTREE,
  KEY `index_system_jobs_attempts` (`attempts`) USING BTREE,
  KEY `index_system_jobs_reserved_at` (`reserved_at`) USING BTREE,
  KEY `index_system_jobs_available_at` (`available_at`) USING BTREE,
  KEY `index_system_jobs_create_at` (`created_at`) USING BTREE,
  KEY `index_system_jobs_queue` (`queue`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统-任务';

-- ----------------------------
-- Records of system_jobs
-- ----------------------------

-- ----------------------------
-- Table structure for system_jobs_log
-- ----------------------------
DROP TABLE IF EXISTS `system_jobs_log`;
CREATE TABLE `system_jobs_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT '' COMMENT '任务名称',
  `uri` varchar(500) DEFAULT '' COMMENT '任务对象',
  `later` bigint(20) unsigned DEFAULT '0' COMMENT '任务延时',
  `data` longtext COMMENT '任务数据',
  `desc` varchar(500) DEFAULT '' COMMENT '任务描述',
  `double` tinyint(1) unsigned DEFAULT '1' COMMENT '任务多开',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '任务状态(1新任务,2任务进行中,3任务成功,4任务失败)',
  `status_at` datetime DEFAULT NULL COMMENT '任务状态时间',
  `status_desc` varchar(500) DEFAULT '' COMMENT '任务状态描述',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_jobs_log_status` (`status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统-任务-日志';

-- ----------------------------
-- Records of system_jobs_log
-- ----------------------------

-- ----------------------------
-- Table structure for system_log
-- ----------------------------
DROP TABLE IF EXISTS `system_log`;
CREATE TABLE `system_log` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `node` varchar(200) NOT NULL DEFAULT '' COMMENT '当前操作节点',
  `geoip` varchar(15) NOT NULL DEFAULT '' COMMENT '操作者IP地址',
  `action` varchar(200) NOT NULL DEFAULT '' COMMENT '操作行为名称',
  `content` varchar(1024) NOT NULL DEFAULT '' COMMENT '操作内容描述',
  `username` varchar(50) NOT NULL DEFAULT '' COMMENT '操作人用户名',
  `create_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COMMENT='系统-日志';

-- ----------------------------
-- Records of system_log
-- ----------------------------
INSERT INTO `system_log` VALUES ('1', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-04-30 13:49:46');
INSERT INTO `system_log` VALUES ('2', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-04-30 17:14:22');
INSERT INTO `system_log` VALUES ('3', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-23 09:57:38');
INSERT INTO `system_log` VALUES ('4', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-23 21:58:43');
INSERT INTO `system_log` VALUES ('5', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-23 22:30:45');
INSERT INTO `system_log` VALUES ('6', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-25 16:47:26');
INSERT INTO `system_log` VALUES ('7', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-25 21:49:14');
INSERT INTO `system_log` VALUES ('8', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-26 09:16:22');

-- ----------------------------
-- Table structure for system_menu
-- ----------------------------
DROP TABLE IF EXISTS `system_menu`;
CREATE TABLE `system_menu` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `pid` bigint(20) unsigned DEFAULT '0' COMMENT '父ID',
  `title` varchar(100) DEFAULT '' COMMENT '名称',
  `node` varchar(200) DEFAULT '' COMMENT '节点代码',
  `icon` varchar(100) DEFAULT '' COMMENT '菜单图标',
  `url` varchar(400) DEFAULT '' COMMENT '链接',
  `params` varchar(500) DEFAULT '' COMMENT '链接参数',
  `target` varchar(20) DEFAULT '_self' COMMENT '打开方式',
  `sort` int(11) unsigned DEFAULT '0' COMMENT '菜单排序',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(0:禁用,1:启用)',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_menu_node` (`node`(191)) USING BTREE,
  KEY `index_system_menu_status` (`status`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=68 DEFAULT CHARSET=utf8mb4 COMMENT='系统-菜单';

-- ----------------------------
-- Records of system_menu
-- ----------------------------
INSERT INTO `system_menu` VALUES ('1', '0', '后台首页', '', '', 'admin/index/main', '', '_self', '100', '1', '2018-09-05 17:59:38');
INSERT INTO `system_menu` VALUES ('2', '0', '系统管理', '', '', '#', '', '_self', '300', '1', '2018-09-05 18:04:52');
INSERT INTO `system_menu` VALUES ('3', '12', '系统菜单管理', '', 'layui-icon layui-icon-layouts', 'admin/menu/index', '', '_self', '3', '1', '2018-09-05 18:05:26');
INSERT INTO `system_menu` VALUES ('4', '2', '系统配置', '', '', '#', '', '_self', '10', '1', '2018-09-05 18:07:17');
INSERT INTO `system_menu` VALUES ('5', '12', '系统用户管理', '', 'layui-icon layui-icon-username', 'admin/user/index', '', '_self', '4', '1', '2018-09-06 11:10:42');
INSERT INTO `system_menu` VALUES ('6', '12', '功能节点管理', '', 'layui-icon layui-icon-template', 'admin/node/index', '', '_self', '1', '1', '2018-09-06 14:16:13');
INSERT INTO `system_menu` VALUES ('7', '12', '访问权限管理', '', 'layui-icon layui-icon-vercode', 'admin/auth/index', '', '_self', '2', '1', '2018-09-06 15:17:14');
INSERT INTO `system_menu` VALUES ('10', '4', '文件存储配置', '', 'layui-icon layui-icon-template-1', 'admin/config/file', '', '_self', '2', '1', '2018-09-06 16:43:19');
INSERT INTO `system_menu` VALUES ('11', '4', '系统参数配置', '', 'layui-icon layui-icon-set', 'admin/config/info', '', '_self', '1', '1', '2018-09-06 16:43:47');
INSERT INTO `system_menu` VALUES ('12', '2', '权限管理', '', '', '#', '', '_self', '20', '1', '2018-09-06 18:01:31');
INSERT INTO `system_menu` VALUES ('27', '4', '系统任务管理', '', 'layui-icon layui-icon-log', 'admin/queue/index', '', '_self', '3', '1', '2018-11-29 11:13:34');
INSERT INTO `system_menu` VALUES ('35', '4', '系统消息管理', '', 'layui-icon layui-icon-notice', 'admin/message/index', '', '_self', '4', '1', '2018-12-24 14:03:52');
INSERT INTO `system_menu` VALUES ('49', '4', '系统日志管理', '', 'layui-icon layui-icon-form', 'admin/log/index', '', '_self', '5', '1', '2019-02-18 12:56:56');
INSERT INTO `system_menu` VALUES ('54', '0', '学生信息管理', '', '', '#', '', '_self', '0', '1', '2019-05-23 22:27:28');
INSERT INTO `system_menu` VALUES ('55', '61', '课程中心', '', '', '#', '', '_self', '0', '1', '2019-05-23 22:28:03');
INSERT INTO `system_menu` VALUES ('56', '55', '课程列表', '', '', '/course/index/index', '', '_self', '0', '1', '2019-05-23 22:31:22');
INSERT INTO `system_menu` VALUES ('57', '61', '教师中心', '', '', '#', '', '_self', '0', '1', '2019-05-25 15:31:01');
INSERT INTO `system_menu` VALUES ('58', '57', '教师列表', '', '', 'course/teacher/index', '', '_self', '0', '1', '2019-05-25 15:31:38');
INSERT INTO `system_menu` VALUES ('59', '57', '学院设置', '', '', 'course/college/index', '', '_self', '0', '1', '2019-05-25 15:35:09');
INSERT INTO `system_menu` VALUES ('61', '0', '教务管理', '', '', '#', '', '_self', '0', '1', '2019-05-25 21:23:52');
INSERT INTO `system_menu` VALUES ('62', '54', '学生成绩中心', '', '', '#', '', '_self', '0', '1', '2019-05-25 21:27:23');
INSERT INTO `system_menu` VALUES ('64', '54', '学生信息', '', '', '#', '', '_self', '0', '1', '2019-05-25 21:47:21');
INSERT INTO `system_menu` VALUES ('65', '64', '学生列表', '', '', 'student/index/index', '', '_self', '0', '1', '2019-05-25 21:52:23');
INSERT INTO `system_menu` VALUES ('66', '64', '班级列表', '', '', 'student/grade/index', '', '_self', '0', '1', '2019-05-25 21:53:19');
INSERT INTO `system_menu` VALUES ('67', '62', '成绩列表', '', '', 'student/performance/index', '', '_self', '0', '1', '2019-05-25 22:34:04');

-- ----------------------------
-- Table structure for system_message
-- ----------------------------
DROP TABLE IF EXISTS `system_message`;
CREATE TABLE `system_message` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `code` varchar(20) DEFAULT '' COMMENT '消息编号',
  `title` varchar(100) DEFAULT '' COMMENT '消息名称',
  `url` varchar(500) DEFAULT '' COMMENT '跳转地址',
  `desc` varchar(500) DEFAULT '' COMMENT '消息描述',
  `node` varchar(255) DEFAULT '' COMMENT '消息授权',
  `read_state` tinyint(1) unsigned DEFAULT '0' COMMENT '读取状态',
  `read_uid` bigint(20) unsigned DEFAULT '0' COMMENT '读取用户',
  `read_at` datetime DEFAULT NULL COMMENT '读取时间',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '消息状态',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_message_code` (`code`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COMMENT='系统-消息';

-- ----------------------------
-- Records of system_message
-- ----------------------------

-- ----------------------------
-- Table structure for system_node
-- ----------------------------
DROP TABLE IF EXISTS `system_node`;
CREATE TABLE `system_node` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `node` varchar(100) DEFAULT NULL COMMENT '节点代码',
  `title` varchar(500) DEFAULT NULL COMMENT '节点标题',
  `is_menu` tinyint(1) unsigned DEFAULT '0' COMMENT '是否可设置为菜单',
  `is_auth` tinyint(1) unsigned DEFAULT '1' COMMENT '是否启动RBAC权限控制',
  `is_login` tinyint(1) unsigned DEFAULT '1' COMMENT '是否启动登录控制',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  KEY `index_system_node_node` (`node`) USING BTREE,
  KEY `index_system_node_is_menu` (`is_menu`) USING BTREE,
  KEY `index_system_node_is_auth` (`is_auth`) USING BTREE,
  KEY `index_system_node_is_login` (`is_login`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=114 DEFAULT CHARSET=utf8mb4 COMMENT='系统-节点';

-- ----------------------------
-- Records of system_node
-- ----------------------------
INSERT INTO `system_node` VALUES ('1', 'admin', '系统管理', '0', '1', '1', '2019-04-30 17:18:30');
INSERT INTO `system_node` VALUES ('2', 'admin/auth/index', '系统权限管理', '1', '1', '1', '2019-04-30 17:18:32');
INSERT INTO `system_node` VALUES ('3', 'admin/auth/apply', '权限配置节点', '0', '1', '1', '2019-04-30 17:18:33');
INSERT INTO `system_node` VALUES ('4', 'admin/auth/add', '添加系统权限', '0', '1', '1', '2019-04-30 17:18:33');
INSERT INTO `system_node` VALUES ('5', 'admin/auth/edit', '编辑系统权限', '0', '1', '1', '2019-04-30 17:18:33');
INSERT INTO `system_node` VALUES ('6', 'admin/auth/forbid', '禁用系统权限', '0', '1', '1', '2019-04-30 17:18:33');
INSERT INTO `system_node` VALUES ('7', 'admin/auth/resume', '启用系统权限', '0', '1', '1', '2019-04-30 17:18:33');
INSERT INTO `system_node` VALUES ('8', 'admin/auth/del', '删除系统权限', '0', '1', '1', '2019-04-30 17:18:33');
INSERT INTO `system_node` VALUES ('9', 'admin/config/info', '系统参数配置', '1', '1', '1', '2019-04-30 17:18:34');
INSERT INTO `system_node` VALUES ('10', 'admin/config/file', '文件存储配置', '1', '1', '1', '2019-04-30 17:18:34');
INSERT INTO `system_node` VALUES ('11', 'admin/log/index', '系统操作日志', '1', '1', '1', '2019-04-30 17:18:35');
INSERT INTO `system_node` VALUES ('12', 'admin/log/del', '删除系统日志', '0', '1', '1', '2019-04-30 17:18:35');
INSERT INTO `system_node` VALUES ('13', 'admin/menu/index', '系统菜单管理', '1', '1', '1', '2019-04-30 17:18:36');
INSERT INTO `system_node` VALUES ('14', 'admin/menu/add', '添加系统菜单', '0', '1', '1', '2019-04-30 17:18:36');
INSERT INTO `system_node` VALUES ('15', 'admin/menu/edit', '编辑系统菜单', '0', '1', '1', '2019-04-30 17:18:37');
INSERT INTO `system_node` VALUES ('16', 'admin/menu/resume', '启用系统菜单', '0', '1', '1', '2019-04-30 17:18:37');
INSERT INTO `system_node` VALUES ('17', 'admin/menu/forbid', '禁用系统菜单', '0', '1', '1', '2019-04-30 17:18:37');
INSERT INTO `system_node` VALUES ('18', 'admin/menu/del', '删除系统菜单', '0', '1', '1', '2019-04-30 17:18:37');
INSERT INTO `system_node` VALUES ('19', 'admin/message/index', '', '1', '1', '1', '2019-04-30 17:18:38');
INSERT INTO `system_node` VALUES ('20', 'admin/message/state', '设置消息状态', '0', '1', '1', '2019-04-30 17:18:38');
INSERT INTO `system_node` VALUES ('21', 'admin/message/del', '删除系统消息', '0', '1', '1', '2019-04-30 17:18:38');
INSERT INTO `system_node` VALUES ('22', 'admin/message/clear', '清理所有消息', '0', '1', '1', '2019-04-30 17:18:38');
INSERT INTO `system_node` VALUES ('23', 'admin/message/onoff', '设置消息开关', '0', '1', '1', '2019-04-30 17:18:38');
INSERT INTO `system_node` VALUES ('24', 'admin/node/index', '系统节点管理', '1', '1', '1', '2019-04-30 17:18:40');
INSERT INTO `system_node` VALUES ('25', 'admin/node/clear', '清理无效的节点', '0', '1', '1', '2019-04-30 17:18:40');
INSERT INTO `system_node` VALUES ('26', 'admin/node/save', '更新节点数据', '0', '1', '1', '2019-04-30 17:18:40');
INSERT INTO `system_node` VALUES ('27', 'admin/queue/index', '系统消息任务', '1', '1', '1', '2019-04-30 17:18:40');
INSERT INTO `system_node` VALUES ('28', 'admin/queue/redo', '重置失败的任务', '0', '1', '1', '2019-04-30 17:18:41');
INSERT INTO `system_node` VALUES ('29', 'admin/queue/del', '删除消息任务', '0', '1', '1', '2019-04-30 17:18:41');
INSERT INTO `system_node` VALUES ('30', 'admin/user/index', '系统用户管理', '1', '1', '1', '2019-04-30 17:18:42');
INSERT INTO `system_node` VALUES ('31', 'admin/user/auth', '用户授权管理', '0', '1', '1', '2019-04-30 17:18:42');
INSERT INTO `system_node` VALUES ('32', 'admin/user/add', '添加系统用户', '0', '1', '1', '2019-04-30 17:18:42');
INSERT INTO `system_node` VALUES ('33', 'admin/user/edit', '编辑系统用户', '0', '1', '1', '2019-04-30 17:18:43');
INSERT INTO `system_node` VALUES ('34', 'admin/user/pass', '修改用户密码', '0', '1', '1', '2019-04-30 17:18:43');
INSERT INTO `system_node` VALUES ('35', 'admin/user/del', '删除系统用户', '0', '1', '1', '2019-04-30 17:18:43');
INSERT INTO `system_node` VALUES ('36', 'admin/user/forbid', '禁用系统用户', '0', '1', '1', '2019-04-30 17:18:43');
INSERT INTO `system_node` VALUES ('37', 'admin/user/resume', '启用系统用户', '0', '1', '1', '2019-04-30 17:18:43');
INSERT INTO `system_node` VALUES ('110', 'course', '学生选课管理', '0', '1', '1', '2019-05-25 13:52:06');
INSERT INTO `system_node` VALUES ('111', 'course/index/add', '', '0', '0', '0', '2019-05-25 13:52:16');
INSERT INTO `system_node` VALUES ('112', 'course/index', '', '0', '1', '1', '2019-05-25 13:52:18');
INSERT INTO `system_node` VALUES ('113', 'course/index/index', '', '0', '0', '0', '2019-05-25 13:52:19');

-- ----------------------------
-- Table structure for system_user
-- ----------------------------
DROP TABLE IF EXISTS `system_user`;
CREATE TABLE `system_user` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(50) DEFAULT '' COMMENT '用户账号',
  `password` varchar(32) DEFAULT '' COMMENT '用户密码',
  `qq` varchar(16) DEFAULT '' COMMENT '联系QQ',
  `mail` varchar(32) DEFAULT '' COMMENT '联系邮箱',
  `phone` varchar(16) DEFAULT '' COMMENT '联系手机',
  `login_at` datetime DEFAULT NULL COMMENT '登录时间',
  `login_ip` varchar(255) DEFAULT '' COMMENT '登录IP',
  `login_num` bigint(20) unsigned DEFAULT '0' COMMENT '登录次数',
  `authorize` varchar(255) DEFAULT '' COMMENT '权限授权',
  `desc` varchar(255) DEFAULT '' COMMENT '备注说明',
  `status` tinyint(1) unsigned DEFAULT '1' COMMENT '状态(0:禁用,1:启用)',
  `is_deleted` tinyint(1) unsigned DEFAULT '0' COMMENT '删除(1:删除,0:未删)',
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP COMMENT '创建时间',
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE KEY `index_system_user_username` (`username`) USING BTREE,
  KEY `index_system_user_status` (`status`) USING BTREE,
  KEY `index_system_user_deleted` (`is_deleted`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=10002 DEFAULT CHARSET=utf8mb4 COMMENT='系统-用户';

-- ----------------------------
-- Records of system_user
-- ----------------------------
INSERT INTO `system_user` VALUES ('10000', 'admin', '21232f297a57a5a743894a0e4a801fc3', '22222222', '', '', '2019-05-26 09:16:21', '127.0.0.1', '554', '', '', '1', '0', '2015-11-13 15:14:22');
INSERT INTO `system_user` VALUES ('10001', 'test', '662af1cd1976f09a9f8cecc868ccc0a2', '', '', '', '2019-04-18 13:28:57', '127.0.0.1', '1', '1', '', '1', '0', '2019-04-18 13:28:23');
