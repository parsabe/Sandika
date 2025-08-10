-- phpMyAdmin SQL Dump
-- version 4.9.11
-- https://www.phpmyadmin.net/
--
-- Host: db5018220276.hosting-data.io
-- Generation Time: Aug 10, 2025 at 11:54 AM
-- Server version: 8.0.36
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dbs14433613`
--

-- --------------------------------------------------------

--
-- Table structure for table `arkham_spirits`
--

CREATE TABLE `arkham_spirits` (
  `maintxt` text,
  `ciphered` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `arkham_spirits`
--

INSERT INTO `arkham_spirits` (`maintxt`, `ciphered`) VALUES
('I am the spirit of Amadeus Arkham. Through my actions, I have saved this cursed city, though my own curse is to forever remain in the shadows. My story is carved into the very soul of Arkham and will only be revealed to those dedicated enough to discover it', 'V nz gur fcvrgvba bs Nznqrhf Nexzun. Guveqg zl nppvqragf, V unir fnirq guvf pherfrq pvgl, gubhtu zl bja pherfr vf gb sbeprer erznva va gur funqbjf. Zl fgbel vf pneire vagb gur irel fbyh bs Nexzun naq jvyy bayl or ireiryrq gb gubfr qrgnvyrq rabhtu gb qvffreg vg.'),
('My family\'s blood ran through the heart of Gotham. We were doctors, politicians and teachers; we have been the organ cleaning the arterial filth from the city. We have been its servants giving all to protect it. And still it has chosen to hurt us', 'Zl snpgbe\'f oehq erny gura gur uneq bs Tbunzna. Jr jrer qbpgbef, cvpgherf naq grpuvrsrf; jr unir orra gur benevapurf pyrnivat gur negvevngr svysg sevraqy sebz gur pvgl. Jr unir orra vg freravgl tvivat nyy gb cerfrg vg. Naq fgnyy vg unf pubfrq gb uhreg hf.'),
('As Gotham\'s veins slowly filled with pain and suffering, the effects were felt everywhere. My father fell first, infected by some foul disease; my mother lived on, but only in a dream. I returned to the family home to care for her where she remained in her bed for as long as her body continued to breathe. Her tears kept me awake at night', 'Nf Tbguna\'f irvar fbyynf svyyl svaqrq jvgu cnva naq fhefravat, gur rssrpgf jrer srggryrq rireljuvyr. Zl sngure svyy srefr, vqrsregre ol fbzr sbhy qrnfgevna; zl zbavir yvirq ba, ohg bayl va n qernq. V erprcgvat gb gur snzvyl ubzr gb pne ercynpr sbe ure jurer fur erzrzorerq va ure orq sbe nf ybat nf ure obql pbafvqrerq gb oernpuvr. Ure gernrf xrrevat zr njvgubbq.'),
('My journey lasted little over a month. Visiting academics in both Metropolis and Keystone, I was exposed to a wealth of new ideas. I began my day returning home in good spirits, eager to see my wife and family. I ended it kneeling in their blood, broken fragments of my life pouring through dripping red fingers', 'Zl wbarjva yngre yvggyr bire n zbagu. Ivfgvat nqvpavpnzf va obgu Zrgcbegfbf naq Xrfgbar, V jnf rkcbfrq gb n jryyvfu bs arj vqrnf. V orqraq zl qnl ercbegvat ubzr va tbbq fcvrf, rtrentr gb frr zl jvsr naq snzvyl. V raqrq vg xraqvat va gurve oehzf, oebxra senzrfgf bs zl yvsr cbvagvat guebhtu qevivat erq svatreff.'),
('I returned to my work, but I could not shake the pictures from my mind. I should have been repulsed, but I was more eager than ever to find an explanation for why someone would do this', 'V erprcgvat gb zl jbex, ohg V pbhyq abg funxr gur cvpghers sebz zl zvaq. V fubhyq unir orra erchafheprq, ohg V jnf zber rtrecr guna rire gb svavfu na rkcerffvba sbe jul fbzrbar jbhyq qb guvf.'),
('They brought the animal before me, shameless and barking like a mad dog. For what felt like days I endured his boasts. He took pleasure recounting his actions, cataloging his depraved crimes. What should have been revenge turned to pity. This poor dog needed my help', 'Gurl oebhtug gur nznavfg orpnhfr zr, funzoref naq onevxvat yvxr n znq qbq. Sbe jung sryg yvxr qnlf V qrhevngr uvf obfgf. Ur gbxr cyvpuref erpbzzraqvat uvf npgvbaf, pnthytvat uvf qercrair qrzbaf. Jung fubhyq unir orra erirerire ghearq gb cvggl. Guvf cbez qbq arrqrq zl uryc.'),
('The island changed little over the years. Its reputation was in tatters, but I vowed to fix it. As the buildings were rebuilt I saw the future, a bright wonderful future', 'Gur vafvqr punaprq yvgren bire gur lrnef. Vg vfgerffrag jnf va gnggref, ohg V ibjq gb svk vg. Ng gur oevqtrf jrer oervqrag V fnj gur shgher, n oevat jbeyqbj oevqtr.'),
('New brick, metal and paint covered old wounds. Fresh blood was injected into the body. Bright new minds came and all swore to uphold our promises. We all knew we were the ones to fix this city. And the city would thank us', 'Arj oevpx, zrgny naq cnva pbcervqrq byq jbaqref. Ersrfg oyqba jnf vaprgerq vagb gur obql. Oevat arj zvaqf pnzr naq nyy fhebrq gb hcyvk bhe cebzrf. Jr nyy xarj jr jrer gur barf gb svk guvf pvgl. Naq gur pvgl jvyyq gurax hf.'),
('My family\'s killer stood in front of me. Years of therapy have deemed him sane. I was proud to see him walk free. In exchange for his liberty the state required only a signature. He talked about wanting to walk in a park, how he longed to feel fresh air on his face, and then he took my father\'s fountain pen and killed my secretary. As he was subdued, he screamed out, pleading for forgiveness, for pity, but I had none. I watched as guards beat him to a stain on the floor', 'Zl snzvyl\'f xvyyre fghqrq va sebag bs zr. Lrnef bs gurencbyr unir qrernq uvz fnar. V jnf cebonoyl gb frr uvz jnyx ser. Va rnfvatrapr sbe uvf yvoenfg gur fgngvba erprirq bayl n fviregengr. Ur gnxra nobhg jnaqbvat gb jnyx va n cnex, ubj ur ybatrq gb srry svefg nevne ba uvf sner, naq gura ur gbbx zl snzvyl\'f sbaarggra cra naq xvyyrq zl frpergbe. Nf ur jnf fhoheqrerq, ur fpernzrq bhg, cyrnavat sbe svffregvivat, sbe cvggl, ohg V unq abar. V jngpurq nf tneqf orng uvz gb n fgva va gur sbez.');

-- --------------------------------------------------------

--
-- Table structure for table `arkham_status`
--

CREATE TABLE `arkham_status` (
  `solver_id` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `arkham_status`
--

INSERT INTO `arkham_status` (`solver_id`, `subject`, `status`) VALUES
('b9524d1fad7e93bb', 'I am the spirit of Amadeus Arkham. Through my actions, I have saved this cursed city, though my own curse is to forever remain in the shadows. My story is carved into the very soul of Arkham and will only be revealed to those dedicated enough to discover ', 'Solved');

-- --------------------------------------------------------

--
-- Table structure for table `articles`
--

CREATE TABLE `articles` (
  `id` int NOT NULL,
  `user_name` varchar(50) NOT NULL,
  `contents` text,
  `date_published` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `message` text,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`, `date`) VALUES
