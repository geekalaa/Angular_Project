-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2020 at 02:20 AM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `alaa_kaddour`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`) VALUES
(10, 'tech'),
(11, 'Startups'),
(12, 'Events');

-- --------------------------------------------------------

--
-- Table structure for table `editeurs`
--

CREATE TABLE `editeurs` (
  `id` int(11) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `email` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `editeurs`
--

INSERT INTO `editeurs` (`id`, `firstname`, `lastname`, `email`) VALUES
(8, 'kaddour', 'alaa', 'alaa.kaddour1@esprit.tn'),
(9, 'Esprit', 'tn', 'esprit@esprit.tn');

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(45) NOT NULL,
  `contenu` text NOT NULL,
  `idcategorie` int(11) NOT NULL,
  `nbre_vue` int(11) NOT NULL,
  `idediteur` int(11) NOT NULL,
  `image` varchar(45) NOT NULL,
  `url` varchar(100) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `contenu`, `idcategorie`, `nbre_vue`, `idediteur`, `image`, `url`, `date`) VALUES
(16, 'Oracle is headed to Texas now, too', 'Austinites, watch out; another tech company is headed into town.\n\nJust days after Tesla CEO Elon Musk revealed during an interview that he has moved to Texas, and less than two weeks after HP Enterprises, a spin-out of one of the iconic Silicon Valley company Hewlett-Packard, announced that it is separately moving to Texas, yet another of the Bay Area’s best-known brands — Oracle —  is pulling up stakes and headed east to Texas, too.\n\nThe news was first reported by Bloomberg. The company confirmed the move in a statement sent to TechCrunch, that says that along with a “more flexible employee work location policy,” it  has changed its corporate headquarters from Redwood Shores, Ca., to Austin. “We believe these moves best position Oracle for growth and provide our personnel with more flexibility about where and how they work.”\n\nA spokeswoman declined to answer more questions related to the move, but the company says that “many” of its employees can choose their office location, as well as continue to work from home part time or all the time.\n\nOracle already had an office in Austin, along with numerous other cities across the U.S., including L.A., Seattle, Denver, Orlando, and Burlington, Vt.\n\nThis story is developing. Check back for more updates.', 10, 1, 8, 'GettyImages-1052770676.jpg', '', '2020-12-11'),
(17, 'Here comes the Faraday fabric', 'You don’t have to buy into 5G conspiracy theories to think that you could do with a little less radiation in your life. One way of blocking radiation is a Faraday cage, but this is usually a metal mesh of some kind, making everyday use difficult. Researchers at Drexel University have managed to create a Faraday fabric by infusing ordinary cotton with a compound called MXene — meaning your tinfoil hat is about to get a lot comfier.\n\nFaraday cages work because radiation in radio frequencies is blocked by certain metals, but because of its wavelength, the metal doesn’t even have to be solid — it can be a solid cage or flexible mesh. Many facilities are lined with materials like this to prevent outside radiation from interfering with sensitive measurements, but recently companies like Silent Pocket have integrated meshes into bags and cases that totally isolate devices from incoming signals.\n\nLet’s be frank here and say that this is definitely paranoia-adjacent. RF radiation is not harmful in the doses and frequencies we get it, and the FCC makes sure no device exceeds certain thresholds. But there’s also the possibility that your phone or laptop is naively connecting to public Wi-Fi, getting its MAC number skimmed by other devices, and otherwise interacting with the environment in a way you might not like. And honestly… with the amount of devices emitting radiation right now, who wouldn’t mind lowering their dose a little, just to be extra sure?\n\n\nThat may be much easier to do in the near future, as Yury Gogotsi and his team at the Drexel Nanomaterials Institute, of which he is director, have come up with a way to coat ordinary textile fibers in a metallic compound that makes them effective Faraday cages — but also flexible, durable and washable.\n\nThe material, which they call MXene and is more of a category than a single compound, is useful in lots of ways, and the subject of dozens of papers by the team — this is just the most recent application.\n\n“We have known for some time that MXene has the ability to block electromagnetic interference better than other materials, but this discovery shows that it can effectively adhere to fabrics and maintain its unique shielding capabilities,” said Gogotsi in a news release. You can see the fabric in action on video here.\n\n\nImage Credits: Drexel University\n\n\nMXenes are conductive metal-carbon compounds that can be fabricated into all sorts of forms: solid, liquid, even sprays. In this case it’s a liquid — a solution of tiny MXene flakes that adhere to the fabric quite easily and produce a Faraday effect, blocking 99.9% of RF radiation in tests. After sitting around for a couple years (perhaps forgotten in a lab cupboard) it kept 90% of their effectiveness, and the treated fabric can also be washed and worn safely.\n\nYou wouldn’t necessarily want to wear a whole suit of the stuff, but this would make it easier for clothing to include an RF-blocking pocket in a jacket, jeans or laptop bag that doesn’t feel out of place with the other materials. A hat (or underwear) with a layer of this fabric would be a popular item among conspiracy theorists, of course.\n\nIt’s still a ways from showing up on the rack, but Gogotsi was optimistic about its prospects for commercialization, noting that Drexel has multiple patents on the material and its uses. Other ways of infusing fabric with MXenes could lead to clothes that generate and store energy as well.\n\nYou can read more about this particular application of MXenes in the journal Carbon.', 10, 1, 9, 'mxene-faraday.jpg', '', '2020-12-11'),
(18, 'Don’t miss these breakout sessions ', 'Ready to blast off and join thousands of attendees around the world at TC Sessions: Space 2020 on December 16-17? The event, focused on space technology and dedicated to helping early-stage startups succeed in this exciting yet daunting industry, features panel discussions and interviews with the top leaders, visionaries and makers on the planet.\n\nWant to save $50? Buy your pass before Tuesday, December 15 at 11:59 p.m. (PT) to lock in the Late Registration price before rates increase.\n\nWhile you’ll find many of these brilliant experts speaking from the Main Stage, don’t miss the focused programming we have lined up for the Breakout Sessions. That’s where you’ll find our partners sharing their in-depth expertise on a range of topics. Check out these breakouts waiting to drop a galaxy’s worth of knowledge on you.\n\nWednesday, December 16\n(all times in PST)\n\n9:00 – 10:00 a.m.\n\nFast Money — SMC Space Ventures, AFWERX and Space Force Accelerators\n\nLearn how SMC Space Ventures, AFWERX and Space Force Accelerators work together to connect startups to government organizations and resources in the space industry.\n\n10:00 – 11:00 a.m.\nSponsored by SP8CEVC\n\nIntroducing the launch of the World’s First Space Technology and Human Longevity focused Rolling Fund in partnership with AngelList\n\nFireside chat with the general partners and team from SP8CEVC covering the verticals of Space Technology and Human Longevity.\n\n11:00 – 11:30 a.m.\n\nFast Money — Working with the Army to Operationalize Science for Transformational Overmatch\n\nLearn about DEVCOM Army Research Laboratory and the xTech Program of prize competitions that accelerate innovative solutions that can help solve Army challenges.\n\n11:30 – 12:30 p.m.\n\nPitch Feedback Session\n\nJoin us for a pitch feedback session open to all startups exhibiting at TC Sessions: Space 2020 moderated by TechCrunch staff.\n\n1:00 – 1:50 p.m.\nSponsored by The Aerospace Corporation\n\nUniversity Showcase — Boldly Innovating in Space, for Space (Part One)\n\nTechnologies to Go Boldly in Space — For the past half century, space exploration and technology has been earth-centric. We’ve studied the earth, orbited the earth and sent images of distant places back to earth. In the coming decade, we’ll embark on a new commitment: We’re going to space to stay. We’re committing to space commerce, space habitation and space exploration in order to not just stay in space, but to extend our human footprint into this solar system. To be successful, we need bold people and new technology to build and deploy the next generation of space capabilities. We need to capture these space opportunities, avoid potential threats and deliver on the promise of a multi-planet human race. This session showcases our partners USC and MIT, as they provide insight into their space programs. They are joined by university partners UCLA, ASU and Caltech, showcasing a range of emerging space technologies. Working with the Aerospace Corporation, these emerging capabilities can be evaluated and integrated into government space-faring missions for communicating, navigating and exploring in space with NASA, NOAA and the Air Force.\n\nThursday, December 17\n9:00 – 9:30 a.m.\n\nCislunar Space: Building a Self-Sustaining Lunar Economy\n\nWe are standing on the threshold of a post-scarcity human future. Cislunar space, the area between the Earth and the moon, holds the keys to a tremendous wealth of opportunities.\n\n9:30 – 10:00 a.m.\n\nFast Money — Advancing Space Technology with NASA SBIR\n\nLearn about the Small Business Innovation Research (SBIR) and the Small Business Technology Transfer (STTR) programs powered by NASA.\n\n10:00 – 10:30 a.m.\n\nFast Money — NAVWAR SBIR/STTR Primer: The SBIR/STTR is a robust program designed to help small businesses address government needs while promoting commercialization. This session is dedicated to providing a primer on the program with tips on getting involved and getting engaged with the Naval Information Warfare Systems Command (NAVWAR).\n\n10:30 – 11:00 a.m.\n\nFast Money — Introduction to In-Q-Tel’s investing activities in the commercial space sector: In-Q-Tel is a strategic investment firm that works with the national security community of the United States. For 20 years, In-Q-Tel has served one mission: to deliver the most sophisticated strategic technical knowledge and capabilities to the U.S. government and its allies through its unique investment model. Over the past decade, In-Q-Tel has been one of the most active investors in the commercial space sector, with a broad investment thesis that touches many aspects of the sector. This session will provide an overview of In-Q-Tel as a whole, as well as a discussion of the firm’s activities in the commercial space sector.\n\n11:00 – 11:30 a.m.\n\nFast Money — Enabling a dual-use business model with Defense Innovation Unit (DIU)\n\nLearn how you can take a part of DIU’s development of on-demand access to space, persistent satellite capabilities and broadband space data transfer\n\n11:30 – 12:30 p.m.\n\nStarburst x TechCrunch — Pitch Me to the Moon: Starburst Aerospace and TechCrunch are teaming up to launch a pitch competition like no other – Pitch Me to the Moon. Think “Startup Battlefield,” but for space. Ten promising early-stage space startups (selected by Starburst) will have an opportunity to present their innovations live to a panel of high-profile judges from across the industry.\n\n1:00 – 1:50 p.m.\nSponsored by The Aerospace Corporation\n\nUniversity Showcase — Boldly Innovating in Space, for Space (Part Two)\n\nBold Missions — For the past half century, space exploration and technology has been earth-centric. We’ve studied the earth, orbited the earth and sent images of distant places back to earth. In the coming decade, we’ll embark on a new commitment: We’re going to space to stay. We’re committing to space commerce, space habitation and space exploration in order to not just stay in space, but to extend our human footprint into this solar system. To be successful, we need bold people and new technology to build and deploy the next generation of space capabilities. We need to capture these space opportunities, avoid potential threats and deliver on the promise of a multi-planet human race. This session showcases our partners USC and MIT, as they provide insight into their space programs. They are joined by university partners UCLA, ASU and Caltech, showcasing a range of emerging space technologies. Working with the Aerospace Corporation, these emerging capabilities can be evaluated and integrated into government space-faring missions for communicating, navigating, and exploring in space with NASA, NOAA and the Air Force.', 11, 2, 9, 'Bob-and-Doug-Inside-Crew-Dragon.jpg', '', '2020-12-11'),
(19, ' the TechCrunch List ', 'Welcome to The TechCrunch List — a directory of the most active and engaged investors in the VC industry today as recommended by founders.\n\nPlease head to our frequently asked questions page to learn more about what this List is, its methodology, the qualifications to be added, how to ask for changes or corrections, and how to send feedback.\n\nIf you are a founder and want to submit a recommendation, please help us out!\n\nSome tips:\nUse the three filters (“Vertical”, “Round Type”, and “Location”) to find the most relevant investors.\n“Verticals” lists the market verticals that an investor has the most depth in based on recommendations from founders and our data. Investors often invest outside of their main areas of expertise, so think of this as a key clue to an investor’s interests and not as a limitation on their thesis. We have 22 verticals available.\n“Round Type” can be “Pre-seed / Seed”, “Early Stage” or “Growth Stage”.\n“Location” is the “home base” of an investor. It is not meant to imply the only location that a listed VC invests in. Obviously, many investors invest nationally and globally even though they live in, say, San Francisco. We list only one location per investor.\n“Portfolio” lists the founders and portfolio companies that provide evidence for an investor’s inclusion on the list. A first name with an “@” symbol indicates a direct founder recommendation. Just a company indicates a publicly verified portfolio company that we believe the investor led a check into. We list a maximum of 5 companies under this heading.\nGiven the width of the table, it is best viewed on a desktop computer.\nThe TechCrunch List was most recently updated on Monday November 30, 2020.\n\nRemember a Cardinal Rule about venture capitalists: every investor is ultimately opportunistic. Seed investors sometimes participate in growth rounds. New York investors sometimes invest in London. Consumer investors sometimes invest in enterprise startups and vice versa. The TechCrunch List shows where people generally focus, but that should never imply that they don’t do anything outside of their main interests.', 12, 3, 8, 'the-techcrunch-list-logo.png', '', '2020-12-11'),
(20, 'Cloud-gaming platforms ', 'It was an unprecedented year for [insert anything under the sun], and while plenty of tech verticals saw shifts that warped business models and shifted user habits, the gaming industry experienced plenty of new ideas in 2020. However, the loudest trends don’t always take hold as predicted.\n\nThis year, Google, Microsoft, Facebook and Amazon each leaned hard into new cloud-streaming tech that shifts game processing and computing to cloud-based servers, allowing users to play graphics-intensive content on low-powered systems or play titles without dealing with lengthy downloads.\n\nIt was heralded by executives as a tectonic shift for gaming, one that would democratize access to the next generation of titles. But in taking a closer look at the products built around this tech, it’s hard to see a future where any of these subscription services succeed.\n\nMassive year-over-year changes in gaming are rare because even if a historically unique platform launches or is unveiled, it takes time for a critical mass of developers to congregate and adopt something new — and longer for users to coalesce. As a result, even in a year where major console makers launch historically powerful hardware, massive tech giants pump cash into new cloud-streaming tech and gamers log more hours collectively than ever before, it can feel like not much has shifted.\n\nThat said, the gaming industry did push boundaries in 2020, though it’s unclear where meaningful ground was gained. The most ambitious drives were toward redesigning marketplaces in the image of video streaming networks, aiming to make a more coordinated move toward driving subscription growth and moving farther away from an industry defined for decades by one-time purchases structured around single-player storylines, one dramatically shaped by internet networking and instantaneous payments infrastructure software.\n\nToday’s products are far from dead ends for what the broader industry does with the technology.\n\nBut shifting gamers farther away from one-off purchases wasn’t even the gaming industry’s most fundamental reconsideration of the year, a space reserved for a coordinated move by the world’s richest companies to upend the console wars with an invisible competitor. It’s perhaps unsurprising that the most full-featured plays in this arena are coming from the cloud services triumvirate, with Google, Microsoft and Amazon each making significant strides in recent months.\n\nThe driving force for this change is both the maturation of virtual desktop streaming and continued developer movement toward online cross-play between gaming platforms, a trend long resisted by legacy platform owners intent on maintaining siloed network effects that pushed gamers toward buying the same consoles that their friends owned.\n\nThe cross-play trend reached a fever pitch in recent years as entities like Epic Games’  Fortnite developed massive user bases that gave developers exceptional influence over the deals they struck with platform owners.\n\nWhile a trend toward deeper cross-play planted the seeds for new corporate players in the gaming world, it has been the tech companies with the deepest pockets that have pioneered the most concerted plays to side-load a third-party candidate into the console wars.\n\nIt’s already clear to plenty of gamers that even in their nascent stages, cloud-gaming platforms aren’t meeting up to their hype and standalone efforts aren’t technologically stunning enough to make up for the apparent lack of selection in the content libraries.\n', 10, 97, 8, 'GettyImages-652553833.jpg', '', '2020-12-11');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `editeurs`
--
ALTER TABLE `editeurs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_posts_editeurs1_idx` (`idediteur`),
  ADD KEY `fk_posts_categories1_idx` (`idcategorie`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `editeurs`
--
ALTER TABLE `editeurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `posts`
--
ALTER TABLE `posts`
  ADD CONSTRAINT `id_category` FOREIGN KEY (`idcategorie`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION,
  ADD CONSTRAINT `id_editor` FOREIGN KEY (`idediteur`) REFERENCES `editeurs` (`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
