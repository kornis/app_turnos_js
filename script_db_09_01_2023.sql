-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: negocio
-- ------------------------------------------------------
-- Server version	8.0.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments` (
  `id` bigint unsigned NOT NULL AUTO_INCREMENT,
  `date` varchar(200) NOT NULL,
  `employee_id` int unsigned NOT NULL,
  `store_id` int unsigned NOT NULL,
  `customer_id` int unsigned NOT NULL,
  `type_id` int unsigned NOT NULL,
  `_uuid` varchar(200) NOT NULL,
  `hour` varchar(200) NOT NULL,
  `fraction` varchar(200) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `appointments_store_id_IDX` (`store_id`) USING BTREE,
  KEY `appointments_customer_id_IDX` (`customer_id`) USING BTREE,
  KEY `appointments_employee_id_IDX` (`employee_id`) USING BTREE,
  KEY `appointments_FK` (`type_id`),
  CONSTRAINT `appointments_FK` FOREIGN KEY (`type_id`) REFERENCES `appointments_type` (`id`),
  CONSTRAINT `appointments_FK_1` FOREIGN KEY (`customer_id`) REFERENCES `customers` (`id`),
  CONSTRAINT `appointments_FK_2` FOREIGN KEY (`employee_id`) REFERENCES `employees` (`id`),
  CONSTRAINT `appointments_FK_3` FOREIGN KEY (`store_id`) REFERENCES `stores` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (3,'15/01/2023',2,2,10,3,'72e71b31-b205-4120-93b6-9825d8cf0239','15:30','[\"15:30\"]'),(12,'15/01/2023',2,2,10,3,'81987bdf-0d35-4328-b5e6-4cd4567b8044','14:30','[\"14:30\"]'),(13,'15/01/2023',2,2,10,3,'503d6d4d-11de-43c4-9f06-360b43c16868','14:00','[\"14:00\"]'),(14,'15/01/2023',2,2,10,3,'778b1971-1006-44d1-ae76-ca6c3f86f923','16:00','[\"16:00\"]'),(15,'15/01/2023',2,2,10,3,'3cb6ba51-3dcd-4eca-826b-76b988c51520','17:00','[\"17:00\",\"17:30\",\"18:00\",\"18:30\"]'),(16,'15/01/2023',2,2,10,3,'3cb6ba51-3dcd-4eca-826b-76b988c51520','17:30','[\"17:00\",\"17:30\",\"18:00\",\"18:30\"]'),(17,'15/01/2023',2,2,10,3,'3cb6ba51-3dcd-4eca-826b-76b988c51520','18:00','[\"17:00\",\"17:30\",\"18:00\",\"18:30\"]'),(18,'15/01/2023',2,2,10,3,'3cb6ba51-3dcd-4eca-826b-76b988c51520','18:30','[\"17:00\",\"17:30\",\"18:00\",\"18:30\"]');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments_type`
--

DROP TABLE IF EXISTS `appointments_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointments_type` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `duration` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  KEY `appointments_type_name_IDX` (`name`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments_type`
--

LOCK TABLES `appointments_type` WRITE;
/*!40000 ALTER TABLE `appointments_type` DISABLE KEYS */;
INSERT INTO `appointments_type` VALUES (3,'corte',30);
/*!40000 ALTER TABLE `appointments_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `customers`
--

DROP TABLE IF EXISTS `customers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `customers` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `payment_methods` int unsigned DEFAULT NULL,
  `id_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `address_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `customers_id_number_IDX` (`id_number`) USING BTREE,
  KEY `customers_name_IDX` (`name`,`lastname`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `customers`
--

LOCK TABLES `customers` WRITE;
/*!40000 ALTER TABLE `customers` DISABLE KEYS */;
INSERT INTO `customers` VALUES (10,'Pepe','Argento',NULL,NULL,NULL,'2023-01-03 02:35:08','2023-01-03 02:35:08',NULL,'pepeargento@gmail.com','$2a$12$afTfIAzJl3XYIE6elM4SReD5HGFkz8BvThlPX3nLWKdR4e8DtHXby');
/*!40000 ALTER TABLE `customers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `employees`
--

DROP TABLE IF EXISTS `employees`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employees` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `id_number` varchar(100) DEFAULT NULL,
  `admission_date` date NOT NULL,
  `active` tinyint unsigned NOT NULL DEFAULT '1',
  `store_id` int unsigned NOT NULL,
  `address_id` int unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `employees_active_IDX` (`active`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employees`
--

LOCK TABLES `employees` WRITE;
/*!40000 ALTER TABLE `employees` DISABLE KEYS */;
INSERT INTO `employees` VALUES (2,'Juanma','Chicco','12345678','2023-01-03',1,2,NULL,'2023-01-03 02:02:35','2023-01-03 02:02:35',NULL),(3,'Ricardo','Ruben','12345678','2023-01-09',1,2,NULL,'2023-01-09 04:41:06','2023-01-09 04:41:06',NULL),(4,'Pepe','Argento','12345678','2023-01-09',1,2,NULL,'2023-01-09 04:41:16','2023-01-09 04:41:16',NULL);
/*!40000 ALTER TABLE `employees` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stores`
--

DROP TABLE IF EXISTS `stores`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stores` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `street` varchar(200) NOT NULL,
  `city` varchar(100) DEFAULT NULL,
  `contact_id` int unsigned DEFAULT NULL,
  `street_number` int unsigned DEFAULT NULL,
  `country` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stores`
--

LOCK TABLES `stores` WRITE;
/*!40000 ALTER TABLE `stores` DISABLE KEYS */;
INSERT INTO `stores` VALUES (2,'Peluqueria Fede','Calle Falsa','Buenos Aires',NULL,123,'Argentina');
/*!40000 ALTER TABLE `stores` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-01-09 17:14:57
