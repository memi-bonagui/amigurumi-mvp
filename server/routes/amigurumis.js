const express = require("express");
const router = express.Router();

const amigurumisController = require("../controllers/amigurumisController");
// any route in this file is pre-pended with /api/amigurumis
/* GET amigurumis listing. */
router.get("/", amigurumisController.getAmigurumis);
router.get("/pieces", amigurumisController.getAllPieces);

router.get("/:id", amigurumisController.getFullAmigurumiById);

router.get("/:id/pieces", amigurumisController.getPiecesByAmigurumiId);

router.post("/", amigurumisController.addAmigurumi);

router.post("/:id/pieces", amigurumisController.addPiece);

router.patch(
  "/:id/isCompleted",
  amigurumisController.updateAmigurumiIsCompleted
);

router.patch("/:id/isFavorite", amigurumisController.updateAmigurumiIsFavorite); // change route

router.delete("/:id", amigurumisController.deleteAmigurumi);

router.delete("/:id/pieces/:piecesId", amigurumisController.deletePiece);

module.exports = router;
