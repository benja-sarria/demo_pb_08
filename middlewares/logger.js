// Middlewares - Son funciones que se ejecutan en un momento determinado en el ciclo de petición/respuesta dentro de un protocolo HTTP - El middleware funciona en la mitad de este ciclo - El middleware tiene acceso al objeto req, res, y a la ejecución de la función disponible en la vista que es next(). El middleware nos evita tener que copiar lógica que queremos ejecutar en cada ruta - Los middlewares son FUNCIONES - Los middlewares se pueden implementar a nivel de aplicación, ruta, o router -- (en ruta depende de cuántas rutas vamos a querer tener) -- A nivel de aplicación usamos app.use(middleware) - los middlewares tenemos que colocarlos antes de las rutas

const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const year = new Date().getFullYear();
    console.log(`[${method}] => ${url}`, year);
    // tiene que estar siempre para poder ejecutar la siguiente función en la lista
    next();
};

module.exports = logger;
