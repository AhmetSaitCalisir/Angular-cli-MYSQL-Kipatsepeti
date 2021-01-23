const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("BEN Kitaplar");
});

module.exports = router;
