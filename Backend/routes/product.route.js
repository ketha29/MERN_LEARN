import express from "express";
import { createProduct, deleteProduct, getProducts, updataProduct } from "../controllers/product.controller.js";

const router = express.Router();

/*
* Sets up a HTTP route at /
* When a request is sent to http://localhost:8000/, it responds with "Server ready".
*/
// router.get("/", (req, res) => {
//     res.send("Server ready");
// })

router.get("/", getProducts);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);
router.put("/:id", updataProduct);

export default router;