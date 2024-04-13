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

router.delete("/:id", (req, res) => {
  const productId = req.params.id;

  fs.readFile(
    path.join(__dirname, "products.json"),
    "utf8",
    (readErr, data) => {
      if (readErr) {
        console.error(readErr);
        return res.status(500).json({ message: "Error reading products data" });
      }

      let products = JSON.parse(data);
      const productIndex = products.findIndex((p) => p.id === productId);

      if (productIndex === -1) {
        return res.status(404).json({ message: "Product not found" });
      }

      products.splice(productIndex, 1);

      fs.writeFile(
        path.join(__dirname, "products.json"),
        JSON.stringify(products, null, 2),
        (writeErr) => {
          if (writeErr) {
            console.error(writeErr);
            return res
              .status(500)
              .json({ message: "Error writing products data" });
          }

          res.status(200).json({ message: "Product deleted successfully" });
        }
      );
    }
  );
});

// router.delete("/:id", (req, res) => {
//   const productIndex = getProductsIndex(req.params.id);

//   if (productIndex === -1) return res.status(404).json({});

//   products.splice(productIndex, 1);

//   fs.writeFile(
//     path.join(__dirname, "products.json"),
//     JSON.stringify(products, null, 2),
//     (err) => {
//       if (err) {
//         console.error(err);
//         return res.status(500).json({ message: "Error writing products data" });
//       }

//       res.json(products);
//     }
//   );
// });
// router.get("products/:id", (req, res, next) => {});

// Exporting router module
module.exports = router;
