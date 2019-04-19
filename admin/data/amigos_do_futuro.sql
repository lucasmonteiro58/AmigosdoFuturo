-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 19-Abr-2019 às 21:59
-- Versão do servidor: 10.1.28-MariaDB
-- PHP Version: 7.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `amigos_do_futuro`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `badges`
--

CREATE TABLE `badges` (
  `id` int(11) NOT NULL,
  `name` varchar(111) COLLATE utf8_bin NOT NULL,
  `description` varchar(111) COLLATE utf8_bin NOT NULL,
  `img` varchar(111) COLLATE utf8_bin NOT NULL,
  `abreviation` varchar(3) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `badges`
--

INSERT INTO `badges` (`id`, `name`, `description`, `img`, `abreviation`) VALUES
(1, 'Amigo da Saúde', 'Adora cuidar de outras pessoas, tem muita coragem para salvar vidas e é muito amável.', 'img/quiz/sau-badge-2x.png', 'sau'),
(2, 'Amigo do Lazer', 'É muito divertido e adora conhecer lugares novos.', 'img/quiz/laz-badge-2x.png', 'laz'),
(3, 'Amigo da Economia', 'Ama números e sabe bem como vender algo para juntar dinheiro.', 'img/quiz/eco-badge-2x.png', 'eco'),
(4, 'Amigo da Sustentabilidade', 'Respeita a natureza e está sempre ajudando outras pessoas.', 'img/quiz/mei-badge-2x.png', 'mei'),
(5, 'Amigo do Governo', 'Gosta muito de falar com as pessoas. É responsável e organizado.', 'img/quiz/gov-badge-2x.png', 'gov'),
(6, 'Amigo da Educação', 'Está sempre lendo livros, revistas e quadrinhos. Também adora ensinar os amigos.', 'img/quiz/edu-badge-2x.png', 'edu'),
(7, 'Amigo da Inovação', 'Criatividade é o seu ponto forte. Observa tudo à sua volta e não desiste fácil das coisas.', 'img/quiz/ino-badge-2x.png', 'ino');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cities`
--

CREATE TABLE `cities` (
  `id` int(11) NOT NULL,
  `name` varchar(111) COLLATE utf8_bin NOT NULL,
  `region` varchar(111) COLLATE utf8_bin NOT NULL,
  `region_abrev` varchar(111) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `cities`
--

INSERT INTO `cities` (`id`, `name`, `region`, `region_abrev`) VALUES
(1, 'Acarapé', 'Maçico de Baturité', 'macico_de_baturite'),
(2, 'Aracoiaba', 'Maçico de Baturité', 'macico_de_baturite'),
(3, 'Aratuba', 'Maçico de Baturité', 'macico_de_baturite'),
(4, 'Barreira', 'Maçico de Baturité', 'macico_de_baturite'),
(5, 'Baturité', 'Maçico de Baturité', 'macico_de_baturite'),
(6, 'Capistrano', 'Maçico de Baturité', 'macico_de_baturite'),
(7, 'Guaramiranga', 'Maçico de Baturité', 'macico_de_baturite'),
(8, 'Itapiúna', 'Maçico de Baturité', 'macico_de_baturite'),
(9, 'Mulungu', 'Maçico de Baturité', 'macico_de_baturite'),
(10, 'Ocara', 'Maçico de Baturité', 'macico_de_baturite'),
(11, 'Pacoti', 'Maçico de Baturité', 'macico_de_baturite'),
(12, 'Palmácia', 'Maçico de Baturité', 'macico_de_baturite'),
(13, 'Redenção', 'Maçico de Baturité', 'macico_de_baturite'),
(14, 'Amontada', 'Litoral Oeste', 'litoral_oeste'),
(15, 'Apuiarés', 'Litoral Oeste', 'litoral_oeste'),
(16, 'General Sampaio', 'Litoral Oeste', 'litoral_oeste'),
(17, 'Irauçuba', 'Litoral Oeste', 'litoral_oeste'),
(18, 'Itapajé', 'Litoral Oeste', 'litoral_oeste'),
(19, 'Itapipoca', 'Litoral Oeste', 'litoral_oeste'),
(20, 'Miraíma', 'Litoral Oeste', 'litoral_oeste'),
(21, 'Pentecoste', 'Litoral Oeste', 'litoral_oeste'),
(22, 'Tejuçuoca', 'Litoral Oeste', 'litoral_oeste'),
(23, 'Tururu', 'Litoral Oeste', 'litoral_oeste'),
(24, 'Umirim', 'Litoral Oeste', 'litoral_oeste'),
(25, 'Uruburetama', 'Litoral Oeste', 'litoral_oeste'),
(26, 'Abaiara', 'Cariri', 'cariri'),
(27, 'Altaneira', 'Cariri', 'cariri'),
(28, 'Antonina do Norte', 'Cariri', 'cariri'),
(29, 'Araripe', 'Cariri', 'cariri'),
(30, 'Assaré', 'Cariri', 'cariri'),
(31, 'Aurora', 'Cariri', 'cariri'),
(32, 'Barbalha', 'Cariri', 'cariri'),
(33, 'Barro', 'Cariri', 'cariri'),
(34, 'Brejo Santo', 'Cariri', 'cariri'),
(35, 'Campos Sales', 'Cariri', 'cariri'),
(36, 'Caririaçu', 'Cariri', 'cariri'),
(37, 'Crato', 'Cariri', 'cariri'),
(38, 'Farias Brito', 'Cariri', 'cariri'),
(39, 'Granjeiro', 'Cariri', 'cariri'),
(40, 'Jardim', 'Cariri', 'cariri'),
(41, 'Jati', 'Cariri', 'cariri'),
(42, 'Juazeiro do Norte', 'Cariri', 'cariri'),
(43, 'Lavras da Mangabeira', 'Cariri', 'cariri'),
(44, 'Mauriti', 'Cariri', 'cariri'),
(45, 'Milagres', 'Cariri', 'cariri'),
(46, 'Missão Velha', 'Cariri', 'cariri'),
(47, 'Nova Olinda', 'Cariri', 'cariri'),
(48, 'Penaforte', 'Cariri', 'cariri'),
(49, 'Porteiras', 'Cariri', 'cariri'),
(50, 'Potengi', 'Cariri', 'cariri'),
(51, 'Salitre', 'Cariri', 'cariri'),
(52, 'Santana do Cariri', 'Cariri', 'cariri'),
(53, 'Tarrafas', 'Cariri', 'cariri'),
(54, 'Várzea Alegre', 'Cariri', 'cariri'),
(55, 'Acopiara', 'Centro Sul', 'centro_sul'),
(56, 'Baixio', 'Centro Sul', 'centro_sul'),
(57, 'Cariús', 'Centro Sul', 'centro_sul'),
(58, 'Catarina', 'Centro Sul', 'centro_sul'),
(59, 'Cedro', 'Centro Sul', 'centro_sul'),
(60, 'Icó', 'Centro Sul', 'centro_sul'),
(61, 'Iguatu', 'Centro Sul', 'centro_sul'),
(62, 'Ipaumirim', 'Centro Sul', 'centro_sul'),
(63, 'Jucás', 'Centro Sul', 'centro_sul'),
(64, 'Orós', 'Centro Sul', 'centro_sul'),
(65, 'Quixelô', 'Centro Sul', 'centro_sul'),
(66, 'Saboeiro', 'Centro Sul', 'centro_sul'),
(67, 'Umari', 'Centro Sul', 'centro_sul'),
(68, 'Banabuiú', 'Sertão Central', 'sertao_central'),
(69, 'Choró', 'Sertão Central', 'sertao_central'),
(70, 'Deputado Irapuan Pinheiro', 'Sertão Central', 'sertao_central'),
(71, 'Ibaretama', 'Sertão Central', 'sertao_central'),
(72, 'Ibicuitinga', 'Sertão Central', 'sertao_central'),
(73, 'Milhã', 'Sertão Central', 'sertao_central'),
(74, 'Mombaça', 'Sertão Central', 'sertao_central'),
(75, 'Pedra Branca', 'Sertão Central', 'sertao_central'),
(76, 'Piquet Carneiro', 'Sertão Central', 'sertao_central'),
(77, 'Quixadá', 'Sertão Central', 'sertao_central'),
(78, 'Quixeramobim', 'Sertão Central', 'sertao_central'),
(79, 'Senador Pompeu', 'Sertão Central', 'sertao_central'),
(80, 'Solonópole', 'Sertão Central', 'sertao_central'),
(81, 'Carnaubal', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(82, 'Croatá', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(83, 'Guaraciaba do Norte', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(84, 'Ibiapina', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(85, 'Ipu', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(86, 'São Benedito', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(87, 'Tianguá', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(88, 'Ubajara', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(89, 'Viçosa do Ceará', 'Serra da Ibiapaba', 'serra_da_ibiapaba'),
(90, 'Alcântaras', 'Sertão de Sobral', 'sertao_de_sobral'),
(91, 'Cariré', 'Sertão de Sobral', 'sertao_de_sobral'),
(92, 'Coreaú', 'Sertão de Sobral', 'sertao_de_sobral'),
(93, 'Forquilha', 'Sertão de Sobral', 'sertao_de_sobral'),
(94, 'Frecheirinha', 'Sertão de Sobral', 'sertao_de_sobral'),
(95, 'Graça', 'Sertão de Sobral', 'sertao_de_sobral'),
(96, 'Groaíras', 'Sertão de Sobral', 'sertao_de_sobral'),
(97, 'Massapê', 'Sertão de Sobral', 'sertao_de_sobral'),
(98, 'Meruoca', 'Sertão de Sobral', 'sertao_de_sobral'),
(99, 'Moraújo', 'Sertão de Sobral', 'sertao_de_sobral'),
(100, 'Mucambo', 'Sertão de Sobral', 'sertao_de_sobral'),
(101, 'Pacujá', 'Sertão de Sobral', 'sertao_de_sobral'),
(102, 'Pires Ferreira', 'Sertão de Sobral', 'sertao_de_sobral'),
(103, 'Reriutaba', 'Sertão de Sobral', 'sertao_de_sobral'),
(104, 'Santana do Acaraú', 'Sertão de Sobral', 'sertao_de_sobral'),
(105, 'Senador Sá', 'Sertão de Sobral', 'sertao_de_sobral'),
(106, 'Sobral', 'Sertão de Sobral', 'sertao_de_sobral'),
(107, 'Varjota', 'Sertão de Sobral', 'sertao_de_sobral'),
(108, 'Acaraú', 'Litoral Norte', 'litoral_norte'),
(109, 'Barroquinha', 'Litoral Norte', 'litoral_norte'),
(110, 'Bela Cruz', 'Litoral Norte', 'litoral_norte'),
(111, 'Camocim', 'Litoral Norte', 'litoral_norte'),
(112, 'Chaval', 'Litoral Norte', 'litoral_norte'),
(113, 'Cruz', 'Litoral Norte', 'litoral_norte'),
(114, 'Granja', 'Litoral Norte', 'litoral_norte'),
(115, 'Itarema', 'Litoral Norte', 'litoral_norte'),
(116, 'Jijoca de Jericoacoara', 'Litoral Norte', 'litoral_norte'),
(117, 'Marco', 'Litoral Norte', 'litoral_norte'),
(118, 'Martinópole', 'Litoral Norte', 'litoral_norte'),
(119, 'Morrinhos', 'Litoral Norte', 'litoral_norte'),
(120, 'Uruoca', 'Litoral Norte', 'litoral_norte'),
(121, 'Aiuaba', 'Sertão dos Inhamuns', 'sertao_dos_inhamuns'),
(122, 'Arneiroz', 'Sertão dos Inhamuns', 'sertao_dos_inhamuns'),
(123, 'Parambu', 'Sertão dos Inhamuns', 'sertao_dos_inhamuns'),
(124, 'Quiterianópolis', 'Sertão dos Inhamuns', 'sertao_dos_inhamuns'),
(125, 'Tauá', 'Sertão dos Inhamuns', 'sertao_dos_inhamuns'),
(126, 'Ararendá', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(127, 'Catunda', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(128, 'Crateús', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(129, 'Hidrolândia', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(130, 'Independência', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(131, 'Ipaporanga', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(132, 'Ipueiras', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(133, 'Monsenhor Tabosa', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(134, 'Nova Russas', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(135, 'Novo Oriente', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(136, 'Poranga', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(137, 'Santa Quitéria', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(138, 'Tamboril', 'Sertão dos Crateús', 'sertao_dos_crateus'),
(139, 'Boa Viagem', 'Sertão de Canindé', 'sertao_de_caninde'),
(140, 'Canindé', 'Sertão de Canindé', 'sertao_de_caninde'),
(141, 'Caridade', 'Sertão de Canindé', 'sertao_de_caninde'),
(142, 'Itatira', 'Sertão de Canindé', 'sertao_de_caninde'),
(143, 'Madalena', 'Sertão de Canindé', 'sertao_de_caninde'),
(144, 'Paramoti', 'Sertão de Canindé', 'sertao_de_caninde'),
(145, 'Alto Santo', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(146, 'Ererê', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(147, 'Iracema', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(148, 'Jaguaretama', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(149, 'Jaguaribara', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(150, 'Jaguaribe', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(151, 'Limoeiro do Norte', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(152, 'Morada Nova', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(153, 'Palhano', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(154, 'Pereiro', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(155, 'Potiretama', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(156, 'Quixeré', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(157, 'Russas', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(158, 'São João do Jaguaribe', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(159, 'Tabuleiro do Norte', 'Vale do Jaguaribe', 'vale_do_jaguaribe'),
(160, 'Aracati', 'Litoral Leste', 'litoral_leste'),
(161, 'Beberibe', 'Litoral Leste', 'litoral_leste'),
(162, 'Fortim', 'Litoral Leste', 'litoral_leste'),
(163, 'Icapuí', 'Litoral Leste', 'litoral_leste'),
(164, 'Itaiçaba', 'Litoral Leste', 'litoral_leste'),
(165, 'Jaguaruana', 'Litoral Leste', 'litoral_leste'),
(166, 'Aquiraz', 'Grande Fortaleza', 'grande_fortaleza'),
(167, 'Cascavel', 'Grande Fortaleza', 'grande_fortaleza'),
(168, 'Caucaia', 'Grande Fortaleza', 'grande_fortaleza'),
(169, 'Chorozinho', 'Grande Fortaleza', 'grande_fortaleza'),
(170, 'Eusébio', 'Grande Fortaleza', 'grande_fortaleza'),
(171, 'Fortaleza', 'Grande Fortaleza', 'grande_fortaleza'),
(172, 'Guaiúba', 'Grande Fortaleza', 'grande_fortaleza'),
(173, 'Horizonte', 'Grande Fortaleza', 'grande_fortaleza'),
(174, 'Itaitinga', 'Grande Fortaleza', 'grande_fortaleza'),
(175, 'Maracanaú', 'Grande Fortaleza', 'grande_fortaleza'),
(176, 'Maranguape', 'Grande Fortaleza', 'grande_fortaleza'),
(177, 'Pacajus', 'Grande Fortaleza', 'grande_fortaleza'),
(178, 'Pacatuba', 'Grande Fortaleza', 'grande_fortaleza'),
(179, 'Paracuru', 'Grande Fortaleza', 'grande_fortaleza'),
(180, 'Paraipaba', 'Grande Fortaleza', 'grande_fortaleza'),
(181, 'Pindoretama', 'Grande Fortaleza', 'grande_fortaleza'),
(182, 'São Gonçalo do Amarante', 'Grande Fortaleza', 'grande_fortaleza'),
(183, 'São Luis do Curu', 'Grande Fortaleza', 'grande_fortaleza'),
(184, 'Trairi', 'Grande Fortaleza', 'grande_fortaleza');

-- --------------------------------------------------------

--
-- Estrutura da tabela `feedbacks`
--

CREATE TABLE `feedbacks` (
  `id` int(11) NOT NULL,
  `liked` varchar(3) COLLATE utf8_bin NOT NULL,
  `text` varchar(300) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `feedbacks`
--

INSERT INTO `feedbacks` (`id`, `liked`, `text`) VALUES
(5, 'Sim', 'Gostei'),
(6, 'Não', 'Incrivel!!'),
(7, 'Sim', 'Muito bommm'),
(8, 'Não', 'Muito besta'),
(9, 'Sim', 'todo mundo podia fazer isso'),
(12, 'Sim', 'Ameiiii<3'),
(18, 'Não', 'Normal'),
(24, 'Sim', 'muito legal mesmo'),
(30, 'Sim', 'muitooooooooooooooooooo'),
(34, 'Sim', 'Amei Tudo'),
(36, 'Sim', 'achei massa'),
(37, 'Sim', 'Muito legal'),
(38, 'Sim', 'Divertidooooooo!'),
(39, 'Não', 'chato'),
(40, 'Sim', 'qq'),
(41, 'nul', 'oi'),
(42, 'Não', 'asd'),
(43, 'Sim', 'sd');

-- --------------------------------------------------------

--
-- Estrutura da tabela `general`
--

CREATE TABLE `general` (
  `number_access` int(11) NOT NULL,
  `year` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Extraindo dados da tabela `general`
--

INSERT INTO `general` (`number_access`, `year`) VALUES
(41, 2019);

-- --------------------------------------------------------

--
-- Estrutura da tabela `kids`
--

CREATE TABLE `kids` (
  `name` varchar(111) COLLATE utf8_bin NOT NULL,
  `gender` varchar(11) COLLATE utf8_bin NOT NULL,
  `age` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `badge_id` int(11) NOT NULL,
  `feedback_id` int(11) NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `kids`
--

INSERT INTO `kids` (`name`, `gender`, `age`, `city_id`, `badge_id`, `feedback_id`, `id`) VALUES
('Deb', 'F', 9, 171, 3, 5, 1),
('Junior', 'M', 10, 5, 5, 6, 2),
('Joaquim', 'M', 1, 27, 3, 7, 3),
('Priscila Sousa', 'F', 6, 148, 7, 8, 4),
('Myla', 'F', 11, 171, 4, 9, 5),
('Margarete', 'F', 10, 175, 1, 12, 6),
('Marcos Mateus', 'M', 12, 64, 7, 18, 8),
('ana julia', 'F', 7, 168, 7, 24, 18),
('henrique', 'M', 9, 34, 7, 30, 20),
('Dalia Albuqeurque', 'F', 9, 171, 4, 34, 22),
('Isabele', 'F', 8, 169, 1, 36, 26),
('Luana', 'F', 11, 28, 1, 37, 27),
('sds', 'F', 9, 55, 4, 38, 28),
('Junin', 'M', 10, 90, 7, 39, 29),
('za', 'M', 22, 27, 7, 40, 30),
('za', 'M', 22, 121, 2, 42, 31),
('Jonas', 'M', 6, 115, 7, 43, 32);

-- --------------------------------------------------------

--
-- Estrutura da tabela `users`
--

CREATE TABLE `users` (
  `first_name` varchar(111) COLLATE utf8_bin NOT NULL,
  `last_name` varchar(111) COLLATE utf8_bin NOT NULL,
  `email` varchar(111) COLLATE utf8_bin NOT NULL,
  `password` varchar(111) COLLATE utf8_bin NOT NULL,
  `id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `users`
--

INSERT INTO `users` (`first_name`, `last_name`, `email`, `password`, `id`) VALUES
('Lucas', 'Monteiro', 'lucas.monteiro58@gmail.com', '12345', 1),
('Débora', 'Moura', 'deboramour4@gmail.com', '12345', 2),
('Amigos', 'do Futuro', 'email@amigosdofuturo.com', '12345', 3);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `badges`
--
ALTER TABLE `badges`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cities`
--
ALTER TABLE `cities`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `feedbacks`
--
ALTER TABLE `feedbacks`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `kids`
--
ALTER TABLE `kids`
  ADD PRIMARY KEY (`id`),
  ADD KEY `KidCity_CityID` (`city_id`),
  ADD KEY `KidBadge_BadgeID` (`badge_id`),
  ADD KEY `KidFeedback_FeedbackID` (`feedback_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `badges`
--
ALTER TABLE `badges`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `cities`
--
ALTER TABLE `cities`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=185;

--
-- AUTO_INCREMENT for table `feedbacks`
--
ALTER TABLE `feedbacks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `kids`
--
ALTER TABLE `kids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Constraints for dumped tables
--

--
-- Limitadores para a tabela `kids`
--
ALTER TABLE `kids`
  ADD CONSTRAINT `KidBadge_BadgeID` FOREIGN KEY (`badge_id`) REFERENCES `badges` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `KidCity_CityID` FOREIGN KEY (`city_id`) REFERENCES `cities` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `KidFeedback_FeedbackID` FOREIGN KEY (`feedback_id`) REFERENCES `feedbacks` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
