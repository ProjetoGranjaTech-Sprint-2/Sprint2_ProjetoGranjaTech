var sensoresModel = require("../models/sensoresModel");

function listarSensor(req, res) {
    sensoresModel.listarSensor()
    .then((resultado) => {
        res.status(200).json(resultado);
    })
        // res.json(resultado)
        .catch((erro) => {
            console.error(`Erro ao listar sensores: ${erro}`);
            res.status(500).json({ erro: "Erro interno ao listar sensores" });
        });
    };

module.exports = {
    listarSensor,
}

