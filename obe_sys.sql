/*
Navicat MySQL Data Transfer

Source Server         : 127.0.0.1_3306
Source Server Version : 50553
Source Host           : 127.0.0.1:3306
Source Database       : obe_sys

Target Server Type    : MYSQL
Target Server Version : 50553
File Encoding         : 65001

Date: 2019-06-03 18:12:44
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
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COMMENT='学院';

-- ----------------------------
-- Records of obe_college
-- ----------------------------
INSERT INTO `obe_college` VALUES ('1', '计算机学院', null, null, '1', null, null, null, null);
INSERT INTO `obe_college` VALUES ('2', '计算机学院', null, null, '1', '2019-05-25 16:05:29', null, null, null);
INSERT INTO `obe_college` VALUES ('3', '计算机学院', null, 'college_6587714704', '0', '2019-05-25 16:05:48', null, null, null);
INSERT INTO `obe_college` VALUES ('4', '会计学院', null, 'college_6587715662', '0', '2019-05-25 16:06:06', null, null, null);
INSERT INTO `obe_college` VALUES ('5', '', null, 'college_6594927301', '1', '2019-06-03 00:25:30', null, null, null);

-- ----------------------------
-- Table structure for obe_course
-- ----------------------------
DROP TABLE IF EXISTS `obe_course`;
CREATE TABLE `obe_course` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL DEFAULT '' COMMENT '课程代码',
  `name` varchar(255) NOT NULL DEFAULT '' COMMENT '课程名称',
  `credits` int(11) NOT NULL DEFAULT '0' COMMENT '学分',
  `school_year` varchar(255) NOT NULL DEFAULT '' COMMENT '学年',
  `week_of_school` varchar(255) NOT NULL DEFAULT '' COMMENT '周学时',
  `evaluation_mode` tinyint(1) NOT NULL COMMENT '考核方式',
  `goal_id` int(11) NOT NULL DEFAULT '0' COMMENT '教学目标ID',
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
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`),
  KEY `teacher_id` (`teacher_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_course
-- ----------------------------
INSERT INTO `obe_course` VALUES ('1', '1', '1', '1', '', '1', '1', '0', '1', '0', '1', '1', '0', '0', '1', null, null, '', '0000-00-00 00:00:00');
INSERT INTO `obe_course` VALUES ('3', 'c_3_t_1_course_6587917180', '大学英语', '4', '2019-2020-1', '7', '1', '6', '3', '计算机', '1', '90', '0', '1', '0', '2019-06-03 11:01:00', null, '', '0000-00-00 00:00:00');
INSERT INTO `obe_course` VALUES ('4', 'c_3_t_3_course_6587759039', '大学体育', '1', '2018-2019-1', '7', '1', '6', '3', '计算机', '1', '90', '0', '3', '0', '2019-06-03 11:22:51', null, '', '0000-00-00 00:00:00');
INSERT INTO `obe_course` VALUES ('5', 'c_3_t_3_course_6591513396', '课程设计', '15', '2018-2019-2', '19', '2', '28', '3', '专业实习', '1', '90', '0', '3', '0', '2019-06-03 11:22:30', null, '', '0000-00-00 00:00:00');
INSERT INTO `obe_course` VALUES ('6', 'c_3_t_1_course_6587917180', '大学英语', '4', '2019-2020-1', '7', '1', '6', '3', '计算机', '1', '90', '0', '1', '0', '2019-06-03 11:22:39', null, '', '0000-00-00 00:00:00');

-- ----------------------------
-- Table structure for obe_course_knowledge
-- ----------------------------
DROP TABLE IF EXISTS `obe_course_knowledge`;
CREATE TABLE `obe_course_knowledge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL DEFAULT '0' COMMENT '课程ID',
  `goal_id` int(11) NOT NULL DEFAULT '0' COMMENT '教学目标ID',
  `knowledge_id` int(11) NOT NULL DEFAULT '0' COMMENT '知识点',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COMMENT='课程_知识点';

-- ----------------------------
-- Records of obe_course_knowledge
-- ----------------------------
INSERT INTO `obe_course_knowledge` VALUES ('23', '6', '6', '38', '0', '2019-06-03 11:22:39');
INSERT INTO `obe_course_knowledge` VALUES ('24', '6', '6', '40', '0', '2019-06-03 11:22:39');
INSERT INTO `obe_course_knowledge` VALUES ('15', '3', '6', '38', '0', '2019-06-03 11:01:00');
INSERT INTO `obe_course_knowledge` VALUES ('16', '3', '6', '39', '0', '2019-06-03 11:01:00');
INSERT INTO `obe_course_knowledge` VALUES ('22', '5', '28', '42', '0', '2019-06-03 11:22:30');
INSERT INTO `obe_course_knowledge` VALUES ('21', '5', '28', '43', '0', '2019-06-03 11:22:30');
INSERT INTO `obe_course_knowledge` VALUES ('25', '4', '6', '40', '0', '2019-06-03 11:22:51');

-- ----------------------------
-- Table structure for obe_course_selection_record
-- ----------------------------
DROP TABLE IF EXISTS `obe_course_selection_record`;
CREATE TABLE `obe_course_selection_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) DEFAULT NULL,
  `course_id` int(11) DEFAULT NULL,
  `is_deleted` tinyint(4) DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `course_id_student_id` (`student_id`,`course_id`)
) ENGINE=MyISAM AUTO_INCREMENT=82 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_course_selection_record
-- ----------------------------
INSERT INTO `obe_course_selection_record` VALUES ('79', '1', '4', '0', '2019-02-02 13:19:43');
INSERT INTO `obe_course_selection_record` VALUES ('78', '1', '3', '0', '2019-02-02 13:10:06');
INSERT INTO `obe_course_selection_record` VALUES ('80', '1', '5', '1', '2019-02-02 13:22:40');
INSERT INTO `obe_course_selection_record` VALUES ('81', '1', '5', '1', '2019-06-02 13:31:04');

-- ----------------------------
-- Table structure for obe_goal
-- ----------------------------
DROP TABLE IF EXISTS `obe_goal`;
CREATE TABLE `obe_goal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `college_id` int(11) NOT NULL DEFAULT '0' COMMENT '学院ID',
  `profession_id` int(11) NOT NULL DEFAULT '0' COMMENT '专业ID',
  `target_id` int(11) NOT NULL DEFAULT '0' COMMENT '教学计划ID',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COMMENT='教育目标';

-- ----------------------------
-- Records of obe_goal
-- ----------------------------
INSERT INTO `obe_goal` VALUES ('6', '编程能力', '3', '1', '1', '0', '2019-06-02 22:05:35');
INSERT INTO `obe_goal` VALUES ('14', '编程能量', '3', '1', '1', '1', '2019-06-02 20:43:00');
INSERT INTO `obe_goal` VALUES ('10', '编程能量', '3', '1', '1', '1', '2019-06-02 21:54:10');
INSERT INTO `obe_goal` VALUES ('13', '编程能量', '3', '1', '1', '1', '2019-06-02 21:56:47');
INSERT INTO `obe_goal` VALUES ('17', '编程能量', '3', '1', '1', '1', '2019-06-02 22:00:42');
INSERT INTO `obe_goal` VALUES ('28', '英语能力', '3', '1', '1', '0', '2019-06-02 22:08:11');

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
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='班级';

-- ----------------------------
-- Records of obe_grade
-- ----------------------------
INSERT INTO `obe_grade` VALUES ('1', '2015级信管二班', 'teacher_6587932872', '3', '1', '0', '2019-05-25 22:08:07');
INSERT INTO `obe_grade` VALUES ('2', '2017信管一班', 'grade_6587933508', '3', '0', '0', '2019-05-25 22:09:10');
INSERT INTO `obe_grade` VALUES ('3', '2015级信管二班', 'grade_6587934782', '3', '0', '0', '2019-05-25 22:11:18');
INSERT INTO `obe_grade` VALUES ('4', '搜索', 'grade_6594928859', '3', '1', '0', '2019-06-03 00:28:05');

-- ----------------------------
-- Table structure for obe_knowledge
-- ----------------------------
DROP TABLE IF EXISTS `obe_knowledge`;
CREATE TABLE `obe_knowledge` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `goal_id` int(11) NOT NULL DEFAULT '0' COMMENT '教学目标ID',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=44 DEFAULT CHARSET=utf8mb4 COMMENT='知识点';

-- ----------------------------
-- Records of obe_knowledge
-- ----------------------------
INSERT INTO `obe_knowledge` VALUES ('38', 'SQL语句', '6', '0', '2019-06-02 22:05:35');
INSERT INTO `obe_knowledge` VALUES ('39', '需求分析', '6', '0', '2019-06-02 22:05:35');
INSERT INTO `obe_knowledge` VALUES ('40', '测试能力', '6', '0', '2019-06-02 22:05:35');
INSERT INTO `obe_knowledge` VALUES ('43', '交流能力', '28', '0', '2019-06-02 22:08:11');
INSERT INTO `obe_knowledge` VALUES ('42', '听写能力', '28', '0', '2019-06-02 22:08:11');
INSERT INTO `obe_knowledge` VALUES ('41', '翻译能力', '28', '0', '2019-06-02 22:08:11');

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
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`),
  KEY `grade_id` (`grade_id`),
  KEY `student_id` (`student_id`),
  KEY `teacher_id` (`teacher_id`),
  KEY `course_id` (`course_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='成绩列表';

-- ----------------------------
-- Records of obe_performance
-- ----------------------------
INSERT INTO `obe_performance` VALUES ('1', '3', '2', '1', null, '3', '111', '11', '0', '2019-06-03 14:56:46');
INSERT INTO `obe_performance` VALUES ('2', '3', '2', '1', null, '5', '99', '11', '0', '2019-06-03 17:11:36');
INSERT INTO `obe_performance` VALUES ('4', '3', '2', '3', null, '3', '75', '册', '0', '2019-06-03 18:11:35');

-- ----------------------------
-- Table structure for obe_performance_knowledge_record
-- ----------------------------
DROP TABLE IF EXISTS `obe_performance_knowledge_record`;
CREATE TABLE `obe_performance_knowledge_record` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL DEFAULT '0' COMMENT '课程ID',
  `student_id` int(11) NOT NULL DEFAULT '0',
  `knowledge_id` int(11) NOT NULL DEFAULT '0' COMMENT '知识点ID',
  `score` varchar(255) NOT NULL DEFAULT '' COMMENT '分数',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  `college_id` int(11) DEFAULT NULL COMMENT '学院ID',
  `grade_id` int(11) DEFAULT NULL COMMENT '班级ID',
  `performance_id` int(11) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `select` (`course_id`,`student_id`,`knowledge_id`,`college_id`,`grade_id`,`performance_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COMMENT='成绩_知识点_学生综合表';

-- ----------------------------
-- Records of obe_performance_knowledge_record
-- ----------------------------
INSERT INTO `obe_performance_knowledge_record` VALUES ('4', '5', '1', '43', '66', '0', '2019-06-03 17:11:36', '3', '2', '2');
INSERT INTO `obe_performance_knowledge_record` VALUES ('3', '5', '1', '42', '77', '0', '2019-06-03 17:11:36', '3', '2', '2');
INSERT INTO `obe_performance_knowledge_record` VALUES ('5', '3', '3', '38', '22', '0', '2019-06-03 18:11:35', '3', '2', '4');
INSERT INTO `obe_performance_knowledge_record` VALUES ('6', '3', '3', '39', '77', '0', '2019-06-03 18:11:35', '3', '2', '4');

-- ----------------------------
-- Table structure for obe_profession
-- ----------------------------
DROP TABLE IF EXISTS `obe_profession`;
CREATE TABLE `obe_profession` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `college_id` int(11) DEFAULT '0' COMMENT '学院Id',
  `is_deleted` tinyint(1) NOT NULL DEFAULT '0',
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COMMENT='专业表';

-- ----------------------------
-- Records of obe_profession
-- ----------------------------
INSERT INTO `obe_profession` VALUES ('1', '信息管理与信息系统', '3', '0', '2019-06-02 14:45:17');
INSERT INTO `obe_profession` VALUES ('2', '会计', '4', '0', '2019-06-02 14:46:40');
INSERT INTO `obe_profession` VALUES ('3', '数学学院', '4', '0', '2019-06-03 00:39:22');
INSERT INTO `obe_profession` VALUES ('4', '专业会计', '4', '0', '2019-06-03 00:44:11');

-- ----------------------------
-- Table structure for obe_student
-- ----------------------------
DROP TABLE IF EXISTS `obe_student`;
CREATE TABLE `obe_student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) NOT NULL DEFAULT '' COMMENT '编号',
  `student_number` varchar(64) NOT NULL DEFAULT '' COMMENT '学号',
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
  `id_number` varchar(255) NOT NULL DEFAULT '' COMMENT '身份证',
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`),
  KEY `grade_id` (`grade_id`),
  KEY `user_id` (`user_id`(250))
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4;

-- ----------------------------
-- Records of obe_student
-- ----------------------------
INSERT INTO `obe_student` VALUES ('1', 'c_3_g_2_course_6591243325', '11303060217', '3', '2', '杨春坪', '21', '1', '18983663382', '', '', '', '0', '2019-05-29 18:05:43', '500382199402254135', '686ff5653a5b3d8de770cd80bb940823');
INSERT INTO `obe_student` VALUES ('2', 'c_3_g_2_course_6587952139', '', '3', '2', '汪琦', '22', '2', '15823029033', '', '', '', '0', '2019-05-25 22:40:13', '', '');
INSERT INTO `obe_student` VALUES ('3', 'c_3_g_2_course_6594932338', '11503060217', '3', '2', '马大头', '21', '1', '15923029033', '', '', '', '0', '2019-06-03 00:33:53', '500382199402254135', '686ff5653a5b3d8de770cd80bb940823');
INSERT INTO `obe_student` VALUES ('4', 'c_3_g_2_course_6594933075', '11503060215', '3', '2', '天生', '19', '1', '18716284374', '', '', '', '0', '2019-06-03 00:35:07', '5003821994022541', '640e91c38df19bf88d275bba009dbc17');

-- ----------------------------
-- Table structure for obe_target
-- ----------------------------
DROP TABLE IF EXISTS `obe_target`;
CREATE TABLE `obe_target` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL DEFAULT '',
  `college_id` int(11) NOT NULL DEFAULT '0' COMMENT '学院ID',
  `profession_id` int(11) DEFAULT NULL COMMENT '教学目标',
  `content` text NOT NULL,
  `is_deleted` tinyint(4) NOT NULL,
  `create_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COMMENT='教学计划';

-- ----------------------------
-- Records of obe_target
-- ----------------------------
INSERT INTO `obe_target` VALUES ('1', '信息管理与信息系统教学目标', '1', '1', '<p>全国普通<a href=\"https://baike.baidu.com/item/%E9%AB%98%E7%AD%89%E5%AD%A6%E6%A0%A1%E4%BD%93%E8%82%B2\" target=\"_blank\">高等学校体育</a>课程教学指导纲要<sup data-ctrmap=\":1,\" data-sup=\"1\">&nbsp;[1]</sup><a name=\"ref_[1]_6310435\">&nbsp;</a></p>\r\n\r\n<p>为了全面贯彻党的教育方针，促进学生的健康发展，使当代大学生成为社会主义事业的建设者和接班人，根据《中共中央国务院关于深化教育改革全面推进素质教育的决定》和国务院批准发布实行的《<a href=\"https://baike.baidu.com/item/%E5%AD%A6%E6%A0%A1%E4%BD%93%E8%82%B2%E5%B7%A5%E4%BD%9C%E6%9D%A1%E4%BE%8B\" target=\"_blank\">学校体育工作条例</a>》的精神，在总结高等学校<a href=\"https://baike.baidu.com/item/%E4%BD%93%E8%82%B2%E8%AF%BE%E7%A8%8B\" target=\"_blank\">体育课程</a>建设和教学改革经验的基础上，特制定本纲要。</p>\r\n\r\n<p>本纲要是国家对大学生在体育课程方面的基本要求，是新时期普通高等学校制订体育<a href=\"https://baike.baidu.com/item/%E8%AF%BE%E7%A8%8B%E6%95%99%E5%AD%A6%E5%A4%A7%E7%BA%B2\" target=\"_blank\">课程教学大纲</a>，进行体育课程建设和评价的依据。</p>\r\n\r\n<p>一、课程性质</p>\r\n\r\n<p>第一条　体育课程是大学生以<a href=\"https://baike.baidu.com/item/%E8%BA%AB%E4%BD%93%E7%BB%83%E4%B9%A0\" target=\"_blank\">身体练习</a>为主要手段，通过合理的体育教育和科学的体育锻炼过程，达到增强体质、增进健康和提高体育素养为主要目标的公共必修课程；是学校课程体系的重要组成部分；是高等学校体育工作的中心环节。</p>\r\n\r\n<p>第二条　体育课程是寓促进身心和谐发展、思想品德教育、文化科学教育、生活与体育技能教育于身体活动并有机结合的教育过程；是实施素质教育和培养全面发展的人才的重要途径。</p>\r\n\r\n<p>二、课程目标</p>\r\n\r\n<p>第三条　基本目标</p>\r\n\r\n<p>基本目标是根据大多数学生的基本要求而确定的，分为五个领域目标。</p>\r\n\r\n<p>运动参与目标：积极参与各种<a href=\"https://baike.baidu.com/item/%E4%BD%93%E8%82%B2%E6%B4%BB%E5%8A%A8\" target=\"_blank\">体育活动</a>并基本形成自觉锻炼的习惯，基本形成<a href=\"https://baike.baidu.com/item/%E7%BB%88%E8%BA%AB%E4%BD%93%E8%82%B2\" target=\"_blank\">终身体育</a>的意识，能够编制可行的个人锻炼计划，具有一定的<a href=\"https://baike.baidu.com/item/%E4%BD%93%E8%82%B2%E6%96%87%E5%8C%96\" target=\"_blank\">体育文化</a>欣赏能力。</p>\r\n\r\n<p>运动技能目标：熟练掌握两项以上健身运动的基本方法和技能；能科学地进行体育锻炼，提高自己的运动能力；掌握常见运动创伤的处置方法。</p>\r\n\r\n<p>身体健康目标：能测试和评价体质健康状况，掌握有效提高身体素质、全面发展体能的知识与方法；能合理选择人体需要的健康营养食品；养成良好的行为习惯，形成健康的生活方式；具有健康的体魄。</p>\r\n\r\n<p>心理健康目标：根据自己的能力设置体育学习目标；自觉通过体育活动改善心理状态、克服心理障碍，养成积极乐观的生活态度；运用适宜的方法调节自己的情绪；在运动中体验运动的乐趣和成功的感觉。</p>\r\n\r\n<p>社会适应目标：表现出良好的<a href=\"https://baike.baidu.com/item/%E4%BD%93%E8%82%B2%E9%81%93%E5%BE%B7\" target=\"_blank\">体育道德</a>和合作精神；正确处理竞争与合作的关系。</p>\r\n\r\n<p>第四条　发展目标</p>\r\n\r\n<p>发展目标是针对部分学有所长和有<a href=\"https://baike.baidu.com/item/%E4%BD%99%E5%8A%9B\" target=\"_blank\">余力</a>的学生确定的，也可作为大多数学生的努力目标，分为五个领域目标。</p>\r\n\r\n<p>运动参与目标：形成良好的体育锻炼习惯；能独立制订适用于自身需要的<a href=\"https://baike.baidu.com/item/%E5%81%A5%E8%BA%AB%E8%BF%90%E5%8A%A8%E5%A4%84%E6%96%B9\" target=\"_blank\">健身运动处方</a>；具有较高的体育文化素养和观赏水平。</p>\r\n\r\n<p>运动技能目标：积极提高<a href=\"https://baike.baidu.com/item/%E8%BF%90%E5%8A%A8%E6%8A%80%E6%9C%AF\" target=\"_blank\">运动技术</a>水平，发展自己的运动才能，在某个运动项目上达到或相当于国家等级运动员水平；能参加有挑战性的野外活动和<a href=\"https://baike.baidu.com/item/%E8%BF%90%E5%8A%A8%E7%AB%9E%E8%B5%9B\" target=\"_blank\">运动竞赛</a>。</p>\r\n\r\n<p>身体健康目标：能选择良好的运动环境，全面发展体能，提高自身科学锻炼的能力，练就强健的体魄。</p>\r\n\r\n<p>心理健康目标：在具有挑战性的运动环境中表现出勇敢顽强的意志品质。</p>\r\n\r\n<p>社会适应目标：形成良好的行为习惯，主动关心、积极参加<a href=\"https://baike.baidu.com/item/%E7%A4%BE%E5%8C%BA%E4%BD%93%E8%82%B2\" target=\"_blank\">社区体育</a>事务。</p>\r\n\r\n<p>三、课程设置</p>\r\n\r\n<p>第五条　普通高等学校的一、二年级必须开设体育课程（四个学期共计144学时）。修满规定学分、达到基本要求是学生毕业、获得学位的必要条件之一。</p>\r\n\r\n<p>第六条　普通高等学校对三年级以上学生（包括研究生）开设体育选修课。</p>\r\n\r\n<p>四、课程结构</p>\r\n\r\n<p>第七条　为实现体育课程目标，应使课堂教学与课外、校外的体育活动有机结合，学校与社会紧密联系。要把有目的、有计划、有组织的课外体育锻炼、校外（社会、野外）活动、运动训练等纳入体育课程，形成课内外、校内外有机联系的课程结构。</p>\r\n\r\n<p>第八条　根据学校教育的总体要求和体育课程的自身规律，应面向全体学生开设多种类型的体育课程，可以打破原有的系别、班级建制，重新组合上课，以满足不同层次、不同水平、不同兴趣学生的需要。重视理论与实践相结合，在运动实践教学中注意渗透相关理论知识，并运用多种形式和现代教学手段，安排约10%的理论教学内容（每学期约4学时），扩大体育的知识面，提高学生的认知能力。</p>\r\n\r\n<p>第九条　要充分发挥学生的主体作用和教师的主导作用，努力倡导开放式、探究式教学，努力拓展体育课程的时间和空间。在教师的指导下，学生应具有自主选择课程内容、自主选择任课教师、自主选择上课时间的自由度，营造生动、活泼、主动的学习氛围。</p>\r\n\r\n<p>第十条　应把校运动队及部分确有运动特长学生的专项运动训练纳入体育课程之中。对部分身体异常和病、残、弱及个别高龄等特殊群体的学生，开设以康复、保健为主的体育课程。</p>\r\n\r\n<p>五、课程内容与教学方法</p>\r\n\r\n<p>第十一条　确定体育课程内容的主要原则是：</p>\r\n\r\n<p>健身性与文化性相结合。紧扣课程的主要目标，把&ldquo;健康第一&rdquo;的指导思想作为确定课程内容的基本出发点，同时重视课程内容的体育文化含量。</p>\r\n\r\n<p>选择性与实效性相结合。学校应根据学生的特点以及地域、气候、场馆设施等不同情况确定课程内容，课程内容应力求丰富多彩，为学生提供较大的选择空间。要注意课程内容对促进学生健康发展的实效性，并注意与中学体育课程内容的衔接。</p>\r\n\r\n<p>科学性和可接受性相结合。教学内容应与学科发展相适应，反映本学科的新进展、新成果。要以人为本，遵循大学生的身心发展规律和兴趣爱好，既要考虑主动适应学生个性发展的需要，也要考虑主动适应社会发展的需要，为学生所用，便于学生课外自学、自练。</p>\r\n\r\n<p>民族性与世界性相结合。弘扬我国<a href=\"https://baike.baidu.com/item/%E6%B0%91%E6%97%8F%E4%BC%A0%E7%BB%9F%E4%BD%93%E8%82%B2\" target=\"_blank\">民族传统体育</a>，汲取世界优秀体育文化，体现时代性、发展性、民族性和中国特色。</p>\r\n\r\n<p>充分反映和体现教育部、<a href=\"https://baike.baidu.com/item/%E5%9B%BD%E5%AE%B6%E4%BD%93%E8%82%B2%E6%80%BB%E5%B1%80\" target=\"_blank\">国家体育总局</a>制定的《<a href=\"https://baike.baidu.com/item/%E5%AD%A6%E7%94%9F%E4%BD%93%E8%B4%A8%E5%81%A5%E5%BA%B7%E6%A0%87%E5%87%86\" target=\"_blank\">学生体质健康标准</a>（试行方案）》的内容和要求。</p>\r\n\r\n<p>第十二条　教学方法要讲究个性化和多样化，提倡师生之间、学生与学生之间的多边互助活动，努力提高学生参与的积极性，最大限度地发挥学生的创造性。不仅要注重教法的研究，更要加强对学生学习方法和练习方法的指导，提高学生自学、自练的能力。</p>\r\n\r\n<p>六、课程建设与课程资源的开发</p>\r\n\r\n<p>第十三条　体育教师是课程教学的具体执行者和组织者。学校应当在上级行政部门核定的教师总编制内，按照体育课程教学计划授课、开展<a href=\"https://baike.baidu.com/item/%E8%AF%BE%E5%A4%96%E4%BD%93%E8%82%B2%E6%B4%BB%E5%8A%A8\" target=\"_blank\">课外体育活动</a>以及完成培养优秀体育人才训练的任务，配备相应数量合格的体育教师。</p>\r\n\r\n<p>第十四条　体育教师要与时俱进，努力提高自身的政治、业务素养。学校应当有目的、有计划地安排体育教师定期接受教育培训，不断完善他们的知识结构、能力结构，逐步提高学历水平，从而提高体育师资队伍的整体水平，以适应现代教育的需要。</p>\r\n\r\n<p>第十五条　体育教师在强化培养人才职能的基础上，逐步加强学校<a href=\"https://baike.baidu.com/item/%E4%BD%93%E8%82%B2%E7%A7%91%E5%AD%A6%E7%A0%94%E7%A9%B6\" target=\"_blank\">体育科学研究</a>的职能和社会服务（含社区体育）的职能，开展经常性的科学研究和教育教学的研究，不断推广优秀教学成果。</p>\r\n\r\n<p>第十六条　学校应当按照教育部发布的&ldquo;普通高等学校体育场馆设施、器材配备目录&rdquo;及有关规定进行规划和建设，创造条件满足体育课程的实际需要，采取措施延长体育场馆、设施的开放时间，提高对各项体育设施的利用率。</p>\r\n\r\n<p>第十七条　要建立、健全体育课程的各项规章制度和教师培养聘任制度；各类教学文件和教师、学生考核资料须归档立案；建立《学生体质健康标准》测试管理系统；建立体育场馆设施、器材的管理系统；逐步实现体育课程管理的科学化、系统化和计算机网络化。</p>\r\n\r\n<p>第十八条　各校应根据本纲要和学校的实际情况制订教学大纲，自主选择教学内容，有的放矢地进行教学改革和试验，加强教学过程控制，防止以改革之名行无政府主义之实的不良现象发生。根据体育课程的实际情况，为确保教学质量，课堂教学班人数一般以30人左右为宜。</p>\r\n\r\n<p>第十九条　体育课程教材的审定工作由教育部全国<a href=\"https://baike.baidu.com/item/%E9%AB%98%E6%A0%A1%E4%BD%93%E8%82%B2\" target=\"_blank\">高校体育</a>教学指导委员会统一规划与组织。本着&ldquo;一纲多本&rdquo;的原则，博采众长编写高质量的教材。未经全国高校体育课程教学指导委员会审定通过的体育课程教材，各地、各高校均不得选用，以杜绝质量低劣的教材进入课堂。</p>\r\n\r\n<p>第二十条　因时因地制宜开发利用各种课程资源是课程建设的重要途径。如：充分利用校内外有体育特长的教师、班主任、校医、家长、学生骨干等，开发人力资源。</p>\r\n\r\n<p>充分利用校内外的体育场馆设施，合理布局，合理使用有限的物力和财力，开发体育设施资源。</p>\r\n\r\n<p>做好现有运动项目的改造和对新兴、传统体育项目的利用，开发运动项目资源。</p>\r\n\r\n<p>充分利用各种媒体（广播、电视、网络等）获取信息，不断充实、更新课程内容。</p>\r\n\r\n<p>充分利用课外时间和节假日，开展<a href=\"https://baike.baidu.com/item/%E5%AE%B6%E5%BA%AD%E4%BD%93%E8%82%B2\" target=\"_blank\">家庭体育</a>、社区体育、体育夏（冬）令营、体育节、郊游等各种体育活动，开发课外和校外体育资源。</p>\r\n\r\n<p>充分利用空气、阳光、水、江、河、湖、海、沙滩、田野、森林、山地、草原、雪原、荒原等条件，开展野外生存、生活方面的教学与训练，开发自然环境资源。</p>\r\n\r\n<p>七、课程评价</p>\r\n\r\n<p>第二十一条　体育课程评价包括对学生的学习、教师的教学和课程建设等三个方面。学生的学习评价应是对学习效果和过程的评价，主要包括体能与运动技能、认知、学习态度与行为、交往与合作精神、情意表现等，通过学生自评、互评和教师评定等方式进行。评价中应淡化甄别、选拔功能，强化激励、发展功能，把学生的进步幅度纳入评价内容。教师的教学评价内容主要包括教师业务素养（专业素质、教学能力、科研能力、教学工作量）和课堂教学两个方面，可通过教师自评、学生评价、同行专家评议等方式进行。课程建设评价的内容主要包括课程结构体系、课程内容、教材建设、课程管理、师资配备与培训、体育经费、场馆设施以及课程目标的达成程度等，采用多元综合评价的方式进行。评价过程中，应重视学生的学习效果和反应，重视社会有关方面的评价意见。</p>\r\n\r\n<p>第二十二条　体育课程建设的评价由教育部组织进行。各省、自治区、直辖市教育行政部门应根据教育部有关规定制定评价方案，定期表彰和奖励有突出贡献的个人和成绩优秀的单位。教育部在四年一次的<a href=\"https://baike.baidu.com/item/%E5%85%A8%E5%9B%BD%E5%A4%A7%E5%AD%A6%E7%94%9F%E8%BF%90%E5%8A%A8%E4%BC%9A\" target=\"_blank\">全国大学生运动会</a>上进行全国性表彰和奖励，充分发挥教育评价的导向和激励作用。</p>\r\n\r\n<p>八、附则</p>\r\n\r\n<p>第二十三条　本纲要适用于全国普通高等学校。普通高等学校体育类专业不适用本纲要。</p>\r\n', '0', '2019-06-02 17:36:16');

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
  PRIMARY KEY (`id`),
  KEY `college_id` (`college_id`)
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
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COMMENT='系统-日志';

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
INSERT INTO `system_log` VALUES ('9', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-29 21:04:55');
INSERT INTO `system_log` VALUES ('10', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-30 16:08:25');
INSERT INTO `system_log` VALUES ('11', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-30 16:59:47');
INSERT INTO `system_log` VALUES ('12', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-30 17:16:04');
INSERT INTO `system_log` VALUES ('13', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-30 20:34:43');
INSERT INTO `system_log` VALUES ('14', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-30 20:38:06');
INSERT INTO `system_log` VALUES ('15', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'test', '2019-05-30 20:38:58');
INSERT INTO `system_log` VALUES ('16', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-05-30 20:39:30');
INSERT INTO `system_log` VALUES ('17', 'admin/login/index', '127.0.0.1', '系统管理', '用户登录系统成功', 'admin', '2019-06-02 12:02:49');

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
) ENGINE=InnoDB AUTO_INCREMENT=73 DEFAULT CHARSET=utf8mb4 COMMENT='系统-菜单';

-- ----------------------------
-- Records of system_menu
-- ----------------------------
INSERT INTO `system_menu` VALUES ('1', '0', '后台首页', '', '', 'admin/index/main', '', '_self', '0', '1', '2018-09-05 17:59:38');
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
INSERT INTO `system_menu` VALUES ('68', '55', '教学计划列表', '', '', 'course/target/index', '', '_self', '0', '1', '2019-05-29 21:06:17');
INSERT INTO `system_menu` VALUES ('69', '0', '目标达成统计', '', '', 'course/analysis/index', '', '_self', '0', '1', '2019-05-29 23:14:16');
INSERT INTO `system_menu` VALUES ('70', '55', '学生选课管理', '', '', 'course/record/index', '', '_self', '0', '1', '2019-06-02 11:54:00');
INSERT INTO `system_menu` VALUES ('71', '57', '专业列表', '', '', 'course/profession/index', '', '_self', '0', '1', '2019-06-02 14:35:54');
INSERT INTO `system_menu` VALUES ('72', '55', '教学目标', '', '', 'course/goal/index', '', '_self', '0', '1', '2019-06-02 15:05:13');

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
INSERT INTO `system_user` VALUES ('10000', 'admin', '21232f297a57a5a743894a0e4a801fc3', '22222222', '', '', '2019-06-02 12:02:49', '127.0.0.1', '562', '', '', '1', '0', '2015-11-13 15:14:22');
INSERT INTO `system_user` VALUES ('10001', 'test', 'afdd0b4ad2ec172c586e2150770fbf9e', '', '', '', '2019-05-30 20:38:58', '127.0.0.1', '2', '', '', '1', '0', '2019-04-18 13:28:23');
