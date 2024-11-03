
-- (Re)create the tables

DROP TABLE IF EXISTS amigurumis;
DROP TABLE IF EXISTS pieces;

CREATE TABLE `pieces`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pieceName` VARCHAR(255) NOT NULL,
    `pattern` VARCHAR(255) NOT NULL,
    `pieceImageUrl` VARCHAR(255) NOT NULL,
    `pieces_amigurumis` INT UNSIGNED NOT NULL
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
    `pieces` ADD CONSTRAINT `pieces_pieces_amigurumis_foreign` FOREIGN KEY(`pieces_amigurumis`) REFERENCES `amigurumis`(`id`);
-- Insert some sample data

-- INSERT INTO students (first_name, last_name)
-- VALUES
--     ("Student1First", "Student1Last"),
--     ("Student2First", "Student2Last");