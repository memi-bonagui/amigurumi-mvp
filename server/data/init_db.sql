
-- (Re)create the tables
use my_mvp;

DROP TABLE IF EXISTS pieces;
DROP TABLE IF EXISTS amigurumis;

CREATE TABLE `pieces`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `piece_name` VARCHAR(255) NOT NULL,
    `pattern` VARCHAR(10000) NOT NULL,
    `piece_imageUrl` VARCHAR(255) NULL,
    `amigurumi_id` INT UNSIGNED NOT NULL
);
CREATE TABLE `amigurumis`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `name` VARCHAR(255) NOT NULL,
    `supplies` VARCHAR(255) NOT NULL,
    `isCompleted` BOOLEAN NOT NULL,
    `isFavorite` BOOLEAN NOT NULL,
    `imageUrl` VARCHAR(255) NOT NULL
);
ALTER TABLE
    `pieces` ADD CONSTRAINT `pieces_amigurumi_id_foreign` FOREIGN KEY(`amigurumi_id`) REFERENCES `amigurumis`(`id`);

-- Insert some sample data

INSERT INTO amigurumis (name, supplies, isCompleted, isFavorite, imageUrl)
VALUES
    ("Heart", "3mm crochet hook; stuffing; 
middle sized yarn; yarn color of your choice", true, false, "https://lanasyovillos.com/wp-content/uploads/2021/07/crochet-heart-free-pattern-amigurumi-corazon-gratis-1.jpg"),
    ("Magic Ring", "3mm crochet hook; 
middle sized yarn; yarn color of your choice", false, false, "https://www.supergurumi.com/wp-content/uploads/2022/01/Crochet-Magic-Ring.jpg");

INSERT INTO pieces (piece_name, pattern, amigurumi_id) VALUES
  ('Heart Bump', 'Rnd 1: 7 sc in a magic ring (7 sts); Rnd 2: Inc in each st around (14 sts); Rnd 3: Sc 1, inc; rep 7 times (21 sts); Rnds 4 to 6: Sc around (21 sts); Fasten off. Leave a long yarn tail about 20cm in length. Make a second bump but do not fasten off.', 1), 
  ('Heart', 'Rnd 7: Sc around first bump (21 sts); Sc around second bump (21 sts) (42 sts); Rnds 8 to 10: Sc around (42 sts); Rnd 11: Sc 4, dec; rep 7 times (35 sts); Rnd 12: Sc around (35 sts); Rnd 13: Sc 3, dec; rep 7 times (28 sts); Rnd 14: Sc around (28 sts)
Rnd 15: Sc 2, dec; rep 7 times (21 sts); Rnd 16: Sc around (21 sts); Rnd 17: Sc 1, dec; rep 7 times (14 sts); Rnd 18: Sc around (14 sts); Rnd 19: Dec 7 times (7 sts)', 1),
  ('Magic Ring', 'It usually have 6 Sc. Create the loop with your left hand and make the first chain stitch. Then proceed to make 5 sc more in the magic ring', 2);

SELECT amigurumis.*, pieces.piece_name, pieces.pattern 
FROM amigurumis
LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id;

