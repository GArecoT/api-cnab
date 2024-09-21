/*M!999999\- enable the sandbox mode */ 
-- MariaDB dump 10.19-11.5.2-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: cnab
-- ------------------------------------------------------
-- Server version	11.5.2-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*M!100616 SET @OLD_NOTE_VERBOSITY=@@NOTE_VERBOSITY, NOTE_VERBOSITY=0 */;

--
-- Table structure for table `empresas`
--

DROP TABLE IF EXISTS `empresas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `empresas` (
  `cdg_banco` varchar(3) DEFAULT NULL,
  `num_agencia` varchar(6) DEFAULT NULL,
  `num_conta` varchar(13) DEFAULT NULL,
  `num_convenio` varchar(20) DEFAULT NULL,
  `cdg_documento` varchar(1) DEFAULT NULL,
  `num_doc` varchar(14) DEFAULT NULL,
  `nome_empresa` varchar(30) DEFAULT NULL,
  `cep` varchar(8) DEFAULT NULL,
  `logradouro` varchar(30) DEFAULT NULL,
  `endereco_num` varchar(5) DEFAULT NULL,
  `complemento` varchar(15) DEFAULT NULL,
  `estado` varchar(2) DEFAULT NULL,
  `cidade` varchar(20) DEFAULT NULL,
  `num_doc_empresa` varchar(20) DEFAULT NULL,
  `id` varchar(14) NOT NULL,
  `cdg_lancamento` varchar(50) DEFAULT NULL,
  `cdg_servico` varchar(50) DEFAULT NULL,
  `cdg_operacao` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `empresas`
--

LOCK TABLES `empresas` WRITE;
/*!40000 ALTER TABLE `empresas` DISABLE KEYS */;
INSERT INTO `empresas` VALUES
('001','313123','0000000000000','91919191919191ssshfh','1','09909090909090','CAVALINHO DE PAU','79116682','RUA EMANUEL HENRIQUE DE PAULA','181','FJASKFJASKLJFAA','MS','CAMPO GRANDE','01010101010101010101','09909090909090','0','0','0');
/*!40000 ALTER TABLE `empresas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favorecidos`
--

DROP TABLE IF EXISTS `favorecidos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `favorecidos` (
  `id` varchar(20) NOT NULL,
  `num_doc_favorecido` varchar(30) DEFAULT NULL,
  `nome_favorecido` varchar(30) DEFAULT NULL,
  `cdg_banco_favorecido` varchar(3) DEFAULT NULL,
  `num_conta_favorecido` varchar(13) DEFAULT NULL,
  `num_agencia_favorecido` varchar(6) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favorecidos`
--

LOCK TABLES `favorecidos` WRITE;
/*!40000 ALTER TABLE `favorecidos` DISABLE KEYS */;
INSERT INTO `favorecidos` VALUES
('06588672101','06588672101','GABRIEL ARECO TAVEIRA','001','3231313131313','000011');
/*!40000 ALTER TABLE `favorecidos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `email` varchar(100) NOT NULL,
  `senha` varchar(100) NOT NULL,
  UNIQUE KEY `nome` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES
('2121@gmail.com','vrt181'),
('31231231da@gmail.com','vrt181'),
('321313121@gmail.com','vrt181'),
('areco23@gmail.com','teste123'),
('cxcxc@gmail.com','vrt181'),
('dasdasd3221312@gmail.com','vrt181'),
('terstedsa@gmail.com','vrt181');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*M!100616 SET NOTE_VERBOSITY=@OLD_NOTE_VERBOSITY */;

-- Dump completed on 2024-09-21 11:57:10
