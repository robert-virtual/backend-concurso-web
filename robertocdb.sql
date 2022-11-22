
CREATE DATABASE robertocdb;
use robertocdb;

DROP TABLE IF EXISTS `personas`;
CREATE TABLE `personas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `peso` float NOT NULL,
  `estatura` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;


INSERT INTO `personas` VALUES (1,'Emerson Castillo','2022-11-17',144,185),(2,'Roberto Carlos Castillo','2000-08-31',144,190),(3,'angela valle','2022-11-17',200,165),(4,'Ivis Valle','2022-11-15',144,185),(5,'Daniel Valle','2000-08-08',190,170),(6,'Iris Castellanos','1975-07-23',200,170),(7,'Daysi Castellanos','1976-06-23',160,170),(13,'Emerson Castillo','2003-06-10',144,180),(14,'Emerson Castillo','2005-06-07',144,185);
