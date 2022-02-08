const path = require("path");
const express = require("express");
const res = require("express/lib/response");
const apiRoutes = require("./routers/index");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares - Son funciones que se ejecutan en un momento determinado en el ciclo de petición/respuesta dentro de un protocolo HTTP - El middleware funciona en la mitad de este ciclo - El middleware tiene acceso al objeto req, res, y a la ejecución de la función disponible en la vista que es next().
//
//

/* Para no hacer una ruta por cada archivo que queremos servir (html, css, imágenes, etc) - Static recibe un parámetro que es la ruta en donde queremos servir dichos archivos estáticos - es CLAVE! - si queremos poner un prefijo para acceder, lo hacemos anteponiendo una ruta - Si queremos que exista una ruta raíz tiene que existir un index.html en la ruta raíz*/
app.use(/* "/static", */ express.static("public"));

// Routes - Genero el endpoint anteponiendo /api
app.use("/api", apiRoutes);

/* app.get("/", (req, res) => {
    // Recibe el path o ruta desde donde queremos enviar el archivo
    res.sendFile(`${path.resolve(__dirname, "./nav-app/index.html")}`);
});
app.get("/logo.svg", (req, res) => {
    // Recibe el path o ruta desde donde queremos enviar el archivo
    res.sendFile(`${path.resolve(__dirname, "./nav-app/logo.svg")}`);
});
app.get("/styles.css", (req, res) => {
    // Recibe el path o ruta desde donde queremos enviar el archivo
    res.sendFile(`${path.resolve(__dirname, "./nav-app/styles.css")}`);
});
app.get("/browser-app.js", (req, res) => {
    // Recibe el path o ruta desde donde queremos enviar el archivo
    res.sendFile(`${path.resolve(__dirname, "./nav-app/browser-app.js")}`);
}); */

const connectedServer = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
    console.error("Error: ", error);
});

// MULTER :
/*    Es un middleware de terceros que nos ayuda a cargar archivos desde el cliente al servidor - Nos evita tener que procesarlos manualmente nosotros.


*/
