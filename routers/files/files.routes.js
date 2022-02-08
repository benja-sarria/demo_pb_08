const express = require("express");
const multer = require("multer");

const router = express.Router();

// DiskStorage nos permite definir lugar donde querramos ir guardando - Es un objeto de configuración
const storage = multer.diskStorage({
    // debe tener dos propiedades: destination y filename
    // Destination puede recibir objeto, funcion o string - La función recibe 3 parámetros - Al ejecutarla inicia el callback
    destination: (req, file, cb) => {
        cb(null, "public/uploads");
    },
    filename: (req, file, cb) => {
        const extension = file.mimetype.split("/")[1];
        cb(null, `${file.filename}-${Date.now()}.${extension}`);
    },
});

const upload = multer({ storage });

// Para usar el middleware tenemos que colocar upload en la ruta, y tiene dos modos single o multiple - Single recibe un parámetro un string con el parámetro atributo name del formulario html
router.post("/single", upload.single("single-file"), (req, res) => {
    // el middleware multer nos permite acceder a una propiedad file en req
    const file = req.file;
    if (!file) {
        const error = new Error("You must upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.json({
        success: true,
        result: file,
    });
});

// Para subir varios archivos:
// Este middleware para varios archivos podemos fijarle un limite de archivos a subir - como segundo parámetro adicional al string (abajo le estamos indicando que tiene un máximo de 5 archivos)
router.post("/multiple", upload.array("multiple-files", 5), (req, res) => {
    // el middleware multer nos permite acceder a una propiedad file en req
    const files = req.files;
    if (!files) {
        const error = new Error("You must upload a file");
        error.httpStatusCode = 400;
        return next(error);
    }
    res.json({
        success: true,
        result: files,
    });
});

module.exports = router;
