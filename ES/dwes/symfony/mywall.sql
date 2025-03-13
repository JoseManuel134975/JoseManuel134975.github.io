-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Feb 08, 2025 at 03:51 PM
-- Server version: 9.1.0
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mywall`
--

-- --------------------------------------------------------

--
-- Table structure for table `messenger_messages`
--

CREATE TABLE `messenger_messages` (
  `id` bigint NOT NULL,
  `body` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `headers` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue_name` varchar(190) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `available_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `delivered_at` datetime DEFAULT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `post`
--

CREATE TABLE `post` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `content` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `day` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `likes` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `post`
--

INSERT INTO `post` (`id`, `user_id`, `content`, `created_at`, `image`, `day`, `likes`) VALUES
(49, 5, 'Probando filtrado por día', '2025-02-04 19:27:28', NULL, '05', NULL),
(50, 5, 'Probando +', '2025-02-04 19:27:49', NULL, '05', 3),
(51, 5, 'Probando ++', '2025-02-04 19:28:08', NULL, '04', 2),
(53, 5, 'a', '2025-02-04 19:35:30', NULL, '04', 14),
(54, 6, 'Holaaa', '2025-02-04 19:59:01', NULL, '04', 3);

-- --------------------------------------------------------

--
-- Table structure for table `replie`
--

CREATE TABLE `replie` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `post_id` int NOT NULL,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)',
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `answer` longtext COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `replie`
--

INSERT INTO `replie` (`id`, `user_id`, `post_id`, `created_at`, `image`, `answer`) VALUES
(33, 6, 53, '2025-02-08 15:09:43', NULL, 'Hola'),
(34, 6, 53, '2025-02-08 15:12:10', NULL, 'Probando'),
(35, 6, 51, '2025-02-08 15:12:42', NULL, 'Probando'),
(36, 6, 51, '2025-02-08 15:13:02', '/postUploads/José Manuel/replies/jpg-44-2-67a7666e73a69.jpg', 'Probando');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `username` varchar(180) COLLATE utf8mb4_unicode_ci NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bio` longtext COLLATE utf8mb4_unicode_ci,
  `created_at` datetime NOT NULL COMMENT '(DC2Type:datetime_immutable)'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `username`, `roles`, `password`, `email`, `bio`, `created_at`) VALUES
(5, 'José Manuel', '[]', '$2y$13$JNExQRpp0UPu.Um80WRrg.uNYTbH8gbDlCnvBDlOAyhMaNCNvB09a', 'josemanuel3606@gmail.com', NULL, '2025-02-04 19:00:47'),
(6, 'Maria', '[]', '$2y$13$FQTJav7EbISPsRVWHvl//eiv3GWc2xmCdabJDbXQXl6I897nk3C1W', 'maria1234@gmail.com', 'Hola que tal', '2025-02-04 19:02:03'),
(7, 'Prueba', '[]', '$2y$13$gTl4LKjbHBijxdvLD75Ruen.i6JMnU1GT5.jUc3xgc0mE8W79ntT2', 'prueba1@gmail.com', 'Prueba', '2025-02-08 15:33:33');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_75EA56E0FB7336F0` (`queue_name`),
  ADD KEY `IDX_75EA56E0E3BD61CE` (`available_at`),
  ADD KEY `IDX_75EA56E016BA31DB` (`delivered_at`);

--
-- Indexes for table `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5A8A6C8DA76ED395` (`user_id`);

--
-- Indexes for table `replie`
--
ALTER TABLE `replie`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_5EF22B5A76ED395` (`user_id`),
  ADD KEY `IDX_5EF22B54B89032C` (`post_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_IDENTIFIER_USERNAME` (`username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messenger_messages`
--
ALTER TABLE `messenger_messages`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `post`
--
ALTER TABLE `post`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `replie`
--
ALTER TABLE `replie`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `post`
--
ALTER TABLE `post`
  ADD CONSTRAINT `FK_5A8A6C8DA76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `replie`
--
ALTER TABLE `replie`
  ADD CONSTRAINT `FK_5EF22B54B89032C` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`),
  ADD CONSTRAINT `FK_5EF22B5A76ED395` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
