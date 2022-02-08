const { users } = require("../data/data");

const authorizer = (req, res, next) => {
    const { id } = req.query;

    const user = users.find((user) => user.id === +id);

    if (!user) {
        res.status(401).send("<h1 style='color:red;'>Unauthorized</h1>");
    }
    req.user = user;
    next();
};

module.exports = authorizer;
