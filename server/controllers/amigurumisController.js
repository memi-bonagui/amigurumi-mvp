// import the DB pool from your config folder
const pool = require("../config/db");

// example controller function
const getAmigurumis = async (req, res) => {
  // First, connect with the db with the pool.query
  const [result] = await pool.query("SELECT * FROM amigurumis;");
  res.status(200).send(result);
};

const getAllPieces = async (req, res) => {
  const [result] = await pool.query(
    "SELECT amigurumis.*, pieces.piece_name, pieces.pattern FROM amigurumis LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id;"
  );
  res.status(200).send(result);
};

// const getAmigurumiById = async (req, res) => {
//   console.log("REQ.PARAMS", req);
//   const { id } = req.params;
//   const [result] = await pool.query(
//     `SELECT * FROM amigurumis WHERE amigurumis.id = ${id};`
//   );
//   res.status(200).send(result);
// };

const getFullAmigurumiById = async (req, res) => {
  console.log("REQ.PARAMS", req);
  const { id } = req.params;
  const [amigurumi] = await pool.query(
    `SELECT * FROM amigurumis WHERE amigurumis.id = ${id};`
  );
  const [pieces] = await pool.query(
    `SELECT amigurumis.*, pieces.piece_name, pieces.pattern FROM amigurumis LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id WHERE amigurumis.id = ${id};`
  );
  res.status(200).send({ ...amigurumi[0], pieces });
  // res.status(200).send({ amigurumi: amigurumi[0], pieces });
};

const getPiecesByAmigurumiId = async (req, res) => {
  console.log("REQ.PARAMS", req);
  const { id } = req.params;
  const [result] = await pool.query(
    `SELECT amigurumis.*, pieces.piece_name, pieces.pattern FROM amigurumis LEFT JOIN pieces ON amigurumis.id = pieces.amigurumi_id WHERE amigurumis.id = ${id};`
  );
  res.status(200).send(result);
};

const addAmigurumi = async (req, res) => {
  // const { id } = req.params;
  console.log("REQ.BODY", req.body);
  const { name, supplies, isCompleted, isFavorite, imageUrl } = req.body;

  await pool.query(
    `INSERT INTO amigurumis (name, supplies, isCompleted, isFavorite, imageUrl) VALUES ('${name}', '${supplies}', ${isCompleted}, ${isFavorite}, '${imageUrl}');`
  );
  res.status(201).send({ message: "Amigurumi added" });
};

const addPiece = async (req, res) => {
  const { id } = req.params;
  console.log("REQ.BODY", req.body);
  const { piece_name, pattern } = req.body;
  await pool.query(
    `INSERT INTO pieces (piece_name, pattern, amigurumi_id) VALUES ('${piece_name}', '${pattern}', ${id});`
  );
  res.status(201).send({ message: "Piece added" });
};

const updateAmigurumiIsCompleted = async (req, res) => {
  const { id } = req.params;
  console.log("REQ.BODY", req.body);
  const { isCompleted } = req.body;
  await pool.query(
    `UPDATE amigurumis SET isCompleted = ${isCompleted} WHERE amigurumis.id = ${id}`
  );
  res.status(201).send({ message: "Amigurumi now is completed / incompleted" });
};

module.exports = {
  getAmigurumis,
  getAllPieces,
  getFullAmigurumiById,
  getPiecesByAmigurumiId,
  addAmigurumi,
  addPiece,
  updateAmigurumiIsCompleted,
};
