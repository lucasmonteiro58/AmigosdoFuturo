-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 28-Mar-2019 às 01:28
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
  `region` varchar(111) COLLATE utf8_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin;

--
-- Extraindo dados da tabela `cities`
--

INSERT INTO `cities` (`id`, `name`, `region`) VALUES
(1, 'Acarapé', 'Maçico de Baturité'),
(2, 'Aracoiaba', 'Maçico de Baturité'),
(3, 'Aratuba', 'Maçico de Baturité'),
(4, 'Barreira', 'Maçico de Baturité'),
(5, 'Baturité', 'Maçico de Baturité'),
(6, 'Capistrano', 'Maçico de Baturité'),
(7, 'Guaramiranga', 'Maçico de Baturité'),
(8, 'Itapiúna', 'Maçico de Baturité'),
(9, 'Mulungu', 'Maçico de Baturité'),
(10, 'Ocara', 'Maçico de Baturité'),
(11, 'Pacoti', 'Maçico de Baturité'),
(12, 'Palmácia', 'Maçico de Baturité'),
(13, 'Redenção', 'Maçico de Baturité'),
(14, 'Amontada', 'Litoral Oeste'),
(15, 'Apuiarés', 'Litoral Oeste'),
(16, 'General Sampaio', 'Litoral Oeste'),
(17, 'Irauçuba', 'Litoral Oeste'),
(18, 'Itapajé', 'Litoral Oeste'),
(19, 'Itapipoca', 'Litoral Oeste'),
(20, 'Miraíma', 'Litoral Oeste'),
(21, 'Pentecoste', 'Litoral Oeste'),
(22, 'Tejuçuoca', 'Litoral Oeste'),
(23, 'Tururu', 'Litoral Oeste'),
(24, 'Umirim', 'Litoral Oeste'),
(25, 'Uruburetama', 'Litoral Oeste'),
(26, 'Abaiara', 'Cariri'),
(27, 'Altaneira', 'Cariri'),
(28, 'Antonina do Norte', 'Cariri'),
(29, 'Araripe', 'Cariri'),
(30, 'Assaré', 'Cariri'),
(31, 'Aurora', 'Cariri'),
(32, 'Barbalha', 'Cariri'),
(33, 'Barro', 'Cariri'),
(34, 'Brejo Santo', 'Cariri'),
(35, 'Campos Sales', 'Cariri'),
(36, 'Caririaçu', 'Cariri'),
(37, 'Crato', 'Cariri'),
(38, 'Farias Brito', 'Cariri'),
(39, 'Granjeiro', 'Cariri'),
(40, 'Jardim', 'Cariri'),
(41, 'Jati', 'Cariri'),
(42, 'Juazeiro do Norte', 'Cariri'),
(43, 'Lavras da Mangabeira', 'Cariri'),
(44, 'Mauriti', 'Cariri'),
(45, 'Milagres', 'Cariri'),
(46, 'Missão Velha', 'Cariri'),
(47, 'Nova Olinda', 'Cariri'),
(48, 'Penaforte', 'Cariri'),
(49, 'Porteiras', 'Cariri'),
(50, 'Potengi', 'Cariri'),
(51, 'Salitre', 'Cariri'),
(52, 'Santana do Cariri', 'Cariri'),
(53, 'Tarrafas', 'Cariri'),
(54, 'Várzea Alegre', 'Cariri'),
(55, 'Acopiara', 'Centro Sul'),
(56, 'Baixio', 'Centro Sul'),
(57, 'Cariús', 'Centro Sul'),
(58, 'Catarina', 'Centro Sul'),
(59, 'Cedro', 'Centro Sul'),
(60, 'Icó', 'Centro Sul'),
(61, 'Iguatu', 'Centro Sul'),
(62, 'Ipaumirim', 'Centro Sul'),
(63, 'Jucás', 'Centro Sul'),
(64, 'Orós', 'Centro Sul'),
(65, 'Quixelô', 'Centro Sul'),
(66, 'Saboeiro', 'Centro Sul'),
(67, 'Umari', 'Centro Sul'),
(68, 'Banabuiú', 'Sertão Central'),
(69, 'Choró', 'Sertão Central'),
(70, 'Deputado Irapuan Pinheiro', 'Sertão Central'),
(71, 'Ibaretama', 'Sertão Central'),
(72, 'Ibicuitinga', 'Sertão Central'),
(73, 'Milhã', 'Sertão Central'),
(74, 'Mombaça', 'Sertão Central'),
(75, 'Pedra Branca', 'Sertão Central'),
(76, 'Piquet Carneiro', 'Sertão Central'),
(77, 'Quixadá', 'Sertão Central'),
(78, 'Quixeramobim', 'Sertão Central'),
(79, 'Senador Pompeu', 'Sertão Central'),
(80, 'Solonópole', 'Sertão Central'),
(81, 'Carnaubal', 'Serra da Ibiapaba'),
(82, 'Croatá', 'Serra da Ibiapaba'),
(83, 'Guaraciaba do Norte', 'Serra da Ibiapaba'),
(84, 'Ibiapina', 'Serra da Ibiapaba'),
(85, 'Ipu', 'Serra da Ibiapaba'),
(86, 'São Benedito', 'Serra da Ibiapaba'),
(87, 'Tianguá', 'Serra da Ibiapaba'),
(88, 'Ubajara', 'Serra da Ibiapaba'),
(89, 'Viçosa do Ceará', 'Serra da Ibiapaba'),
(90, 'Alcântaras', 'Sertão de Sobral'),
(91, 'Cariré', 'Sertão de Sobral'),
(92, 'Coreaú', 'Sertão de Sobral'),
(93, 'Forquilha', 'Sertão de Sobral'),
(94, 'Frecheirinha', 'Sertão de Sobral'),
(95, 'Graça', 'Sertão de Sobral'),
(96, 'Groaíras', 'Sertão de Sobral'),
(97, 'Massapê', 'Sertão de Sobral'),
(98, 'Meruoca', 'Sertão de Sobral'),
(99, 'Moraújo', 'Sertão de Sobral'),
(100, 'Mucambo', 'Sertão de Sobral'),
(101, 'Pacujá', 'Sertão de Sobral'),
(102, 'Pires Ferreira', 'Sertão de Sobral'),
(103, 'Reriutaba', 'Sertão de Sobral'),
(104, 'Santana do Acaraú', 'Sertão de Sobral'),
(105, 'Senador Sá', 'Sertão de Sobral'),
(106, 'Sobral', 'Sertão de Sobral'),
(107, 'Varjota', 'Sertão de Sobral'),
(108, 'Acaraú', 'Litoral Norte'),
(109, 'Barroquinha', 'Litoral Norte'),
(110, 'Bela Cruz', 'Litoral Norte'),
(111, 'Camocim', 'Litoral Norte'),
(112, 'Chaval', 'Litoral Norte'),
(113, 'Cruz', 'Litoral Norte'),
(114, 'Granja', 'Litoral Norte'),
(115, 'Itarema', 'Litoral Norte'),
(116, 'Jijoca de Jericoacoara', 'Litoral Norte'),
(117, 'Marco', 'Litoral Norte'),
(118, 'Martinópole', 'Litoral Norte'),
(119, 'Morrinhos', 'Litoral Norte'),
(120, 'Uruoca', 'Litoral Norte'),
(121, 'Aiuaba', 'Sertão dos Inhamuns'),
(122, 'Arneiroz', 'Sertão dos Inhamuns'),
(123, 'Parambu', 'Sertão dos Inhamuns'),
(124, 'Quiterianópolis', 'Sertão dos Inhamuns'),
(125, 'Tauá', 'Sertão dos Inhamuns'),
(126, 'Ararendá', 'Sertão dos Crateús'),
(127, 'Catunda', 'Sertão dos Crateús'),
(128, 'Crateús', 'Sertão dos Crateús'),
(129, 'Hidrolândia', 'Sertão dos Crateús'),
(130, 'Independência', 'Sertão dos Crateús'),
(131, 'Ipaporanga', 'Sertão dos Crateús'),
(132, 'Ipueiras', 'Sertão dos Crateús'),
(133, 'Monsenhor Tabosa', 'Sertão dos Crateús'),
(134, 'Nova Russas', 'Sertão dos Crateús'),
(135, 'Novo Oriente', 'Sertão dos Crateús'),
(136, 'Poranga', 'Sertão dos Crateús'),
(137, 'Santa Quitéria', 'Sertão dos Crateús'),
(138, 'Tamboril', 'Sertão dos Crateús'),
(139, 'Boa Viagem', 'Sertão de Canindé'),
(140, 'Canindé', 'Sertão de Canindé'),
(141, 'Caridade', 'Sertão de Canindé'),
(142, 'Itatira', 'Sertão de Canindé'),
(143, 'Madalena', 'Sertão de Canindé'),
(144, 'Paramoti', 'Sertão de Canindé'),
(145, 'Alto Santo', 'Vale do Jaguaribe'),
(146, 'Ererê', 'Vale do Jaguaribe'),
(147, 'Iracema', 'Vale do Jaguaribe'),
(148, 'Jaguaretama', 'Vale do Jaguaribe'),
(149, 'Jaguaribara', 'Vale do Jaguaribe'),
(150, 'Jaguaribe', 'Vale do Jaguaribe'),
(151, 'Limoeiro do Norte', 'Vale do Jaguaribe'),
(152, 'Morada Nova', 'Vale do Jaguaribe'),
(153, 'Palhano', 'Vale do Jaguaribe'),
(154, 'Pereiro', 'Vale do Jaguaribe'),
(155, 'Potiretama', 'Vale do Jaguaribe'),
(156, 'Quixeré', 'Vale do Jaguaribe'),
(157, 'Russas', 'Vale do Jaguaribe'),
(158, 'São João do Jaguaribe', 'Vale do Jaguaribe'),
(159, 'Tabuleiro do Norte', 'Vale do Jaguaribe'),
(160, 'Aracati', 'Litoral Leste'),
(161, 'Beberibe', 'Litoral Leste'),
(162, 'Fortim', 'Litoral Leste'),
(163, 'Icapuí', 'Litoral Leste'),
(164, 'Itaiçaba', 'Litoral Leste'),
(165, 'Jaguaruana', 'Litoral Leste'),
(166, 'Aquiraz', 'Grande Fortaleza'),
(167, 'Cascavel', 'Grande Fortaleza'),
(168, 'Caucaia', 'Grande Fortaleza'),
(169, 'Chorozinho', 'Grande Fortaleza'),
(170, 'Eusébio', 'Grande Fortaleza'),
(171, 'Fortaleza', 'Grande Fortaleza'),
(172, 'Guaiúba', 'Grande Fortaleza'),
(173, 'Horizonte', 'Grande Fortaleza'),
(174, 'Itaitinga', 'Grande Fortaleza'),
(175, 'Maracanaú', 'Grande Fortaleza'),
(176, 'Maranguape', 'Grande Fortaleza'),
(177, 'Pacajus', 'Grande Fortaleza'),
(178, 'Pacatuba', 'Grande Fortaleza'),
(179, 'Paracuru', 'Grande Fortaleza'),
(180, 'Paraipaba', 'Grande Fortaleza'),
(181, 'Pindoretama', 'Grande Fortaleza'),
(182, 'São Gonçalo do Amarante', 'Grande Fortaleza'),
(183, 'São Luis do Curu', 'Grande Fortaleza'),
(184, 'Trairi', 'Grande Fortaleza');

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
(37, 'Sim', 'Muito legal');

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
('Luana', 'F', 11, 28, 1, 37, 27);

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `kids`
--
ALTER TABLE `kids`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

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