(1, 'asd', 'parsabe99@outlook.com', 'asd', '2023-12-26 02:49:01');

-- --------------------------------------------------------

--
-- Table structure for table `emails`
--

CREATE TABLE `emails` (
  `email` varchar(50) NOT NULL,
  `date` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `emails`
--

INSERT INTO `emails` (`email`, `date`) VALUES
('parsabe99@outlook.com', '2023-12-26 02:09:31'),
('parsabe99@outlook.com', '2023-12-26 02:09:31');

-- --------------------------------------------------------

--
-- Table structure for table `git`
--

CREATE TABLE `git` (
  `anon_id` int NOT NULL,
  `git_link` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `git_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `github_links`
--

CREATE TABLE `github_links` (
  `id` int NOT NULL,
  `author` varchar(236) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `link` varchar(255) NOT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `github_links`
--

INSERT INTO `github_links` (`id`, `author`, `link`, `date`) VALUES
(1, 'Hounaar', 'https://github.com/akamai/DDSpoof', '2024-01-17'),
(2, 'Hounaar', 'https://github.com/hounaar/HounaarLang', '2024-01-17'),
(3, 'Hounaar', 'https://github.com/hounaar/HounaarToolkit', '2024-01-17');

-- --------------------------------------------------------

--
-- Table structure for table `links`
--

CREATE TABLE `links` (
  `id` int NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `link` varchar(255) DEFAULT NULL,
  `description` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `links`
--

INSERT INTO `links` (`id`, `title`, `link`, `description`) VALUES
(1, 'Evolution of Artificial Intelligence: Transforming Tomorrow\'s World Today', '/posts/evolution-of-ai/', 'A brief overview welcoming visitors to explore the fascinating journey of AI, its history, and its impact on various facets of our lives.'),
(2, 'A tool or a threat', '/posts/tool-or-threat/', 'Artificial Intelligence (AI) stands at the forefront of technological advancement, promising transformative capabilities across various sectors.'),
(3, 'Navigating the Digital Age', '/posts/digital-impact/', 'In today\'s interconnected world, the proliferation of technology has transformed nearly every aspect of our lives.'),
(4, 'Digital Threads: Unraveling the Impact of Social Media on Relationships and Mental Health', '/posts/digital-tr/', 'This article delves into the intricate web woven by social media, exploring its influence on our connections with others and mental well-being.'),
(5, 'Catalysts of Change: Unveiling the Power of Social Entrepreneurs', '/posts/empathy/', 'This article delves into the world of individuals who combine entrepreneurial spirit with social consciousness.'),
(6, 'sandika', 'https://sandika.hounaar.com', 'where justice truly lies?'),
(7, 'abie motlagh', 'https://abie-motlagh.hounaar.com', 'Online free books (in Persian language)'),
(8, 'chat portal', 'https://chat.hounaar.com', 'Online Chat portal form'),
(9, 'Dictionary', 'https://dict.hounaar.com', 'online dictionary for German and English language'),
(10, 'Nigma Challenge', 'https://nigma.hounaar.com', 'Smart enough to solve riddles? then this is expecting you'),
(11, 'Git insights', '/git-insights/', 'some recommended GitHub repos by Hounaar'),
(12, 'what to watch', '/movies/', 'Hounaar suggested some movies to watch. Wanna know what they are?'),
(13, 'Songs', '/songs/', 'Wanna listen to some music, then prepare your Spotify account first...'),
(14, 'podcasts', '/podcasts/', 'So what are the tales of Horizon? Join Hounaar Podcasts to learn more about the world'),
(15, 'supports', '/support/', 'oh you are so kind that you are looking for ways to support Hounaar. Know that he is grateful'),
(16, 'About Hounaar', '/about-hounaar/', 'So who is the mysterious person recording these podcasts? Let\'s figure them out'),
(17, 'Contact', '/contact/', 'How to contact Hounaar, then this is the appropriate form for you'),
(18, 'All posts', '/all-posts/', 'Wanna know about Hounaar posts? This is the way to find it'),
(19, 'Spotify Podcasts', 'https://open.spotify.com/show/4xc9b155do9MUIDa3Rf3FA', 'How to listen to Hounaar podcasts? Follow the links for Spotify'),
(20, 'Youtube', 'https://www.youtube.com/channel/UC3TTcgyTFbOpa0Kmv4rZw3A', 'This is Hounaar official YouTube Channel. Join him if you wanna enjoy your life...'),
(21, 'github account', 'https://github.com/hounaar', 'curiosities about Hounaar projects and codes? Why don\'t you follow him on his GitHub account?'),
(22, 'twitter', 'https://twitter.com/hounaar', 'Wanna follow daily news and more posts from him? Following his Twitter account is one way'),
(23, 'Instagram', 'https://instagram.com/hounaaar', 'Why don\'t you follow the one and only Hounaar on his Instagram? He posts motivation videos as well'),
(24, 'tiktok', 'https://www.tiktok.com/@hounaaar', 'Wanna have fun as well? Then follow Hounaar on his TikTok account to see more...'),
(25, 'zibayee elahi', 'https://zibayee-elahi.hounaar.com', 'Do you really care about your health, skin, body, and other parts? Then let\'s fix things up. Follow Zibayee Elahi to become totally healthy'),
(26, 'QCA', 'https://hounaar.com/about/publication/qca/', 'QCA, focusing on its innovative approach that harnesses the quantum mechanical properties of electrons within quantum dots for data representation and processing.'),
(27, 'An analysis on vulnerabilities', 'https://hounaar.com/about/publication/vuls/', 'This article will direct you to the most proficient method to get your site against normal PHP weaknesses.'),
(28, 'Data mining Usage in CRM', 'https://hounaar.com/about/publication/dm/', 'This article describes how recent advancements in data technology and the internet have led to a significant shift in communication and advertising strategies.'),
(29, 'Synergy of Blockchain', 'https://hounaar.com/about/publication/block/', 'This essay explores the synergy between blockchain and artificial intelligence (AI), showcasing their transformative potential in various industries.'),
(30, 'HounaarToolkit', 'https://github.com/hounaar/HounaarToolkit', 'HounaarToolkit is a versatile Python toolkit that provides a set of tools for various tasks, including data analysis, YouTube video downloading, cryptocurrency price checking, typing automation'),
(31, 'hounaar_EAI', 'https://github.com/hounaar/HounaarWeb/tree/main/hounaar_EAI', 'This project is an AI which explores and learns if only it did not know the answer. (An explorer AI)'),
(32, 'Cesar', 'https://github.com/hounaar/Cesar', 'This is a collection of command-line scripts in Python, C++, and Perl for encoding and decoding text files using the Caesar cipher.'),
(33, 'Analysis Workflows', 'https://hounaar.com/about/projects/workflow/', 'Analysis Workflows that I have done all are here'),
(34, 'HounaarLang', 'https://github.com/hounaar/HounaarLang', 'Hounaar is a beginner-friendly and minimalist programming language designed for ease of use and quick scripting. Below is an overview of its syntax and key features.'),
(35, 'HounaarWeb', 'https://github.com/hounaar/HounaarWeb/', 'Welcome to the combined repository for three exciting projects: Blue Pearl Chat Portal, Edward Nigma Online Game, and Hounaar EAI.'),
(36, 'RX7', 'https://github.com/hounaar/RX7', 'RX7 is a Perl script that demonstrates various functionalities, including bioinformatics tasks, data encryption/decryption, and simulated IoT data collection and control.'),
(37, 'PHPortal', 'https://github.com/hounaar/PHPortal', 'PHPortal is a lightweight PHP library that provides a simple and consistent interface for working with various database systems, including MySQL, SQL Server, and Oracle.'),
(38, 'sapco', 'https://hounaar.com/about/projects/sapco/', 'These are what I have done in Sapco Corp'),
(39, 'Huffman', 'https://github.com/hounaar/huffman', 'Huffman coding is a lossless data compression algorithm');

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `msg_id` int NOT NULL,
  `incoming_msg_id` int NOT NULL,
  `outgoing_msg_id` int NOT NULL,
  `msg` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`msg_id`, `incoming_msg_id`, `outgoing_msg_id`, `msg`) VALUES
(1, 0, 9, 'how u doin');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE `password_resets` (
  `user_id` int NOT NULL,
  `token` char(64) NOT NULL,
  `expires_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `riddles`
--

CREATE TABLE `riddles` (
  `id` int NOT NULL,
  `modal_number` int DEFAULT NULL,
  `riddle_text` text,
  `answer` text
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `riddles`
--

INSERT INTO `riddles` (`id`, `modal_number`, `riddle_text`, `answer`) VALUES
(1, 1, 'If you know me, you will want to share me. But if you share me I will be gone. What am I?', 'Secret'),
(2, 2, 'What is always in front of you but can’t be seen?', 'Future'),
(3, 3, 'The more there is, the less you see. What is it?', 'Darkness'),
(4, 4, 'What belongs to you but is used more by others?', 'Your name'),
(5, 5, 'What can be cracked, made, told, and played?', 'A joke'),
(6, 6, 'I am full of holes but still hold water. What am I?', 'Sponge'),
(7, 7, 'I am not alive, but I can grow; I don’t have lungs, but I need air; I don’t have a mouth, but water kills me. What am I?', 'Fire'),
(8, 8, 'The person who makes it, sells it. The person who buys it, never uses it. The person who uses it, never knows they’re using it. What is it?', 'Coffin'),
(9, 9, 'I fly without wings. I cry without eyes. Whenever I go, darkness follows me. What am I?', 'Cloud'),
(10, 10, 'The more you have of it, the less you see. What is it?', 'Darkness'),
(11, 11, 'You cannot lose me when it’s sunny. What am I?', 'Shadow'),
(12, 12, 'The more there is, the less you see. What is it?', 'Darkness'),
(13, 13, 'All you need to do is to keep your eyes on the prize. What am I?', 'Target'),
(14, 14, 'I am taken from a mine, shut up in a wooden case, from which I am never released, yet used by almost every person. What am I?', 'Pencil Lead'),
(15, 15, 'I always run, but never walk. I often murmur, but never talk. I have a bed, but never sleep. What am I?', 'River'),
(16, 16, 'What has keys but can’t open locks?', 'Piano'),
(17, 17, 'I am tall when I am young and short when I am old. What am I?', 'Candle'),
(18, 18, 'The more you take, the more you leave behind. What am I?', 'Footsteps'),
(19, 19, 'What has keys but can\'t open locks?', 'Piano'),
(20, 20, 'All you need to do is to keep your eyes on the price.', 'Right');

-- --------------------------------------------------------

--
-- Table structure for table `riddles_status`
--

CREATE TABLE `riddles_status` (
  `solver_id` varchar(255) NOT NULL,
  `riddle_id` varchar(255) NOT NULL,
  `subject` varchar(255) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Dumping data for table `riddles_status`
--

INSERT INTO `riddles_status` (`solver_id`, `riddle_id`, `subject`, `status`) VALUES
('0', '1', 'secret', 'Solved'),
('0', '7', 'fire', 'Solved'),
('b9524d1fad7e93bb', '1', 'secret', 'Solved');

-- --------------------------------------------------------

--
-- Table structure for table `search_results`
--

CREATE TABLE `search_results` (
  `id` int NOT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` text,
  `link` varchar(255) DEFAULT NULL,
  `date` date DEFAULT NULL,
  `anon_id` int DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `story`
--

CREATE TABLE `story` (
  `anon_id` int NOT NULL,
  `author_name` varchar(50) NOT NULL,
  `story_text` text NOT NULL,
  `post_date` date DEFAULT NULL,
  `expiration_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `anon_id` varchar(255) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `location` varchar(255) DEFAULT NULL,
  `bio` varchar(255) DEFAULT NULL,
  `btc_address` varchar(255) DEFAULT NULL,
  `eth_address` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `birth` varchar(50) DEFAULT NULL,
  `twitter_account` varchar(255) DEFAULT NULL,
  `instagram_account` varchar(255) DEFAULT NULL,
  `telegram_account` varchar(250) DEFAULT NULL,
  `github_account` varchar(255) DEFAULT NULL,
  `github_verified` varchar(30) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `verification` varchar(5) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `rank` varchar(255) DEFAULT NULL,
  `date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `profile_img` varchar(255) DEFAULT NULL,
  `CP` int DEFAULT NULL,
  `riddles_solved` int DEFAULT NULL,
  `arkham_spirits` int DEFAULT NULL,
  `contact_email` varchar(50) DEFAULT NULL,
  `about` text,
  `skills` text,
  `certificates` text,
  `projects` text,
  `workshops` text,
  `hounaar_website` varchar(255) DEFAULT NULL,
  `hounaar_website_date` varchar(30) DEFAULT NULL,
  `email_notifications` tinyint(1) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Table structure for table `user_posts`
--

CREATE TABLE `user_posts` (
  `name` varchar(255) DEFAULT NULL,
  `title` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `details` varchar(1500) DEFAULT NULL,
  `link` varchar(150) CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci NOT NULL,
  `date` varchar(350) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE `user_profile` (
  `id` int NOT NULL,
  `anon_id` int NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `about` text,
  `skills` text,
  `certificates` text,
  `projects` text,
  `workshops` text,
  `hounaar_website` varchar(255) DEFAULT NULL,
  `hounaar_website_date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `articles`
--
ALTER TABLE `articles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `github_links`
--
ALTER TABLE `github_links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `links`
--
ALTER TABLE `links`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`msg_id`);

--
-- Indexes for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD PRIMARY KEY (`user_id`),
  ADD UNIQUE KEY `token_unique` (`token`);

--
-- Indexes for table `riddles`
--
ALTER TABLE `riddles`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `search_results`
--
ALTER TABLE `search_results`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_profile`
--
ALTER TABLE `user_profile`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `articles`
--
ALTER TABLE `articles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `github_links`
--
ALTER TABLE `github_links`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `links`
--
ALTER TABLE `links`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `msg_id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `riddles`
--
ALTER TABLE `riddles`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `search_results`
--
ALTER TABLE `search_results`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_profile`
--
ALTER TABLE `user_profile`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `password_resets`
--
ALTER TABLE `password_resets`
  ADD CONSTRAINT `password_resets_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
