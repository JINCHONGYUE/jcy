SET FOREIGN_KEY_CHECKS=0;
create database 

#轮播图
DROP TABLE IF EXISTS `drawing_index_carousel`;
CREATE TABLE `drawing_index_carousel` (
  `cid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`cid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;


INSERT INTO `drawing_index_carousel` VALUES ('9', 'img/index/banner1.jpg', '轮播广告商品1', 'product_details.html?lid=28');
INSERT INTO `drawing_index_carousel` VALUES ('10', 'img/index/banner2.jpg', '轮播广告商品2', 'product_details.html?lid=19');
INSERT INTO `drawing_index_carousel` VALUES ('11', 'img/index/banner3.jpg', '轮播广告商品3', 'lookforward.html');
INSERT INTO `drawing_index_carousel` VALUES ('12', 'img/index/banner4.png', '轮播广告商品4', 'lookforward.html');




#登录注册
DROP TABLE IF EXISTS `drawing_user`;
CREATE TABLE `drawing_user` (
  `uid` int(11) NOT NULL auto_increment,
  `uname` varchar(32) default NULL,
  `upwd` varchar(32) default NULL,
  `email` varchar(64) default NULL,
  `phone` varchar(16) default NULL,
  `avatar` varchar(128) default NULL,
  `user_name` varchar(32) default NULL,
  `gender` int(11) default NULL,
  PRIMARY KEY  (`uid`)
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8;


INSERT INTO `drawing_user` VALUES ('1', 'dingding', '123456', 'ding@qq.com', '13511011000', 'img/avatar/default.png', '丁春秋', '0');
INSERT INTO `drawing_user` VALUES ('2', 'dangdang', '123456', 'dang@qq.com', '13501234568', 'img/avatar/default.png', '当当喵', '1');
INSERT INTO `drawing_user` VALUES ('3', 'doudou', '123456', 'dou@qq.com', '13501234569', 'img/avatar/default.png', '窦志强', '1');



#老师
DROP TABLE IF EXISTS `teacher_index_product`;
CREATE TABLE `teacher_index_product` (
  `pid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `name` varchar(32) default NULL,
  `school` varchar(64) default NULL,
  `details` varchar(128) default NULL,
  PRIMARY KEY  (`pid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;


INSERT INTO `teacher_index_product` VALUES ('null', 'img/teacher/edfesdfgjh.jpg', 'Josn cull', '毕业院校:McGill University', 'Joshua老师来自印度，生于1987年，毕业于McGill University，拥有学士学位，及授课资格认证，曾经在英国、赛内加尔、波兰等国教书。他总是能使课堂气氛活跃起来，为小朋友创造一个快乐的学习环境。他总是能用自己的创造力、活力和热情鼓励小朋友，来报名吧~');
INSERT INTO `teacher_index_product` VALUES ('null', 'img/teacher/edvfasdgr.jpg', 'Jimena M', '毕业院校:California University', 'Jimena老师来自美国，生于1987年，毕业于University of Student California，已获得硕士学位。Jimena老师性格外向且充满活力，他有超过5年的绘画从教经历，曾教过非英语母语小学生学习绘画。教学之余，他喜欢跳舞、学习新语言、旅行。欢迎小朋友们的加入！');
INSERT INTO `teacher_index_product` VALUES ('null', 'img/teacher/sdgrhdtrj.jpg', 'Joshua C', '毕业院校:University Chicago', 'Joshua老师来自美国，生于1986年，毕业于University Chicago，获得硕士学位。Joshua老师性格外向且充满活力，他有超过两年的绘画从教经历，曾教过非英语母语小学生学习绘画。教学之余，他喜欢旅行，写作以及户外活动。想要加入Joshua老师的课堂就来约课吧！');
INSERT INTO `teacher_index_product` VALUES ('null', 'img/teacher/4.jpg', 'Kailyn Z', '毕业院校:诺瓦艺术与设计大学', 'Kailyn老师来自加拿大，生于1988年，毕业于诺瓦艺术与设计大学，获得硕士学位。在校任博士生导师，2016年起在多伦多任教。');
INSERT INTO `teacher_index_product` VALUES ('null', 'img/teacher/5.jpg', '张辉', '毕业院校:中央美院', '2010年入中央美院学习，获得硕士学位。2014年留校任教，2015年赴德国学习。2017年起，回国任教，2018年起至今，任中央美院一名教授');



#教学环境、教学设备、师资力量
DROP TABLE IF EXISTS `environment_index_content`;
CREATE TABLE `environment_index_content` (
  `eid` int(11) NOT NULL auto_increment,
  `title` varchar(64) default NULL,
  `details` varchar(128) default NULL,
  `img` varchar(128) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`eid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `environment_index_content` VALUES ('null', '教学环境', '提供专业的练习厅、实训厅', 'img/advantage/studio.jpg','www.smm1');
INSERT INTO `environment_index_content` VALUES ('null', '教学设备', '学员所用画图工具都有良好的品质保证！', 'img/advantage/instrument.jpg','www.smm2');
INSERT INTO `environment_index_content` VALUES ('null', '师资力量', '我们的培训老师都是专职，且有5年以上的教育经验！', 'img/advantage/teacher.jpg','www.smm3');




#首页学生风采图片、荣誉图
DROP TABLE IF EXISTS `student_index_img`;
CREATE TABLE `student_index_img` (
  `tid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`tid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

INSERT INTO `student_index_img` VALUES ('null', 'img/student/1.jpg', '墙绘1', 'www.http://smm1');
INSERT INTO `student_index_img` VALUES ('null', 'img/student/2.jpg', '墙绘2', 'www.http://smm2');
INSERT INTO `student_index_img` VALUES ('null', 'img/student/3.jpg', '墙绘3', 'www.http://smm3');
INSERT INTO `student_index_img` VALUES ('null', 'img/student/4.jpg', '墙绘4', 'www.http://smm4');
INSERT INTO `student_index_img` VALUES ('null', 'img/student/5.jpg', '墙绘5', 'www.http://smm5');
INSERT INTO `student_index_img` VALUES ('null', 'img/student/6.jpg', '墙绘6', 'www.http://smm6');


#荣誉图
DROP TABLE IF EXISTS `honor_index_img`;
CREATE TABLE `honor_index_img` (
  `hid` int(11) NOT NULL auto_increment,
  `img` varchar(128) default NULL,
  `title` varchar(64) default NULL,
  `href` varchar(128) default NULL,
  PRIMARY KEY  (`hid`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
INSERT INTO `honor_index_img` VALUES ('null', 'img/honor/1.jpg', '荣誉1', 'www.mm1');
INSERT INTO `honor_index_img` VALUES ('null', 'img/honor/2.png', '荣誉2', 'www.mm2');
INSERT INTO `honor_index_img` VALUES ('null', 'img/honor/3.png', '荣誉3', 'www.mm3');
INSERT INTO `honor_index_img` VALUES ('null', 'img/honor/4.png', '荣誉4', 'www.mm4');
INSERT INTO `honor_index_img` VALUES ('null', 'img/honor/5.png', '荣誉5', 'www.mm5');
INSERT INTO `honor_index_img` VALUES ('null', 'img/honor/6.png', '荣誉6', 'www.mm6');
