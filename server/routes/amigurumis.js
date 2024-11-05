const express = require("express");
const router = express.Router();

const amigurumisController = require("../controllers/amigurumisController");
// any route in this file is pre-pended with /api/amigurumis
/* GET amigurumis listing. */
router.get("/", amigurumisController.getAmigurumis);

router.get("/pieces", amigurumisController.getAllPieces);

// router.get("/:id", amigurumisController.getAmigurumiById);

router.get("/:id", amigurumisController.getFullAmigurumiById);

router.get("/:id/pieces", amigurumisController.getPiecesByAmigurumiId);

router.post("/", amigurumisController.addAmigurumi);

router.post("/:id/pieces", amigurumisController.addPiece);

router.patch("/:id", amigurumisController.updateAmigurumiIsCompleted);

module.exports = router;
