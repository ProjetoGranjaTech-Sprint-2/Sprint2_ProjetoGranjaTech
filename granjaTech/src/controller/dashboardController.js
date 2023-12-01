var dashboardModel = require("../models/dashboardModel.js");

function inserirCliente(req, res) {
    var fkUsuario = req.body.idUsuario;

    dashboardModel.inserirCliente(fkUsuario)
        .then((resultado) => {
            console.log(resultado)
            if (resultado) {
                console.log('resultado == ', resultado);
                
                dashboardModel.chamarGalpão(fkUsuario)
                .then((result) => {
                    res.status(200).json(result);
                })
                .catch((erro) => {
                    console.error(`Erro ao chamar os galpões do usuário ${fkUsuario}. => ${erro}`);
                    res.status(500).json({ erro: "Erro interno ao chamar os galpões" });    
                })
            } else {
                console.log('[ERRO] ==', resultado)
            }
        })
        // res.json(resultado)
        .catch((erro) => {
            console.error(`Erro ao inserir o ${fkUsuario} aos galpões. => ${erro}`);
            res.status(500).json({ erro: "Erro interno ao inserir o ${fkUsuario}" });
        });
};

module.exports = {
    inserirCliente,
}