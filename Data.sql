-- ============================================================
-- Script de datos de prueba para el esquema taxonomy
-- Mínimo 50 registros por entidad principal
-- ============================================================

SET search_path TO taxonomy;

-- ============================================================
-- 1. Datos base: Rank
-- ============================================================

INSERT INTO rank (rank_name, rank_order) VALUES
('Domain', 1),
('Kingdom', 2),
('Phylum', 3),
('Class', 4),
('Order', 5),
('Family', 6),
('Genus', 7),
('Species', 8);

-- ============================================================
-- 2. Datos base: Status
-- ============================================================

INSERT INTO status (status_name, description) VALUES
('Active', 'Valid and currently accepted taxonomic record.'),
('Inactive', 'Record not currently active in the system.'),
('Under Review', 'Taxonomic record pending validation.'),
('Accepted', 'Accepted taxonomic name.'),
('Deprecated', 'Taxonomic record kept for historical purposes.'),
('Not Evaluated', 'Taxon has not been evaluated.'),
('Least Concern', 'Taxon with low conservation concern.'),
('Vulnerable', 'Taxon facing a high risk of endangerment.'),
('Endangered', 'Taxon facing a very high risk of extinction.'),
('Critically Endangered', 'Taxon facing an extremely high risk of extinction.');

-- ============================================================
-- 3. Datos de prueba: Taxon
-- 50 registros
-- ============================================================

INSERT INTO taxon (id_rank, id_status, parent_id, scientific_name) VALUES
(2, 1, NULL, 'Animalia'),
(3, 1, 1, 'Chordata'),
(4, 1, 2, 'Mammalia'),
(5, 1, 3, 'Carnivora'),
(6, 1, 4, 'Felidae'),
(7, 1, 5, 'Panthera'),
(8, 7, 6, 'Panthera leo'),
(8, 8, 6, 'Panthera tigris'),
(8, 7, 6, 'Panthera pardus'),
(8, 6, 6, 'Panthera onca'),

(6, 1, 4, 'Canidae'),
(7, 1, 11, 'Canis'),
(8, 7, 12, 'Canis lupus'),
(8, 7, 12, 'Canis latrans'),
(8, 6, 12, 'Canis aureus'),

(7, 1, 11, 'Vulpes'),
(8, 7, 16, 'Vulpes vulpes'),
(8, 6, 16, 'Vulpes lagopus'),

(5, 1, 3, 'Primates'),
(6, 1, 19, 'Hominidae'),
(7, 1, 20, 'Homo'),
(8, 1, 21, 'Homo sapiens'),
(7, 1, 20, 'Pan'),
(8, 9, 23, 'Pan troglodytes'),
(8, 9, 23, 'Pan paniscus'),

(6, 1, 19, 'Cercopithecidae'),
(7, 1, 26, 'Macaca'),
(8, 7, 27, 'Macaca mulatta'),

(5, 1, 3, 'Artiodactyla'),
(6, 1, 29, 'Cervidae'),
(7, 1, 30, 'Cervus'),
(8, 7, 31, 'Cervus elaphus'),
(7, 1, 30, 'Odocoileus'),
(8, 7, 33, 'Odocoileus virginianus'),

(6, 1, 29, 'Bovidae'),
(7, 1, 35, 'Bos'),
(8, 1, 36, 'Bos taurus'),
(7, 1, 35, 'Ovis'),
(8, 1, 38, 'Ovis aries'),
(7, 1, 35, 'Capra'),
(8, 1, 40, 'Capra hircus'),

(5, 1, 3, 'Perissodactyla'),
(6, 1, 42, 'Equidae'),
(7, 1, 43, 'Equus'),
(8, 1, 44, 'Equus caballus'),
(8, 8, 44, 'Equus zebra'),

(5, 1, 3, 'Rodentia'),
(6, 1, 47, 'Muridae'),
(7, 1, 48, 'Mus'),
(8, 1, 49, 'Mus musculus');

-- ============================================================
-- 4. Datos de prueba: CommonName
-- 50 registros
-- ============================================================

INSERT INTO common_name (id_taxon, common_name, description) VALUES
(1, 'Animals', 'Common English name for kingdom Animalia.'),
(2, 'Chordates', 'Common name for animals with a notochord.'),
(3, 'Mammals', 'Common name for class Mammalia.'),
(4, 'Carnivores', 'Common name for order Carnivora.'),
(5, 'Cats', 'Common name for family Felidae.'),
(6, 'Big cats', 'Common name for genus Panthera.'),
(7, 'Lion', 'Common English name.'),
(8, 'Tiger', 'Common English name.'),
(9, 'Leopard', 'Common English name.'),
(10, 'Jaguar', 'Common English name.'),

