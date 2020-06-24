-- phpMyAdmin SQL Dump
-- version 4.8.5
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 24, 2019 at 09:46 AM
-- Server version: 10.1.38-MariaDB
-- PHP Version: 7.3.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `banvemaybay`
--

-- --------------------------------------------------------

--
-- Table structure for table `chang`
--

CREATE TABLE `chang` (
  `ID_Chang` int(10) NOT NULL,
  `MaChang` varchar(10) NOT NULL,
  `DiemDi` varchar(255) NOT NULL,
  `SanBayDi` varchar(255) NOT NULL,
  `DiemDen` varchar(255) NOT NULL,
  `SanBayDen` varchar(255) NOT NULL,
  `Gia` int(50) NOT NULL COMMENT 'Đồng'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chang`
--

INSERT INTO `chang` (`ID_Chang`, `MaChang`, `DiemDi`, `SanBayDi`, `DiemDen`, `SanBayDen`, `Gia`) VALUES
(1, 'CB101', 'HA NOI', 'Nội Bài', 'DIEN BIEN PHU', 'Điện Biên', 250000),
(2, 'CB101-1', 'HA NOI', 'Nội Bài', 'TPHCM', 'Tân Sơn Nhất', 500000),
(3, 'CB101-2', 'HA NOI', 'Nội Bài', 'DA NANG', 'Đà Nẵng', 310000),
(4, 'CB102', 'HA NOI', 'Nội Bài', 'NHA TRANG', 'Nha Trang', 310000),
(5, 'CB102-1', 'HA NOI', 'Nội Bài', 'HAI PHONG', 'Cát Bi', 130000),
(6, 'CB103', 'HA NOI', 'Nội Bài', 'PHU QUOC', 'Phú Quốc', 510000),
(7, 'CB104', 'HA NOI', 'Nội Bài', 'CA MAU', 'Cà Mau', 520000),
(8, 'CB105', 'HA NOI', 'Nội Bài', 'DA LAT', 'Liên Hương', 410000),
(9, 'CB106', 'TPHCM', 'Tân Sơn Nhất', 'DIEN BIEN PHU', 'Điện Biên', 510000),
(10, 'CB107', 'TPHCM', 'Tân Sơn Nhất', 'HA NOI', 'Nội Bài', 500000),
(11, 'CB108', 'TPHCM', 'Tân Sơn Nhất', 'DA NANG', 'Đà Nẵng', 350000),
(12, 'CB109', 'TPHCM', 'Tân Sơn Nhất', 'NHA TRANG', 'Nha Trang', 220000),
(13, 'CB202', 'TPHCM', 'Tân Sơn Nhất', 'HAI PHONG', 'Cát Bi', 510000),
(14, 'CB203', 'TPHCM', 'Tân Sơn Nhất', 'PHU QUOC', 'Phú Quốc', 330000),
(15, 'CB204', 'TPHCM', 'Tân Sơn Nhất', 'CA MAU', 'Cà Mau', 220000),
(16, 'CB205', 'TPHCM', 'Tân Sơn Nhất', 'DA LAT', 'Liên Hương', 150000),
(17, 'CB206', 'DA NANG', 'Đà Nẵng', 'HA NOI', 'Nội Bài', 5600000),
(18, 'CB208', 'DA NANG', 'Đà Nẵng', 'TPHCM', 'Tân Sơn Nhất', 3400000),
(19, 'CB301', 'DA NANG', 'Đà Nẵng', 'NHA TRANG', 'Nha Trang', 1300000),
(20, 'CB301-1', 'DA NANG', 'Đà Nẵng', 'HAI PHONG', 'Cát Bi', 1300000),
(21, 'CB301-2', 'DA NANG', 'Đà Nẵng', 'PHU QUOC', 'Phú Quốc', 1300000),
(22, 'CB302', 'DA NANG', 'Đà Nẵng', 'CA MAU', 'Cà Mau', 12300000),
(23, 'CB302-1', 'DA NANG', 'Đà Nẵng', 'DA LAT', 'Liên Hương', 12300000),
(24, 'CB302-2', 'DA NANG', 'Đà Nẵng', 'DIEN BIEN PHU', 'Điện Biên', 12300000),
(25, 'CB302-3', 'NHA TRANG', 'Nha Trang', 'HA NOI', 'Nội Bài', 300000),
(26, 'CB304', 'NHA TRANG', 'Nha Trang', 'TPHCM', 'Tân Sơn Nhất', 200000),
(27, 'CB304-1', 'NHA TRANG', 'Nha Trang', 'DA NANG', 'Đà Nẵng', 200000),
(28, 'CB304-2', 'NHA TRANG', 'Nha Trang', 'NHA TRANG', 'Nha Trang', 4500000),
(29, 'CB306', 'NHA TRANG', 'Nha Trang', 'HAI PHONG', 'Cát Bi', 400000),
(30, 'CB308', 'NHA TRANG', 'Nha Trang', 'PHU QUOC', 'Phú Quốc', 300000),
(31, 'CB308-1', 'NHA TRANG', 'Nha Trang', 'CA MAU', 'Cà Mau', 400000),
(32, 'CB308-2', 'NHA TRANG', 'Nha Trang', 'DA LAT', 'Liên Hương', 200000),
(33, 'CB308-3', 'NHA TRANG', 'Nha Trang', 'DIEN BIEN PHU', 'Điện Biên', 500000);

-- --------------------------------------------------------

--
-- Table structure for table `chuyenbay`
--

CREATE TABLE `chuyenbay` (
  `ID_ChuyenBay` int(10) NOT NULL,
  `MaMayBay` varchar(10) NOT NULL,
  `MaChuyenBay` varchar(10) NOT NULL,
  `MaChang` varchar(10) NOT NULL,
  `ThoiGianDi` time NOT NULL,
  `ThoiGianDen` time NOT NULL,
  `NgayDi` date NOT NULL,
  `NgayDen` date NOT NULL,
  `SoGheConTrong` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chuyenbay`
--

INSERT INTO `chuyenbay` (`ID_ChuyenBay`, `MaMayBay`, `MaChuyenBay`, `MaChang`, `ThoiGianDi`, `ThoiGianDen`, `NgayDi`, `NgayDen`, `SoGheConTrong`) VALUES
(1, '747', 'VN156', 'CB301', '04:50:00', '11:50:00', '2019-11-25', '2019-11-30', 15),
(2, '314', 'VN160', 'CB301', '06:20:00', '03:30:00', '2019-11-25', '2019-11-30', 20),
(3, '319', 'VN170', 'CB302', '05:00:00', '06:00:00', '2019-11-25', '2019-11-30', 20),
(4, '320', 'VN190', 'CB302', '12:00:00', '11:30:00', '2019-11-25', '2019-11-30', 20),
(5, '320', 'VN210', 'CB302', '15:00:00', '13:40:00', '2019-11-25', '2019-11-30', 20),
(6, '330', 'VN225', 'CB304', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(7, '360', 'VN248', 'CB304', '07:30:00', '10:30:00', '2019-11-25', '2019-11-30', 20),
(8, '370', 'VN254', 'CB106', '11:15:00', '21:15:00', '2019-11-25', '2019-11-30', 10),
(9, '380', 'VN269', 'CB205', '16:00:00', '06:00:00', '2019-11-25', '2019-11-30', 15),
(10, '707', 'VN280', 'CB105', '06:00:00', '08:00:00', '2019-11-25', '2019-11-30', 10),
(11, '737', 'VN281', 'CB306', '07:00:00', '13:00:00', '2019-11-25', '2019-11-30', 20),
(12, '767', 'VN315', 'CB206', '15:00:00', '20:00:00', '2019-11-25', '2019-11-30', 5),
(13, '747', 'VN317', 'CB208', '14:10:00', '21:30:00', '2019-11-25', '2019-11-30', 15),
(14, '777', 'VN320', 'CB102', '08:50:00', '10:30:00', '2019-11-25', '2019-11-30', 10),
(15, '787', 'VN320-1', 'CB102', '06:00:00', '07:10:00', '2019-11-25', '2019-11-30', 20),
(16, '104', 'VN338', 'CB107', '21:15:00', '18:30:00', '2019-11-25', '2019-11-30', 20),
(17, '114', 'VN374', 'CB203', '19:30:00', '08:00:00', '2019-11-25', '2019-11-30', 5),
(18, '124', 'VN431', 'CB101', '05:55:00', '06:55:00', '2019-11-25', '2019-11-30', 10),
(19, '144', 'VN431-1', 'CB101', '06:25:00', '08:15:00', '2019-11-25', '2019-11-30', 20),
(20, '204', 'VN431-2', 'CB101', '13:15:00', '15:20:00', '2019-11-25', '2019-11-30', 20),
(21, '224', 'VN440', 'CB108', '23:05:00', '14:01:00', '2019-11-25', '2019-11-30', 20),
(22, '300', 'VN651', 'CB109', '23:10:00', '13:25:00', '2019-11-25', '2019-11-30', 15),
(23, '310', 'VN830', 'CB308', '08:00:00', '10:00:00', '2019-11-25', '2019-11-30', 5),
(24, '747', 'VN840', 'CB308', '12:00:00', '00:00:00', '2019-11-25', '2019-11-30', 15),
(25, '104', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(26, '114', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(27, '124', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(28, '144', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(29, '204', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(30, '224', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(31, '300', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(32, '310', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(33, '314', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(34, '319', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(35, '320', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(36, '330', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(37, '360', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(38, '370', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(39, '380', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(40, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(41, '707', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(42, '737', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(43, '767', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(44, '777', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(45, '787', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(46, '300', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(47, '310', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(48, '320', '', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(49, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(50, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(51, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(52, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(53, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(54, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(55, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(56, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(57, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(58, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(59, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(60, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(61, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20),
(62, '747', 'VN850', 'CB107', '05:30:00', '08:30:00', '2019-11-25', '2019-11-30', 20);

-- --------------------------------------------------------

--
-- Table structure for table `ghe`
--

CREATE TABLE `ghe` (
  `MaMayBay` varchar(5) NOT NULL,
  `MaHangVe` varchar(5) NOT NULL,
  `MaGhe` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `ghe`
--

INSERT INTO `ghe` (`MaMayBay`, `MaHangVe`, `MaGhe`) VALUES
('747', 'FC', 'MGFC01'),
('747', 'FC', 'MGFC02'),
('747', 'FC', 'MGFC03'),
('747', 'FC', 'MGFC04'),
('747', 'FC', 'MGFC05'),
('747', 'EC', 'MGEC01'),
('747', 'EC', 'MGEC02'),
('747', 'EC', 'MGEC03'),
('747', 'EC', 'MGEC04'),
('747', 'EC', 'MGEC05'),
('747', 'PC', 'MGPC01'),
('747', 'PC', 'MGPC02'),
('747', 'PC', 'MGPC03'),
('747', 'PC', 'MGPC04'),
('747', 'PC', 'MGPC05'),
('747', 'BC', 'MGBC01'),
('747', 'BC', 'MGBC02'),
('747', 'BC', 'MGBC03'),
('747', 'BC', 'MGBC04'),
('747', 'BC', 'MGBC05'),
('737', 'FC', 'MGFC01'),
('737', 'FC', 'MGFC02'),
('737', 'FC', 'MGFC03'),
('737', 'FC', 'MGFC04'),
('737', 'FC', 'MGFC05'),
('737', 'EC', 'MGEC01'),
('737', 'EC', 'MGEC02'),
('737', 'EC', 'MGEC03'),
('737', 'EC', 'MGEC04'),
('737', 'EC', 'MGEC05'),
('737', 'PC', 'MGPC01'),
('737', 'PC', 'MGPC02'),
('737', 'PC', 'MGPC03'),
('737', 'PC', 'MGPC04'),
('737', 'PC', 'MGPC05'),
('737', 'BC', 'MGBC01'),
('737', 'BC', 'MGBC02'),
('737', 'BC', 'MGBC03'),
('737', 'BC', 'MGBC04'),
('737', 'BC', 'MGBC05'),
('777', 'FC', 'MGFC01'),
('777', 'FC', 'MGFC02'),
('777', 'FC', 'MGFC03'),
('777', 'FC', 'MGFC04'),
('777', 'FC', 'MGFC05'),
('777', 'EC', 'MGEC01'),
('777', 'EC', 'MGEC02'),
('777', 'EC', 'MGEC03'),
('777', 'EC', 'MGEC04'),
('777', 'EC', 'MGEC05'),
('777', 'PC', 'MGPC01'),
('777', 'PC', 'MGPC02'),
('777', 'PC', 'MGPC03'),
('777', 'PC', 'MGPC04'),
('777', 'PC', 'MGPC05'),
('777', 'BC', 'MGBC01'),
('777', 'BC', 'MGBC02'),
('777', 'BC', 'MGBC03'),
('777', 'BC', 'MGBC04'),
('777', 'BC', 'MGBC05'),
('314', 'FC', 'MGFC01'),
('314', 'FC', 'MGFC02'),
('314', 'FC', 'MGFC03'),
('314', 'FC', 'MGFC04'),
('314', 'FC', 'MGFC05'),
('314', 'EC', 'MGEC01'),
('314', 'EC', 'MGEC02'),
('314', 'EC', 'MGEC03'),
('314', 'EC', 'MGEC04'),
('314', 'EC', 'MGEC05'),
('314', 'PC', 'MGPC01'),
('314', 'PC', 'MGPC02'),
('314', 'PC', 'MGPC03'),
('314', 'PC', 'MGPC04'),
('314', 'PC', 'MGPC05'),
('314', 'BC', 'MGBC01'),
('314', 'BC', 'MGBC02'),
('314', 'BC', 'MGBC03'),
('314', 'BC', 'MGBC04'),
('314', 'BC', 'MGBC05'),
('320', 'FC', 'MGFC01'),
('320', 'FC', 'MGFC02'),
('320', 'FC', 'MGFC03'),
('320', 'FC', 'MGFC04'),
('320', 'FC', 'MGFC05'),
('320', 'EC', 'MGEC01'),
('320', 'EC', 'MGEC02'),
('320', 'EC', 'MGEC03'),
('320', 'EC', 'MGEC04'),
('320', 'EC', 'MGEC05'),
('320', 'PC', 'MGPC01'),
('320', 'PC', 'MGPC02'),
('320', 'PC', 'MGPC03'),
('320', 'PC', 'MGPC04'),
('320', 'PC', 'MGPC05'),
('320', 'BC', 'MGBC01'),
('320', 'BC', 'MGBC02'),
('320', 'BC', 'MGBC03'),
('320', 'BC', 'MGBC04'),
('320', 'BC', 'MGBC05'),
('319', 'FC', 'MGFC01'),
('319', 'FC', 'MGFC02'),
('319', 'FC', 'MGFC03'),
('319', 'FC', 'MGFC04'),
('319', 'FC', 'MGFC05'),
('319', 'EC', 'MGEC01'),
('319', 'EC', 'MGEC02'),
('319', 'EC', 'MGEC03'),
('319', 'EC', 'MGEC04'),
('319', 'EC', 'MGEC05'),
('319', 'PC', 'MGPC01'),
('319', 'PC', 'MGPC02'),
('319', 'PC', 'MGPC03'),
('319', 'PC', 'MGPC04'),
('319', 'PC', 'MGPC05'),
('319', 'BC', 'MGBC01'),
('319', 'BC', 'MGBC02'),
('319', 'BC', 'MGBC03'),
('319', 'BC', 'MGBC04'),
('319', 'BC', 'MGBC05'),
('144', 'FC', 'MGFC01'),
('144', 'FC', 'MGFC02'),
('144', 'FC', 'MGFC03'),
('144', 'FC', 'MGFC04'),
('144', 'FC', 'MGFC05'),
('144', 'EC', 'MGEC01'),
('144', 'EC', 'MGEC02'),
('144', 'EC', 'MGEC03'),
('144', 'EC', 'MGEC04'),
('144', 'EC', 'MGEC05'),
('144', 'PC', 'MGPC01'),
('144', 'PC', 'MGPC02'),
('144', 'PC', 'MGPC03'),
('144', 'PC', 'MGPC04'),
('144', 'PC', 'MGPC05'),
('144', 'BC', 'MGBC01'),
('144', 'BC', 'MGBC02'),
('144', 'BC', 'MGBC03'),
('144', 'BC', 'MGBC04'),
('144', 'BC', 'MGBC05'),
('707', 'FC', 'MGFC01'),
('707', 'FC', 'MGFC02'),
('707', 'FC', 'MGFC03'),
('707', 'FC', 'MGFC04'),
('707', 'FC', 'MGFC05'),
('707', 'EC', 'MGEC01'),
('707', 'EC', 'MGEC02'),
('707', 'EC', 'MGEC03'),
('707', 'EC', 'MGEC04'),
('707', 'EC', 'MGEC05'),
('707', 'PC', 'MGPC01'),
('707', 'PC', 'MGPC02'),
('707', 'PC', 'MGPC03'),
('707', 'PC', 'MGPC04'),
('707', 'PC', 'MGPC05'),
('707', 'BC', 'MGBC01'),
('707', 'BC', 'MGBC02'),
('707', 'BC', 'MGBC03'),
('707', 'BC', 'MGBC04'),
('707', 'BC', 'MGBC05'),
('787', 'FC', 'MGFC01'),
('787', 'FC', 'MGFC02'),
('787', 'FC', 'MGFC03'),
('787', 'FC', 'MGFC04'),
('787', 'FC', 'MGFC05'),
('787', 'EC', 'MGEC01'),
('787', 'EC', 'MGEC02'),
('787', 'EC', 'MGEC03'),
('787', 'EC', 'MGEC04'),
('787', 'EC', 'MGEC05'),
('787', 'PC', 'MGPC01'),
('787', 'PC', 'MGPC02'),
('787', 'PC', 'MGPC03'),
('787', 'PC', 'MGPC04'),
('787', 'PC', 'MGPC05'),
('787', 'BC', 'MGBC01'),
('787', 'BC', 'MGBC02'),
('787', 'BC', 'MGBC03'),
('787', 'BC', 'MGBC04'),
('787', 'BC', 'MGBC05'),
('300', 'FC', 'MGFC01'),
('300', 'FC', 'MGFC02'),
('300', 'FC', 'MGFC03'),
('300', 'FC', 'MGFC04'),
('300', 'FC', 'MGFC05'),
('300', 'EC', 'MGEC01'),
('300', 'EC', 'MGEC02'),
('300', 'EC', 'MGEC03'),
('300', 'EC', 'MGEC04'),
('300', 'EC', 'MGEC05'),
('300', 'PC', 'MGPC01'),
('300', 'PC', 'MGPC02'),
('300', 'PC', 'MGPC03'),
('300', 'PC', 'MGPC04'),
('300', 'PC', 'MGPC05'),
('300', 'BC', 'MGBC01'),
('300', 'BC', 'MGBC02'),
('300', 'BC', 'MGBC03'),
('300', 'BC', 'MGBC04'),
('300', 'BC', 'MGBC05'),
('310', 'FC', 'MGFC01'),
('310', 'FC', 'MGFC02'),
('310', 'FC', 'MGFC03'),
('310', 'FC', 'MGFC04'),
('310', 'FC', 'MGFC05'),
('310', 'EC', 'MGEC01'),
('310', 'EC', 'MGEC02'),
('310', 'EC', 'MGEC03'),
('310', 'EC', 'MGEC04'),
('310', 'EC', 'MGEC05'),
('310', 'PC', 'MGPC01'),
('310', 'PC', 'MGPC02'),
('310', 'PC', 'MGPC03'),
('310', 'PC', 'MGPC04'),
('310', 'PC', 'MGPC05'),
('310', 'BC', 'MGBC01'),
('310', 'BC', 'MGBC02'),
('310', 'BC', 'MGBC03'),
('310', 'BC', 'MGBC04'),
('310', 'BC', 'MGBC05'),
('224', 'FC', 'MGFC01'),
('224', 'FC', 'MGFC02'),
('224', 'FC', 'MGFC03'),
('224', 'FC', 'MGFC04'),
('224', 'FC', 'MGFC05'),
('224', 'EC', 'MGEC01'),
('224', 'EC', 'MGEC02'),
('224', 'EC', 'MGEC03'),
('224', 'EC', 'MGEC04'),
('224', 'EC', 'MGEC05'),
('224', 'PC', 'MGPC01'),
('224', 'PC', 'MGPC02'),
('224', 'PC', 'MGPC03'),
('224', 'PC', 'MGPC04'),
('224', 'PC', 'MGPC05'),
('224', 'BC', 'MGBC01'),
('224', 'BC', 'MGBC02'),
('224', 'BC', 'MGBC03'),
('224', 'BC', 'MGBC04'),
('224', 'BC', 'MGBC05'),
('360', 'FC', 'MGFC01'),
('360', 'FC', 'MGFC02'),
('360', 'FC', 'MGFC03'),
('360', 'FC', 'MGFC04'),
('360', 'FC', 'MGFC05'),
('360', 'EC', 'MGEC01'),
('360', 'EC', 'MGEC02'),
('360', 'EC', 'MGEC03'),
('360', 'EC', 'MGEC04'),
('360', 'EC', 'MGEC05'),
('360', 'PC', 'MGPC01'),
('360', 'PC', 'MGPC02'),
('360', 'PC', 'MGPC03'),
('360', 'PC', 'MGPC04'),
('360', 'PC', 'MGPC05'),
('360', 'BC', 'MGBC01'),
('360', 'BC', 'MGBC02'),
('360', 'BC', 'MGBC03'),
('360', 'BC', 'MGBC04'),
('360', 'BC', 'MGBC05'),
('370', 'FC', 'MGFC01'),
('370', 'FC', 'MGFC02'),
('370', 'FC', 'MGFC03'),
('370', 'FC', 'MGFC04'),
('370', 'FC', 'MGFC05'),
('370', 'EC', 'MGEC01'),
('370', 'EC', 'MGEC02'),
('370', 'EC', 'MGEC03'),
('370', 'EC', 'MGEC04'),
('370', 'EC', 'MGEC05'),
('370', 'PC', 'MGPC01'),
('370', 'PC', 'MGPC02'),
('370', 'PC', 'MGPC03'),
('370', 'PC', 'MGPC04'),
('370', 'PC', 'MGPC05'),
('370', 'BC', 'MGBC01'),
('370', 'BC', 'MGBC02'),
('370', 'BC', 'MGBC03'),
('370', 'BC', 'MGBC04'),
('370', 'BC', 'MGBC05'),
('380', 'FC', 'MGFC01'),
('380', 'FC', 'MGFC02'),
('380', 'FC', 'MGFC03'),
('380', 'FC', 'MGFC04'),
('380', 'FC', 'MGFC05'),
('380', 'EC', 'MGEC01'),
('380', 'EC', 'MGEC02'),
('380', 'EC', 'MGEC03'),
('380', 'EC', 'MGEC04'),
('380', 'EC', 'MGEC05'),
('380', 'PC', 'MGPC01'),
('380', 'PC', 'MGPC02'),
('380', 'PC', 'MGPC03'),
('380', 'PC', 'MGPC04'),
('380', 'PC', 'MGPC05'),
('380', 'BC', 'MGBC01'),
('380', 'BC', 'MGBC02'),
('380', 'BC', 'MGBC03'),
('380', 'BC', 'MGBC04'),
('380', 'BC', 'MGBC05'),
('330', 'FC', 'MGFC01'),
('330', 'FC', 'MGFC02'),
('330', 'FC', 'MGFC03'),
('330', 'FC', 'MGFC04'),
('330', 'FC', 'MGFC05'),
('330', 'EC', 'MGEC01'),
('330', 'EC', 'MGEC02'),
('330', 'EC', 'MGEC03'),
('330', 'EC', 'MGEC04'),
('330', 'EC', 'MGEC05'),
('330', 'PC', 'MGPC01'),
('330', 'PC', 'MGPC02'),
('330', 'PC', 'MGPC03'),
('330', 'PC', 'MGPC04'),
('330', 'PC', 'MGPC05'),
('330', 'BC', 'MGBC01'),
('330', 'BC', 'MGBC02'),
('330', 'BC', 'MGBC03'),
('330', 'BC', 'MGBC04'),
('330', 'BC', 'MGBC05'),
('114', 'FC', 'MGFC01'),
('114', 'FC', 'MGFC02'),
('114', 'FC', 'MGFC03'),
('114', 'FC', 'MGFC04'),
('114', 'FC', 'MGFC05'),
('114', 'EC', 'MGEC01'),
('114', 'EC', 'MGEC02'),
('114', 'EC', 'MGEC03'),
('114', 'EC', 'MGEC04'),
('114', 'EC', 'MGEC05'),
('114', 'PC', 'MGPC01'),
('114', 'PC', 'MGPC02'),
('114', 'PC', 'MGPC03'),
('114', 'PC', 'MGPC04'),
('114', 'PC', 'MGPC05'),
('114', 'BC', 'MGBC01'),
('114', 'BC', 'MGBC02'),
('114', 'BC', 'MGBC03'),
('114', 'BC', 'MGBC04'),
('114', 'BC', 'MGBC05'),
('204', 'FC', 'MGFC01'),
('204', 'FC', 'MGFC02'),
('204', 'FC', 'MGFC03'),
('204', 'FC', 'MGFC04'),
('204', 'FC', 'MGFC05'),
('204', 'EC', 'MGEC01'),
('204', 'EC', 'MGEC02'),
('204', 'EC', 'MGEC03'),
('204', 'EC', 'MGEC04'),
('204', 'EC', 'MGEC05'),
('204', 'PC', 'MGPC01'),
('204', 'PC', 'MGPC02'),
('204', 'PC', 'MGPC03'),
('204', 'PC', 'MGPC04'),
('204', 'PC', 'MGPC05'),
('204', 'BC', 'MGBC01'),
('204', 'BC', 'MGBC02'),
('204', 'BC', 'MGBC03'),
('204', 'BC', 'MGBC04'),
('204', 'BC', 'MGBC05'),
('767', 'FC', 'MGFC01'),
('767', 'FC', 'MGFC02'),
('767', 'FC', 'MGFC03'),
('767', 'FC', 'MGFC04'),
('767', 'FC', 'MGFC05'),
('767', 'EC', 'MGEC01'),
('767', 'EC', 'MGEC02'),
('767', 'EC', 'MGEC03'),
('767', 'EC', 'MGEC04'),
('767', 'EC', 'MGEC05'),
('767', 'PC', 'MGPC01'),
('767', 'PC', 'MGPC02'),
('767', 'PC', 'MGPC03'),
('767', 'PC', 'MGPC04'),
('767', 'PC', 'MGPC05'),
('767', 'BC', 'MGBC01'),
('767', 'BC', 'MGBC02'),
('767', 'BC', 'MGBC03'),
('767', 'BC', 'MGBC04'),
('767', 'BC', 'MGBC05'),
('124', 'FC', 'MGFC01'),
('124', 'FC', 'MGFC02'),
('124', 'FC', 'MGFC03'),
('124', 'FC', 'MGFC04'),
('124', 'FC', 'MGFC05'),
('124', 'EC', 'MGEC01'),
('124', 'EC', 'MGEC02'),
('124', 'EC', 'MGEC03'),
('124', 'EC', 'MGEC04'),
('124', 'EC', 'MGEC05'),
('124', 'PC', 'MGPC01'),
('124', 'PC', 'MGPC02'),
('124', 'PC', 'MGPC03'),
('124', 'PC', 'MGPC04'),
('124', 'PC', 'MGPC05'),
('124', 'BC', 'MGBC01'),
('124', 'BC', 'MGBC02'),
('124', 'BC', 'MGBC03'),
('124', 'BC', 'MGBC04'),
('124', 'BC', 'MGBC05'),
('104', 'FC', 'MGFC01'),
('104', 'FC', 'MGFC02'),
('104', 'FC', 'MGFC03'),
('104', 'FC', 'MGFC04'),
('104', 'FC', 'MGFC05'),
('104', 'EC', 'MGEC01'),
('104', 'EC', 'MGEC02'),
('104', 'EC', 'MGEC03'),
('104', 'EC', 'MGEC04'),
('104', 'EC', 'MGEC05'),
('104', 'PC', 'MGPC01'),
('104', 'PC', 'MGPC02'),
('104', 'PC', 'MGPC03'),
('104', 'PC', 'MGPC04'),
('104', 'PC', 'MGPC05'),
('104', 'BC', 'MGBC01'),
('104', 'BC', 'MGBC02'),
('104', 'BC', 'MGBC03'),
('104', 'BC', 'MGBC04'),
('104', 'BC', 'MGBC05');

-- --------------------------------------------------------

--
-- Table structure for table `hangve`
--

CREATE TABLE `hangve` (
  `MaHangVe` varchar(10) NOT NULL,
  `TenHangVe` varchar(30) NOT NULL,
  `GiaHangVe` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `hangve`
--

INSERT INTO `hangve` (`MaHangVe`, `TenHangVe`, `GiaHangVe`) VALUES
('1', 'Phổ thông', 300000),
('2', 'Thương gia', 2000000);

-- --------------------------------------------------------

--
-- Table structure for table `hoadon`
--

CREATE TABLE `hoadon` (
  `ID_HoaDon` int(10) NOT NULL,
  `MaHD` varchar(10) NOT NULL,
  `MaKH` varchar(10) NOT NULL,
  `NgayDatVe` date NOT NULL,
  `SoLuong` int(11) DEFAULT NULL,
  `ThanhTien` int(11) DEFAULT NULL,
  `PT_Payment` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `khachhang`
--

CREATE TABLE `khachhang` (
  `ID_KH` int(10) NOT NULL,
  `MaKH` varchar(10) NOT NULL,
  `TenKH` varchar(50) NOT NULL,
  `NgaySinh` varchar(20) NOT NULL,
  `CMND` varchar(15) NOT NULL,
  `SDT` varchar(11) NOT NULL,
  `GioiTinh` varchar(3) NOT NULL,
  `TenDangNhap` varchar(255) NOT NULL,
  `MatKhau` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `khachhang`
--

INSERT INTO `khachhang` (`ID_KH`, `MaKH`, `TenKH`, `NgaySinh`, `CMND`, `SDT`, `GioiTinh`, `TenDangNhap`, `MatKhau`) VALUES
(1, 'KHD_01', 'Hoàng Minh', '1967-03-15', '9873657297', '0165456789', 'Nam', 'HIEU', '123456'),
(2, 'KHD_02', 'Hoàng Triết', '1993-02-14', '2847652019', '0909789123', 'Nam', '', ''),
(3, 'KHD_03', 'Hong Thuan', '1995-05-10', '4357811326', '0123356890', 'Nữ', '', ''),
(4, 'KHD_04', 'Nguyễn Nhân', '1994-06-12', '8442564625', '0987775322', 'Nam', '', ''),
(5, 'KHD_05', 'Cao Anh', '1984-12-10', '7625784233', '0122375758', 'Nữ', '', ''),
(6, 'KHD_06', 'Lê Trâm', '1978-08-09', '7258234234', '0123124344', 'Nữ', '', ''),
(7, 'KHD_07', 'Nguyễn Trang', '1984-09-13', '5877342563', '0984357345', 'Nữ', '', ''),
(8, 'KHD_08', 'Nguyễn Giang', '2000-10-23', '5667485343', '0934327223', 'Nữ', '', ''),
(9, 'KHD_09', 'Đình Vũ', '1997-11-12', '6247593444', '0128374634', 'Nam', '', ''),
(10, 'KHD_10', 'Cao Thái', '1988-11-14', '7689928475', '0434253443', 'Nam', '', ''),
(11, 'KHD_11', 'Trần Minh', '1992-07-25', '9873657297', '0165456789', 'Nam', '', ''),
(12, 'KHD_12', 'Võ Hân', '1986-07-08', '7477299903', '0248390122', 'Nữ', '', ''),
(13, 'KHD_13', 'Trương Khoa', '1991-12-13', '5335345324', '0988343472', 'Nam', '', ''),
(14, 'KHD_14', 'Lê Hạnh', '1988-04-11', '6576445635', '0988876755', 'Nữ', '', ''),
(15, 'KHD_15', 'Bùi Hiển', '1957-10-25', '5546097890', '0909678675', 'Nam', '', ''),
(16, 'KHD_16', 'Nguyễn Trân', '1998-03-04', '5674563533', '0867856967', 'Nữ', '', ''),
(17, 'KHD_17', 'Lý Ngọc ', '1984-09-14', '7897867855', '0987868575', 'Nữ', '', ''),
(18, 'KHD_18', 'Trương Tài', '1998-08-30', '3453423422', '0988546422', 'Nam', '', ''),
(19, 'KHD_19', 'Vĩnh Lộc', '1972-04-12', '4102939001', '0989786756', 'Nam', '', ''),
(20, 'KHD_20', 'Nguyễn Anh', '1986-06-21', '3453456746', '0986857543', 'Nữ', '', ''),
(21, 'KHD_21', 'Minh Thanh', '1968-12-25', '1928390123', '0989786756', 'Nữ', '', ''),
(22, 'KHD_22', 'Bảo Tuấn', '1993-05-19', '9102903909', '0989786756', 'Nam', '', ''),
(23, 'KHD_23', 'Thái Vũ', '1993-10-21', '6474564535', '0989786756', 'Nam', '', ''),
(24, 'KHD_24', 'Mạnh Huấn', '1999-03-05', '3784783871', '0989786756', 'Nam', '', ''),
(25, 'KHD_25', 'Quốc Tùng', '1999-06-13', '4819820094', '0989786756', 'Nam', '', ''),
(26, 'KHM_01', 'Lê Lai', '1965-09-20', '1234758392', '0909123456', 'Nam', '', ''),
(27, 'KHM_02', 'Hoàng Hiệp', '1970-06-10', '3758294727', '0909356118', 'Nam', '', ''),
(28, 'KHM_03', 'Quang Hải', '1980-01-23', '4738491838', '0122892010', 'Nam', '', ''),
(29, 'KHM_04', 'Tiến Dũng', '1989-12-27', '4792319094', '0165731289', 'Nam', '', ''),
(30, 'KHM_05', 'Vũ Huy', '1992-10-29', '5654649344', '0111234555', 'Nam', '', ''),
(31, 'KHM_06', 'Đỗ Phước', '1975-10-16', '4862554507', '0978888233', 'Nam', '', ''),
(32, 'KHM_07', 'Nguyễn Đức', '1988-01-21', '4642594567', '0123333456', 'Nam', '', ''),
(33, 'KHM_08', 'Hồ Nhung', '1996-10-04', '6672554604', '0995644332', 'Nữ', '', ''),
(34, 'KHM_09', 'Doãn Minh', '1986-07-11', '5859606400', '0112454323', 'Nam', '', ''),
(35, 'KHM_10', 'Cao Đạt', '1960-05-09', '6458476063', '0244565333', 'Nam', '', ''),
(36, 'KHM_11', 'Nguyễn Khánh', '1998-08-08', '5847592604', '0998566472', 'Nam', '', ''),
(37, 'KHM_12', 'Nguyễn Bình', '1959-06-07', '6455760993', '0355674832', 'Nam', '', ''),
(38, 'KHM_13', 'Nguyễn Quỳnh', '1987-11-10', '5688939282', '0933852813', 'Nữ', '', ''),
(39, 'KHM_14', 'Nguyễn Hữu', '1993-10-29', '6453452324', '0754563532', 'Nam', '', ''),
(40, 'KHM_15', 'Lê Quỳnh', '1993-04-12', '8756756708', '0122323253', 'Nữ', '', ''),
(41, 'KHM_16', 'Quế Hải', '1976-02-21', '6574563566', '0897815941', 'Nam', '', ''),
(42, 'KHM_17', 'Lương Trường', '1993-10-20', '4674563535', '0954843454', 'Nam', '', ''),
(43, 'KHM_18', 'Nguyễn Đăng', '1984-05-17', '5464564564', '0909978979', 'Nam', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `maybay`
--

CREATE TABLE `maybay` (
  `MaMayBay` varchar(10) NOT NULL,
  `Hang` varchar(100) NOT NULL,
  `Loai` varchar(20) NOT NULL,
  `SoLuongGhe` bigint(100) NOT NULL,
  `GiaHang` int(10) NOT NULL,
  `HinhAnh` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `maybay`
--

INSERT INTO `maybay` (`MaMayBay`, `Hang`, `Loai`, `SoLuongGhe`, `GiaHang`, `HinhAnh`) VALUES
('104', 'VietJet Air', 'Tupolev 104', 20, 100000, './public/img/logo%20fight/vietjet.png'),
('114', 'VietJet Air', 'Tupolev 114', 20, 120000, './public/img/logo%20fight/vietjet.png'),
('124', 'VietJet Air', 'Tupolev 124', 20, 140000, './public/img/logo%20fight/vietjet.png'),
('144', 'VietNam Airlines', 'Tupolev 144', 20, 400000, './public/img/logo%20fight/vietnamari.png'),
('204', 'VietJet Air', 'Tupolev 204', 20, 180000, './public/img/logo%20fight/vietjet.png'),
('224', 'Jetstar Airlines', 'Tupolev 224', 20, 200000, './public/img/logo%20fight/jet.png'),
('300', 'Jetstar Airlines', 'Airbus A300', 20, 220000, './public/img/logo%20fight/jet.png'),
('310', 'Jetstar Airlines', 'Airbus A310', 20, 240000, './public/img/logo%20fight/jet.png'),
('314', 'VietNam Airlines', 'Tupolev 314', 20, 460000, './public/img/logo%20fight/vietnamari.png'),
('319', 'VietNam Airlines', 'Airbus A319', 20, 480000, './public/img/logo%20fight/vietnamari.png'),
('320', 'VietNam Airlines', 'Airbus A320', 20, 600000, './public/img/logo%20fight/vietnamari.png'),
('330', 'VietJet Air', 'Airbus A330', 20, 320000, './public/img/logo%20fight/vietjet.png'),
('360', 'Jetstar Airlines', 'Airbus A360', 20, 340000, './public/img/logo%20fight/jet.png'),
('370', 'Jetstar Airlines', 'Airbus A370', 20, 360000, './public/img/logo%20fight/jet.png'),
('380', 'VietJet Air', 'Airbus A380', 20, 370000, './public/img/logo%20fight/vietjet.png'),
('707', 'Jetstar Airlines', 'Boeing 707', 20, 380000, './public/img/logo%20fight/jet.png'),
('737', 'VietNam Airlines', 'Boeing 737', 20, 590000, './public/img/logo%20fight/vietnamari.png'),
('747', 'VietNam Airlines', 'Boeing 747', 20, 891000, './public/img/logo%20fight/vietnamari.png'),
('767', 'VietJet Air', 'Boeing 767', 20, 0, './public/img/logo%20fight/vietjet.png'),
('777', 'VietNam Airlines', 'Boeing 777', 20, 898000, './public/img/logo%20fight/vietnamari.png'),
('787', 'Jetstar Airlines', 'Boeing 787', 20, 400000, './public/img/logo%20fight/jet.png');

-- --------------------------------------------------------

--
-- Table structure for table `nhanvien`
--

CREATE TABLE `nhanvien` (
  `MaNV` varchar(10) NOT NULL,
  `TenNV` varchar(50) NOT NULL,
  `TenTK` varchar(20) NOT NULL,
  `MatKhau` varchar(100) NOT NULL,
  `Quyen` int(10) NOT NULL,
  `Chucvu` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `nhanvien`
--

INSERT INTO `nhanvien` (`MaNV`, `TenNV`, `TenTK`, `MatKhau`, `Quyen`, `Chucvu`) VALUES
('NV_01', 'Quốc Tùng', 'quoctung', '123456', 1, 'Admin'),
('NV_02', 'Minh Triết', 'minhtriet', '123456', 2, 'Manager'),
('NV_03', 'Việt Hoàng', 'viethoang', '123456', 2, 'Manager'),
('NV_04', 'root', 'root', 'root', 1, 'Admin'),
('NV_05', 'admin', 'admin', 'admin', 2, 'Manager');

-- --------------------------------------------------------

--
-- Table structure for table `sanbay`
--

CREATE TABLE `sanbay` (
  `MaSanBay` varchar(5) NOT NULL,
  `TenSanBay` varchar(20) NOT NULL,
  `ThanhPho` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `sanbay`
--

INSERT INTO `sanbay` (`MaSanBay`, `TenSanBay`, `ThanhPho`) VALUES
('SB01', 'TÂN SƠN NHẤT', 'TPHCM'),
('SB02', 'NỘI BÀI', 'HÀ NỘI'),
('SB05', 'LIÊN KHƯƠNG', 'ĐÀ LẠT'),
('SB08', 'ĐIỆN BIÊN PHỦ', 'ĐIỆN BIÊN '),
('SB09', 'CÁT BI', 'HẢI PHÒNG'),
('SB10', 'ĐÀ NẴNG', 'ĐÀ NẴNG'),
('SB18', 'HANEDA', 'TOKYO'),
('SB20', 'ĐÔN MƯỜNG', 'BANGKOK'),
('SB25', 'JOHN F.KENNEDY', 'NEWYORK'),
('SB28', 'INCHEON', 'SEOUL'),
('SB30', 'PHỔ ĐÔNG', 'THƯỢNG HẢI'),
('SB32', 'PHÚ QUỐC', 'PHÚ QUỐC'),
('SB35', 'HỒNG KÔNG', 'HỒNG KÔNG'),
('SB36', 'CHANGI', 'SINGAPORE'),
('SB38', 'PHNOM PENH', 'PHNOM PENH'),
('SB40', 'CAM RANH', 'NHA TRANG'),
('SB45', 'SOEKARNO HATTA', 'JAKARTA'),
('SB47', 'WATTAY', 'VIENTIANE(LÀO)'),
('SB50', 'SYDNEY', 'SYDNEY'),
('SB52', 'YANGON', 'YANGON(MYANMAR)'),
('SB56', 'VINH', 'VINH');

-- --------------------------------------------------------

--
-- Table structure for table `vemaybay`
--

CREATE TABLE `vemaybay` (
  `ID_Ve` int(10) NOT NULL,
  `MaVe` varchar(10) NOT NULL,
  `MaGhe` varchar(10) NOT NULL,
  `MaKH` varchar(10) NOT NULL,
  `MaCB` varchar(10) NOT NULL,
  `TenHangVe` varchar(20) NOT NULL,
  `GiaVe` int(20) NOT NULL,
  `Hang` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chang`
--
ALTER TABLE `chang`
  ADD PRIMARY KEY (`ID_Chang`);

--
-- Indexes for table `chuyenbay`
--
ALTER TABLE `chuyenbay`
  ADD PRIMARY KEY (`ID_ChuyenBay`);

--
-- Indexes for table `hangve`
--
ALTER TABLE `hangve`
  ADD PRIMARY KEY (`MaHangVe`);

--
-- Indexes for table `hoadon`
--
ALTER TABLE `hoadon`
  ADD PRIMARY KEY (`ID_HoaDon`);

--
-- Indexes for table `khachhang`
--
ALTER TABLE `khachhang`
  ADD PRIMARY KEY (`ID_KH`);

--
-- Indexes for table `maybay`
--
ALTER TABLE `maybay`
  ADD PRIMARY KEY (`MaMayBay`);

--
-- Indexes for table `nhanvien`
--
ALTER TABLE `nhanvien`
  ADD PRIMARY KEY (`MaNV`);

--
-- Indexes for table `sanbay`
--
ALTER TABLE `sanbay`
  ADD PRIMARY KEY (`MaSanBay`);

--
-- Indexes for table `vemaybay`
--
ALTER TABLE `vemaybay`
  ADD PRIMARY KEY (`ID_Ve`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chang`
--
ALTER TABLE `chang`
  MODIFY `ID_Chang` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `chuyenbay`
--
ALTER TABLE `chuyenbay`
  MODIFY `ID_ChuyenBay` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=63;

--
-- AUTO_INCREMENT for table `hoadon`
--
ALTER TABLE `hoadon`
  MODIFY `ID_HoaDon` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `khachhang`
--
ALTER TABLE `khachhang`
  MODIFY `ID_KH` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `vemaybay`
--
ALTER TABLE `vemaybay`
  MODIFY `ID_Ve` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
