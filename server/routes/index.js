const express = require("express");
const router = express.Router();

/* GET example */
router.get("/", () => {
  res.status(200).send({ message: "Welcome to express" });
});

module.exports = router;
