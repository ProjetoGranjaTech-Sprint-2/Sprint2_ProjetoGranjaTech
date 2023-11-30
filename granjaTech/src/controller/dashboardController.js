var dashboardModel = require("../models/dashboardModel.js");

function chamarGalpão(req, res) {
    var fkUsuario = req.body.idUsuario;

    dashboardModel.chamarGalpão(fkUsuario)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        // res.json(resultado)
        .catch((erro) => {
            console.error(`Erro ao chamar os galpões do usuário ${fkUsuario}. => ${erro}`);
            res.status(500).json({ erro: "Erro interno ao listar sensores" });
        });
};

module.exports = {
    chamarGalpão,
}