(11, 'Dogs', 'Common name for family Canidae.'),
(12, 'Wolves and dogs', 'Common name for genus Canis.'),
(13, 'Gray wolf', 'Common English name.'),
(14, 'Coyote', 'Common English name.'),
(15, 'Golden jackal', 'Common English name.'),

(16, 'Foxes', 'Common name for genus Vulpes.'),
(17, 'Red fox', 'Common English name.'),
(18, 'Arctic fox', 'Common English name.'),

(19, 'Primates', 'Common name for order Primates.'),
(20, 'Great apes', 'Common name for family Hominidae.'),
(21, 'Humans', 'Common name for genus Homo.'),
(22, 'Human', 'Common English name.'),
(23, 'Chimpanzees', 'Common name for genus Pan.'),
(24, 'Common chimpanzee', 'Common English name.'),
(25, 'Bonobo', 'Common English name.'),

(26, 'Old World monkeys', 'Common name for family Cercopithecidae.'),
(27, 'Macaques', 'Common name for genus Macaca.'),
(28, 'Rhesus macaque', 'Common English name.'),

(29, 'Even-toed ungulates', 'Common name for order Artiodactyla.'),
(30, 'Deer', 'Common name for family Cervidae.'),
(31, 'Red deer genus', 'Common descriptive name.'),
(32, 'Red deer', 'Common English name.'),
(33, 'New World deer', 'Common descriptive name.'),
(34, 'White-tailed deer', 'Common English name.'),

(35, 'Bovids', 'Common name for family Bovidae.'),
(36, 'Cattle genus', 'Common descriptive name.'),
(37, 'Domestic cattle', 'Common English name.'),
(38, 'Sheep genus', 'Common descriptive name.'),
(39, 'Domestic sheep', 'Common English name.'),
(40, 'Goat genus', 'Common descriptive name.'),
(41, 'Domestic goat', 'Common English name.'),

(42, 'Odd-toed ungulates', 'Common name for order Perissodactyla.'),
(43, 'Horses', 'Common name for family Equidae.'),
(44, 'Horse genus', 'Common descriptive name.'),
(45, 'Domestic horse', 'Common English name.'),
(46, 'Zebra', 'Common English name.'),

(47, 'Rodents', 'Common name for order Rodentia.'),
(48, 'Mice and rats', 'Common name for family Muridae.'),
(49, 'Mouse genus', 'Common descriptive name.'),
(50, 'House mouse', 'Common English name.');

-- ============================================================
-- 5. Datos de prueba: TaxonSynonym
-- 50 registros
-- ============================================================

INSERT INTO taxon_synonym (id_taxon, synonym_name, synonym_status, description) VALUES
(1, 'Metazoa', 'Historical', 'Historical synonym or broader biological grouping.'),
(2, 'Chordata sensu lato', 'Alternative', 'Alternative usage in some classifications.'),
(3, 'Mammalia sensu Linnaeus', 'Historical', 'Historical reference to class Mammalia.'),
(4, 'Ferae', 'Historical', 'Older grouping associated with carnivorous mammals.'),
(5, 'Felinae lato sensu', 'Alternative', 'Alternative broad usage.'),
(6, 'Leo group', 'Informal', 'Informal grouping for large cats.'),
(7, 'Felis leo', 'Deprecated', 'Older synonym for Panthera leo.'),
(8, 'Felis tigris', 'Deprecated', 'Older synonym for Panthera tigris.'),
(9, 'Felis pardus', 'Deprecated', 'Older synonym for Panthera pardus.'),
(10, 'Felis onca', 'Deprecated', 'Older synonym for Panthera onca.'),

(11, 'Caninae lato sensu', 'Alternative', 'Alternative broad usage.'),
(12, 'Canis group', 'Informal', 'Informal grouping for Canis species.'),
(13, 'Canis lupus occidentalis group', 'Alternative', 'Alternative descriptive synonym.'),
(14, 'Canis ochropus', 'Deprecated', 'Historical synonym associated with coyote.'),
(15, 'Canis anthus', 'Deprecated', 'Historical or debated synonym.'),

