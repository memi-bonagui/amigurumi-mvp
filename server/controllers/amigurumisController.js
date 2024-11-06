// import the DB pool from your config folder
const pool = require("../config/db");

const getAmigurumis = async (req, res) => {
  // First, connect with the db with the pool.query
  try {
    const [result] = await pool.query("SELECT * FROM amigurumis;");

    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to get all amigurumis",
    });
  }
};

const getAllPieces = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT amigurumis.*, pieces.piece_name, pieces.pattern FROM amigurumis LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id;"
    );

    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to get all amigurumi's pieces",
    });
  }
};

const getFullAmigurumiById = async (req, res) => {
  try {
    const { id } = req.params;
    const [amigurumi] = await pool.query(
      `SELECT * FROM amigurumis WHERE amigurumis.id = ${id};`
    );
    // const [pieces] = await pool.query(
    //   `SELECT amigurumis.*, pieces.piece_name, pieces.pattern FROM amigurumis LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id WHERE amigurumis.id = ${id};`
    // );
    const [pieces] = await pool.query(
      `SELECT * FROM pieces WHERE amigurumi_id = ${id};`
    );

    if (amigurumi.length === 0 && pieces.length === 0) {
      return res.status(404).json({
        error: "This amigurumi is not found",
      });
    }

    res.status(200).send({ ...amigurumi[0], pieces });
    // res.status(200).send({ amigurumi: amigurumi[0], pieces });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to get full amigurumi with their pieces",
    });
  }
};

const getPiecesByAmigurumiId = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      `SELECT amigurumis.*, pieces.piece_name, pieces.pattern FROM amigurumis LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id WHERE amigurumis.id = ${id};`
    );

    if (result.length === 0) {
      return res.status(404).json({
        error: "These amigurumi's pieces are not found",
      });
    }

    res.status(200).send(result);
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to get amigurumi's pieces",
    });
  }
};

const addAmigurumi = async (req, res) => {
  try {
    const { name, supplies, isCompleted, isFavorite, imageUrl } = req.body;
    await pool.query(
      `INSERT INTO amigurumis (name, supplies, isCompleted, isFavorite, imageUrl) VALUES ('${name}', '${supplies}', ${isCompleted}, ${isFavorite}, '${imageUrl}');`
    );

    if (
      !name ||
      !supplies ||
      isCompleted === undefined ||
      isFavorite === undefined ||
      !imageUrl
    ) {
      return res.status(400).json({
        error: "Failed to create amigurumi",
      });
    }

    res.status(201).send({ message: "Amigurumi added" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to add amigurumi",
    });
  }
};

const addPiece = async (req, res) => {
  try {
    const { id } = req.params;
    const { piece_name, pattern } = req.body;
    await pool.query(
      `INSERT INTO pieces (piece_name, pattern, amigurumi_id) VALUES ('${piece_name}', '${pattern}', ${id});`
    );

    if (!piece_name || !pattern) {
      return res.status(400).json({
        error: "Failed to create piece",
      });
    }

    res.status(201).send({ message: "Piece added" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to add piece",
    });
  }
};

const updateAmigurumiIsCompleted = async (req, res) => {
  try {
    const { id } = req.params;
    const { isCompleted } = req.body;
    await pool.query(
      `UPDATE amigurumis SET isCompleted = ${isCompleted} WHERE amigurumis.id = ${id}`
    );

    if (isCompleted === undefined) {
      return res.status(400).json({
        error: "Failed to update isCompleted",
      });
    }

    res
      .status(201)
      .send({ message: "Amigurumi now is completed / incompleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to update if amigurumi is completed or incompleted",
    });
  }
};

const updateAmigurumiIsFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    const { isFavorite } = req.body;
    await pool.query(
      `UPDATE amigurumis SET isFavorite = ${isFavorite} WHERE amigurumis.id = ${id}`
    );

    if (isFavorite === undefined) {
      return res.status(400).json({
        error: "Failed to update isFavorite",
      });
    }

    res
      .status(201)
      .send({ message: "Amigurumi now is favorite / not favorite" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to update if amigurumi is favorite or not",
    });
  }
};

const deleteAmigurumi = async (req, res) => {
  try {
    const { id } = req.params;
    const [result] = await pool.query(
      `DELETE FROM amigurumis WHERE amigurumis.id = ${id};`
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Failed to delete amigurumi",
      });
    }

    res.status(201).send({ message: "Amigurumi deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to delete amigurumi",
    });
  }
};

const deletePiece = async (req, res) => {
  try {
    const { id, piecesId } = req.params;
    const [result] = await pool.query(
      `DELETE FROM pieces WHERE amigurumi_id = ${id} AND id = ${piecesId};`
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({
        error: "Failed to delete amigurumi's piece",
      });
    }

    res.status(201).send({ message: "Amigurumi's piece deleted" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({
      error: "Failed to delete amigurumi's piece",
    });
  }
};

module.exports = {
  getAmigurumis,
  getAllPieces,
  getFullAmigurumiById,
  getPiecesByAmigurumiId,
  addAmigurumi,
  addPiece,
  updateAmigurumiIsCompleted,
  updateAmigurumiIsFavorite,
  deleteAmigurumi,
  deletePiece,
};
