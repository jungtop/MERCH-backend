const express = require("express");
const router = express.Router();

const {isSignedIn,isAuthenticated, isAdmin} = require("../controllers/auth");
const {getProductById, createProduct,getProduct,photo,updateProduct,deleteProduct,getAllProducts,getAllUniqueCategories} = require("../controllers/product");
const {getUserById} = require("../controllers/user");

//all of params
router.param("userId",getUserById);
router.param("productId",getProductById);

//all of actual routes


//create route
router.post("/product/create/:userId",isSignedIn,isAuthenticated, isAdmin,createProduct)

//read routes
router.get("/product/:productId",getProduct);
router.get("/product/photo/:productId",photo);

//delete route
router.delete("/product/:productId/:userId",isSignedIn,isAdmin,isAuthenticated,deleteProduct);

//update route
router.put("/product/:productId/:userId",isSignedIn,isAdmin,isAuthenticated,updateProduct);

//listing route
router.get("/products",getAllProducts);

router.get("/products/categories", getAllUniqueCategories);

module.exports =router;