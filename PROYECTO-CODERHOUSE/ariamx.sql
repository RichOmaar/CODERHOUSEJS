-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Apr 11, 2021 at 01:43 AM
-- Server version: 5.7.32
-- PHP Version: 7.4.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

--
-- Database: `ariamx`
--

-- --------------------------------------------------------

--
-- Table structure for table `formularioCOntacto`
--

CREATE TABLE `formularioCOntacto` (
  `id_formularioContacto` int(11) NOT NULL,
  `nombre` varchar(255) DEFAULT NULL,
  `correo` varchar(250) DEFAULT NULL,
  `asunto` varchar(250) DEFAULT NULL,
  `mensaje` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `formularioCOntacto`
--

INSERT INTO `formularioCOntacto` (`id_formularioContacto`, `nombre`, `correo`, `asunto`, `mensaje`) VALUES
(1, 'Juan Omar Camacho', 'omar@gmail.com', 'Prueba', 'wasedfasfgvsadfds'),
(2, 'Juan Omar Camacho', 'omar@gmail.com', 'Prueba', 'wasedfasfgvsadfds'),
(3, 'Juan Omar Camacho', 'omar@gmail.com', 'Prueba', 'wasedfasfgvsadfds');

-- --------------------------------------------------------

--
-- Table structure for table `productos`
--

CREATE TABLE `productos` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(500) DEFAULT NULL,
  `urlImagen` varchar(1000) DEFAULT NULL,
  `descripcion` text,
  `precio` varchar(50) DEFAULT NULL,
  `destacados` tinyint(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `productos`
--

INSERT INTO `productos` (`id_producto`, `nombre`, `urlImagen`, `descripcion`, `precio`, `destacados`) VALUES
(1, 'Tea Totaler', 'vista/assets/images/soap-product.jpg', 'Para una piel limpia y sin impurezas', '200', 0),
(2, 'Jason And The Argan Oil', 'vista/assets/images/soap-product.jpg', 'Una melena sedosa y con aroma a rosas', '255', 1),
(3, 'Aromaco', 'vista/assets/images/soap-product.jpg', 'Refrescante y efectivo', '175', 0),
(4, 'Outback Mate', 'vista/assets/images/soap-product.jpg', 'El que quiere azul celeste, que Outback Mate pruebe', '170', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `formularioCOntacto`
--
ALTER TABLE `formularioCOntacto`
  ADD PRIMARY KEY (`id_formularioContacto`);

--
-- Indexes for table `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id_producto`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `formularioCOntacto`
--
ALTER TABLE `formularioCOntacto`
  MODIFY `id_formularioContacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `productos`
--
ALTER TABLE `productos`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
