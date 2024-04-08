const fs = require("fs");
const path = require("path");

const productsDB = JSON.parse(
  fs.readFileSync(
    path.join(__dirname, "../src/placeholder/products.json"),
    "utf8"
  )
);

router.get("/products", (req, res, next) => {
  return res.json(productsDB);
});

router.get("products/:id", (req, res, next) => {});
