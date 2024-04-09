const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  fs.readFile(path.join(__dirname, "./products.json"), "utf8", (err, data) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: "Error reading products data" });
    }

    const productsDB = JSON.parse(data);
    return res.json(productsDB);
  });
});

// router.get("products/:id", (req, res, next) => {});

// Exporting router module
module.exports = router;
