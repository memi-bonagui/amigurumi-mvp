const express = require("express");
const router = express.Router();

// any route in this file is pre-pended with /api/customers
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

console.log("effwfsfat");

module.exports = router;
