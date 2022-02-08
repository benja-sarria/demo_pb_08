const express = require("express");
const productsRoutes = require("./products/products.routes");
const userRoutes = require("./users/users.routes");
const fileRoutes = require("./files/files.routes");

const router = express.Router();

// Middlewares
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Routes
// Utilizo el método use para aplicar las rutas, así anteponemos el prefijo /products a todas las rutas que están en las routes
router.use("/products", productsRoutes);
// Lo mismo hacemos para los usuarios  - /users
router.use("/users", userRoutes);
// Lo mismo hacemos con los files
router.use("/files", fileRoutes);

module.exports = router;

/* 
Este index se encarga de indexar todas las rutas que quiera generar, acomodando en carpetas según corresponda


*/
