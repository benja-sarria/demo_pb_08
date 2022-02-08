const express = require("express");
const authorizer = require("./middlewares/authorizer");
const logger = require("./middlewares/logger");

const app = express();
const PORT = process.env.PORT || 8080;

// Middlewares - podemos organizar los middleware dentro de un array - lo mismo va para colocar los middlewares en ruta - Los middleware los ejecuta en orden
app.use([authorizer, logger]);

// Routes - El middleware se pasa luego de la ruta
app.get(
    "/",
    /* [logger, authorizer], */ (req, res) => {
        // implementado en RUTA
        const html = `<h1>Bienvenido ${req.user.name}</h1>
        <h2>HOME</h2>`;

        console.log(req.user);
        res.send(html);
    }
);

app.get("/about", (req, res) => {
    res.send("<h1>ABOUT</h1>");
});

const connectedServer = app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}`);
});

connectedServer.on("error", (error) => {
    console.error("Error: ", error);
});