(16, 'Fox group', 'Informal', 'Informal synonym for Vulpes grouping.'),
(17, 'Canis vulpes', 'Deprecated', 'Older synonym for red fox.'),
(18, 'Alopex lagopus', 'Deprecated', 'Older synonym for arctic fox.'),

(19, 'Primates sensu lato', 'Alternative', 'Alternative broad usage.'),
(20, 'Pongidae', 'Deprecated', 'Older family-level classification.'),
(21, 'Homo group', 'Informal', 'Informal grouping for human relatives.'),
(22, 'Homo sapiens sapiens', 'Alternative', 'Subspecific naming sometimes used.'),
(23, 'Chimpanzee group', 'Informal', 'Informal grouping for Pan species.'),
(24, 'Anthropopithecus troglodytes', 'Deprecated', 'Historical synonym.'),
(25, 'Pan satyrus paniscus', 'Deprecated', 'Historical synonym.'),

(26, 'Cercopithecidae sensu lato', 'Alternative', 'Alternative broad usage.'),
(27, 'Macaque group', 'Informal', 'Informal grouping for Macaca species.'),
(28, 'Macaca rhesus', 'Deprecated', 'Older synonym for Macaca mulatta.'),

(29, 'Cetartiodactyla excluding cetaceans', 'Alternative', 'Alternative classification reference.'),
(30, 'Cervinae lato sensu', 'Alternative', 'Broad usage for deer grouping.'),
(31, 'Elaphus group', 'Informal', 'Informal grouping for red deer relatives.'),
(32, 'Cervus canadensis elaphus', 'Alternative', 'Alternative or historical classification.'),
(33, 'Odocoileus group', 'Informal', 'Informal grouping for New World deer.'),
(34, 'Dama virginiana', 'Deprecated', 'Historical synonym.'),

(35, 'Bovinae lato sensu', 'Alternative', 'Broad bovid grouping.'),
(36, 'Cattle group', 'Informal', 'Informal grouping for Bos species.'),
(37, 'Bos primigenius taurus', 'Alternative', 'Alternative naming for domestic cattle.'),
(38, 'Sheep group', 'Informal', 'Informal grouping for Ovis species.'),
(39, 'Ovis orientalis aries', 'Alternative', 'Alternative naming for domestic sheep.'),
(40, 'Goat group', 'Informal', 'Informal grouping for Capra species.'),
(41, 'Capra aegagrus hircus', 'Alternative', 'Alternative naming for domestic goat.'),

(42, 'Mesaxonia', 'Historical', 'Historical grouping.'),
(43, 'Equids', 'Alternative', 'Alternative common scientific grouping.'),
(44, 'Horse group', 'Informal', 'Informal grouping for Equus species.'),
(45, 'Equus ferus caballus', 'Alternative', 'Alternative naming for domestic horse.'),
(46, 'Hippotigris zebra', 'Deprecated', 'Historical synonym.'),

(47, 'Glires rodents', 'Alternative', 'Alternative broader biological grouping.'),
(48, 'Murinae lato sensu', 'Alternative', 'Broad murid grouping.'),
(49, 'Mouse group', 'Informal', 'Informal grouping for Mus species.'),
(50, 'Mus domesticus', 'Alternative', 'Alternative naming for house mouse.');

-- ============================================================
-- 6. Datos de prueba: Reference
-- 50 registros
-- Nota: El detalle documental se guardaría en NoSQL.
-- ============================================================

INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;

INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;

INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;

INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;

INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;
INSERT INTO reference DEFAULT VALUES;

-- ============================================================
-- 7. Datos de prueba: TaxonReference
-- 50 registros
-- ============================================================

INSERT INTO taxon_reference (id_taxon, id_reference) VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 4),
(5, 5),
(6, 6),
(7, 7),
(8, 8),
(9, 9),
(10, 10),

(11, 11),
(12, 12),
(13, 13),
(14, 14),
(15, 15),
(16, 16),
(17, 17),
(18, 18),
(19, 19),
(20, 20),

(21, 21),
(22, 22),
(23, 23),
(24, 24),
(25, 25),
(26, 26),
(27, 27),
(28, 28),
(29, 29),
(30, 30),

(31, 31),
(32, 32),
(33, 33),
(34, 34),
(35, 35),
(36, 36),
(37, 37),
(38, 38),
(39, 39),
(40, 40),

(41, 41),
(42, 42),
(43, 43),
(44, 44),
(45, 45),
(46, 46),
(47, 47),
(48, 48),
(49, 49),
(50, 50);
