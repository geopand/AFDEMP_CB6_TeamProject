CREATE DATABASE  IF NOT EXISTS `coblooddb` /*!40100 DEFAULT CHARACTER SET ascii */;
USE `coblooddb`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: coblooddb
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary view structure for view `allum`
--

DROP TABLE IF EXISTS `allum`;
/*!50001 DROP VIEW IF EXISTS `allum`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `allum` AS SELECT 
 1 AS `messageId`,
 1 AS `messageData`,
 1 AS `dateInfo`,
 1 AS `userId`,
 1 AS `receiverId`,
 1 AS `senderId`,
 1 AS `receiver`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `bloodrequests`
--

DROP TABLE IF EXISTS `bloodrequests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bloodrequests` (
  `requestId` int(11) NOT NULL AUTO_INCREMENT,
  `ownerId` int(11) DEFAULT '0',
  `pFirstName` varchar(45) DEFAULT NULL,
  `pLastName` varchar(45) DEFAULT NULL,
  `pFatherName` varchar(45) DEFAULT NULL,
  `contactEmail` varchar(45) DEFAULT NULL,
  `contactPhone` int(11) DEFAULT '0',
  `hospitalise` int(11) DEFAULT NULL,
  `needType` varchar(45) DEFAULT NULL,
  `bloodType` varchar(3) DEFAULT NULL,
  `needQuantity` int(11) DEFAULT '0',
  `hName` varchar(45) DEFAULT NULL,
  `hZipCode` int(11) DEFAULT '0',
  `compatibleNeed` int(11) DEFAULT '0',
  `DOCRequest` datetime DEFAULT NULL,
  `status` varchar(45) DEFAULT 'OPEN',
  `deleted` int(1) DEFAULT '0',
  `note` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`requestId`),
  KEY `ownerId_idx` (`ownerId`),
  KEY `bloodType_idx` (`bloodType`),
  CONSTRAINT `bloodType` FOREIGN KEY (`bloodType`) REFERENCES `compatible` (`bloodtype`),
  CONSTRAINT `ownerId` FOREIGN KEY (`ownerId`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bloodrequests`
--

LOCK TABLES `bloodrequests` WRITE;
/*!40000 ALTER TABLE `bloodrequests` DISABLE KEYS */;
INSERT INTO `bloodrequests` VALUES (24,1,'foo1','bar1','-','-',1,NULL,NULL,NULL,NULL,NULL,1,0,NULL,'OPEN',1,'admin'),(25,2,'foo2','bar2','-','-',1,NULL,NULL,NULL,NULL,NULL,1,0,NULL,'COMPLETED',0,'test'),(26,220,'foo3','bar3','-','-',1,NULL,NULL,NULL,NULL,NULL,1,0,NULL,'OPEN',1,'user'),(27,2,'foo4','bar4','-','-',1,NULL,NULL,NULL,NULL,NULL,1,0,NULL,'OPEN',1,'god');
/*!40000 ALTER TABLE `bloodrequests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `compatible`
--

DROP TABLE IF EXISTS `compatible`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `compatible` (
  `bloodType` varchar(3) NOT NULL,
  `0-` int(1) DEFAULT NULL,
  `0+` int(1) DEFAULT NULL,
  `B-` int(1) DEFAULT NULL,
  `B+` int(1) DEFAULT NULL,
  `A-` int(1) DEFAULT NULL,
  `A+` int(1) DEFAULT NULL,
  `AB-` int(1) DEFAULT NULL,
  `AB+` int(1) DEFAULT NULL,
  PRIMARY KEY (`bloodType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `compatible`
--

LOCK TABLES `compatible` WRITE;
/*!40000 ALTER TABLE `compatible` DISABLE KEYS */;
INSERT INTO `compatible` VALUES ('0-',1,0,0,0,0,0,0,0),('0+',1,1,0,0,0,0,0,0),('A-',1,0,0,0,1,0,0,0),('A+',1,1,0,0,1,1,0,0),('AB-',1,0,1,0,1,0,1,0),('AB+',1,1,1,1,1,1,1,1),('B-',1,0,1,0,0,0,0,0),('B+',1,1,1,1,0,0,0,0);
/*!40000 ALTER TABLE `compatible` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hospitals`
--

DROP TABLE IF EXISTS `hospitals`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hospitals` (
  `hospitalId` int(11) NOT NULL AUTO_INCREMENT,
  `hName` varchar(45) DEFAULT NULL,
  `hZipCode` int(11) DEFAULT NULL,
  `hPhone` int(11) DEFAULT NULL,
  `hAddress` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`hospitalId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hospitals`
--

LOCK TABLES `hospitals` WRITE;
/*!40000 ALTER TABLE `hospitals` DISABLE KEYS */;
/*!40000 ALTER TABLE `hospitals` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `ksern`
--

DROP TABLE IF EXISTS `ksern`;
/*!50001 DROP VIEW IF EXISTS `ksern`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `ksern` AS SELECT 
 1 AS `receiverId`,
 1 AS `senderId`,
 1 AS `messageId`,
 1 AS `messageData`,
 1 AS `dateInfo`,
 1 AS `username`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `messages` (
  `messageId` int(11) NOT NULL AUTO_INCREMENT,
  `senderId` int(11) DEFAULT NULL,
  `receiverId` int(11) DEFAULT NULL,
  `messageData` varchar(255) DEFAULT NULL,
  `dateInfo` datetime DEFAULT CURRENT_TIMESTAMP,
  `read` int(11) DEFAULT '0',
  `deleteBySender` int(11) DEFAULT '0',
  `deleteByReceiver` int(11) DEFAULT '0',
  `trashSender` int(11) DEFAULT '0',
  `trashReceiver` int(11) DEFAULT '0',
  `deleteByAdmin` int(11) DEFAULT '0',
  PRIMARY KEY (`messageId`),
  KEY `senderId_idx` (`senderId`),
  KEY `receiverId_idx` (`receiverId`),
  CONSTRAINT `receiverId` FOREIGN KEY (`receiverId`) REFERENCES `users` (`userid`),
  CONSTRAINT `senderId` FOREIGN KEY (`senderId`) REFERENCES `users` (`userid`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,2,'asda','2019-04-11 00:00:00',0,1,0,0,0,0),(2,238,220,'*Deleted by Admin*','2019-04-11 00:00:00',1,0,0,0,0,1),(3,1,220,'ok','2019-04-11 00:00:00',0,0,0,0,0,0),(9,1,2,'ddsvsdv','2019-04-12 00:07:03',1,1,0,0,0,0),(10,220,1,'aaaaaaaaa','2019-04-12 00:14:42',1,0,1,0,0,0);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `role` (
  `roleId` int(1) NOT NULL DEFAULT '3',
  `roleType` varchar(15) NOT NULL DEFAULT 'User',
  PRIMARY KEY (`roleId`),
  UNIQUE KEY `roleType_UNIQUE` (`roleType`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'Admin'),(2,'AdvancedUser'),(4,'Guest'),(3,'User');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `sern`
--

DROP TABLE IF EXISTS `sern`;
/*!50001 DROP VIEW IF EXISTS `sern`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `sern` AS SELECT 
 1 AS `receiverId`,
 1 AS `senderId`,
 1 AS `messageId`,
 1 AS `messageData`,
 1 AS `dateInfo`,
 1 AS `username`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `tokens`
--

DROP TABLE IF EXISTS `tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tokens` (
  `userId` int(11) NOT NULL,
  `token` varchar(45) NOT NULL,
  PRIMARY KEY (`token`)
) ENGINE=InnoDB DEFAULT CHARSET=ascii;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tokens`
--

LOCK TABLES `tokens` WRITE;
/*!40000 ALTER TABLE `tokens` DISABLE KEYS */;
INSERT INTO `tokens` VALUES (1,'13f573e0-a252-44dd-aa51-14d0625a348b'),(2,'29f97631-f19e-4a43-bd9c-573ceb85929b'),(2,'40af18a5-372e-48ff-abe3-0e71b7f312bf'),(1,'4b78807b-bdbd-46d0-b158-f35c17f62ba2'),(1,'5148282d-c21a-49a3-9069-fa9cdbba8a82'),(2,'59a556cb-d7d9-43a7-a59b-a530d2dfbb93'),(1,'6f1b965e-4f63-4e02-bf11-a67caa1cb347'),(238,'6fb960bd-e520-4fa6-9bcf-13d8a26bd248'),(1,'7ac7ef49-f41e-42c6-a205-e73727e06941'),(2,'8243936a-557e-4171-a914-4db3c2d97643'),(1,'9c21a717-5e63-4a1d-92cf-d7373ad1b7d9'),(1,'a023c4c8-a5c2-4f8b-b246-cae98540b48f'),(2,'b2617d7d-7f4f-472a-9faa-5bd3462fc67e'),(1,'b5da6380-fca9-4781-ae16-d672bef62f26'),(220,'c60b3cd1-4634-4bde-8feb-757f4d9ac3c5'),(1,'d1cb847f-ba96-49f1-b45b-25ecb504b82e'),(2,'e7cb5614-f616-4da9-b7c1-559a906b587f'),(2,'ef2b56b5-843e-4777-8edf-951a62da86f7');
/*!40000 ALTER TABLE `tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `usermessage`
--

DROP TABLE IF EXISTS `usermessage`;
/*!50001 DROP VIEW IF EXISTS `usermessage`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `usermessage` AS SELECT 
 1 AS `messageId`,
 1 AS `messageData`,
 1 AS `dateInfo`,
 1 AS `receiverId`,
 1 AS `senderId`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `usermessages`
--

DROP TABLE IF EXISTS `usermessages`;
/*!50001 DROP VIEW IF EXISTS `usermessages`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8mb4;
/*!50001 CREATE VIEW `usermessages` AS SELECT 
 1 AS `messageId`,
 1 AS `messageData`,
 1 AS `dateInfo`,
 1 AS `sender`,
 1 AS `receiver`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `users` (
  `userId` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `acivated` int(1) DEFAULT '1',
  `firstName` varchar(45) DEFAULT NULL,
  `lastName` varchar(45) DEFAULT NULL,
  `phoneNumber` int(11) DEFAULT '0',
  `zipCode` int(11) DEFAULT NULL,
  `bloodType` varchar(3) DEFAULT NULL,
  `cardId` int(11) DEFAULT '0',
  `dateOfLastDonation` datetime DEFAULT NULL,
  `roleId` int(1) DEFAULT '3',
  `notificationChoice` varchar(5) DEFAULT NULL,
  `deleted` int(11) DEFAULT '0',
  `banned` int(11) DEFAULT '0',
  `regDate` datetime DEFAULT NULL,
  PRIMARY KEY (`userId`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  KEY `roleId_idx` (`roleId`),
  CONSTRAINT `roleId` FOREIGN KEY (`roleId`) REFERENCES `role` (`roleid`)
) ENGINE=InnoDB AUTO_INCREMENT=239 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'god','zmtjXPITBR7cum+LS5kGRMllEo5VUsrXP+zWeNS2Yaw=','god@foo.bar',1,'-','-',0,NULL,'0-',NULL,NULL,1,NULL,NULL,NULL,NULL),(2,'admin','hHNNOsLpJL8LKqFWzO6HJhNwK1TJf8vpEjL7lrO15lY=','admin@foo.bar',1,'-','-',0,NULL,'0-',NULL,NULL,1,NULL,NULL,NULL,NULL),(220,'user','JJNdmN6Brgl4fVSnxUVK5eyXwlT1g6c9XeE39wUz4bw=','user@user.foo',1,'-','-',0,NULL,'0-',NULL,NULL,1,NULL,NULL,NULL,NULL),(237,'nope','ZhMP95nM+0LY3RFUdjxj25+CnKNZpCP5WMn2C5LkQbo=','a@g',1,'-','-',0,NULL,'0-',NULL,NULL,1,NULL,NULL,NULL,NULL),(238,'test','2crWZ+GmmJRFFO9gIDrnSuY7qGNhSdHz3yGJSB1WmsU=','tet@r',1,'-','-',0,NULL,'0-',NULL,NULL,3,NULL,1,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `allum`
--

/*!50001 DROP VIEW IF EXISTS `allum`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `allum` AS select `messages`.`messageId` AS `messageId`,`messages`.`messageData` AS `messageData`,`messages`.`dateInfo` AS `dateInfo`,`users`.`userId` AS `userId`,`messages`.`receiverId` AS `receiverId`,`messages`.`senderId` AS `senderId`,`users`.`username` AS `receiver` from (`messages` join `users`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `ksern`
--

/*!50001 DROP VIEW IF EXISTS `ksern`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `ksern` AS select distinct `messages`.`receiverId` AS `receiverId`,`messages`.`senderId` AS `senderId`,`messages`.`messageId` AS `messageId`,`messages`.`messageData` AS `messageData`,`messages`.`dateInfo` AS `dateInfo`,`users`.`username` AS `username` from (`messages` join `users`) where ((`users`.`userId` = `messages`.`receiverId`) and (`messages`.`receiverId` = `users`.`userId`) and (`messages`.`deleteByReceiver` = 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `sern`
--

/*!50001 DROP VIEW IF EXISTS `sern`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `sern` AS select distinct `messages`.`receiverId` AS `receiverId`,`messages`.`senderId` AS `senderId`,`messages`.`messageId` AS `messageId`,`messages`.`messageData` AS `messageData`,`messages`.`dateInfo` AS `dateInfo`,`users`.`username` AS `username` from (`messages` join `users`) where (((`users`.`userId` = `messages`.`senderId`) or (`users`.`userId` = `messages`.`receiverId`)) and (`messages`.`receiverId` = `users`.`userId`) and (`messages`.`deleteByReceiver` = 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usermessage`
--

/*!50001 DROP VIEW IF EXISTS `usermessage`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `usermessage` AS select distinct `messages`.`messageId` AS `messageId`,`messages`.`messageData` AS `messageData`,`messages`.`dateInfo` AS `dateInfo`,`messages`.`receiverId` AS `receiverId`,`messages`.`senderId` AS `senderId` from (`messages` join `users`) where (((`users`.`userId` = `messages`.`senderId`) or (`users`.`userId` = `messages`.`receiverId`)) and (`messages`.`receiverId` = `users`.`userId`) and (`messages`.`deleteByReceiver` = 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `usermessages`
--

/*!50001 DROP VIEW IF EXISTS `usermessages`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `usermessages` AS select distinct `messages`.`messageId` AS `messageId`,`messages`.`messageData` AS `messageData`,`messages`.`dateInfo` AS `dateInfo`,`users`.`username` AS `sender`,`users`.`username` AS `receiver` from (`messages` join `users`) where (((`users`.`userId` = `messages`.`senderId`) or (`users`.`userId` = `messages`.`receiverId`)) and (`messages`.`receiverId` = `users`.`userId`) and (`messages`.`deleteByReceiver` = 0)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-04-12 11:17:34
