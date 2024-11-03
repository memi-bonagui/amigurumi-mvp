CREATE TABLE `pieces`(
    `id` INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `pieceName` VARCHAR(255) NOT NULL,
    `pattern` VARCHAR(255) NOT NULL,
    `pieceImageUrl` VARCHAR(255) NOT NULL,
    `pieces_amigurumis` INT NOT NULL
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