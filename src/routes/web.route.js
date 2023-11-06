const express = require("express");
const router = express.Router();
const product = require("../models/product.model");

router.get("/", (req, res) => {
    product.find()
        .then(items => {
            res.render("product/product", { product: items });
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).send("Something went wrong");
        });
});


router.get("/delete/:productId", (req, res) => {
    const productId = req.params.productId;
    res.render("product/delete-product", { productId });
});


router.post("/delete/:productId", (req, res) => {
    const productId = req.params.productId;

   
    product.deleteProductById(productId)
        .then(() => {
            res.redirect("/"); 
        })
        .catch(err => {
            console.error("Error:", err);
            res.status(500).send("Something went wrong");
        });
});


module.exports = router;