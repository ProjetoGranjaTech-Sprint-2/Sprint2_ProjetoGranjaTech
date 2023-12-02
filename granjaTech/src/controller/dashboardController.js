var dashboardModel = require("../models/dashboardModel.js");

function inserirCliente(req, res) {
    var fkUsuario = req.body.idUsuario;

    dashboardModel.inserirCliente(fkUsuario)
        .then((resultado) => {
            console.log(resultado)
            if (resultado) {
                console.log('resultado == ', resultado);

                res.status(200).json(resultado);
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

function excluirTupla(req, res) {
    var fkUsuario = req.body.idUsuario;
    var idGalin = req.body.idGalinheiro;
    console.log('chegou aqui no controllers: ', idGalin)

    dashboardModel.excluirTupla(idGalin)
        .then((resultado) => {
            console.log(resultado)
            if (resultado) {
                console.log('resultado == ', resultado);

                res.status(200).json(resultado);
            } else {
                console.log('[ERRO] ==', resultado)
            }
        })
        // res.json(resultado)
        .catch((erro) => {
            console.error(`Erro ao excluir o Idgalin:${idGalin} do ${fkUsuario}. => ${erro}`);
            res.status(500).json({ erro: "Erro interno ao excluir o ${fkUsuario}" });
        });
};



function selecionarGalpao(req, res) {
    var fkUsuario = req.body.idUsuario;

    dashboardModel.selecionarGalpao(fkUsuario)
        .then((result) => {
            if (result) {

                console.log('resultado:', result);
                res.status(200).json(result);

            } else console.log('[ERRO] no Select', result)
        })
        .catch((erro) => {
            console.error(`Erro ao chamar os galpões do usuário ${fkUsuario}. => ${erro}`);
            res.status(500).json({ erro: "Erro interno ao chamar os galpões" });
        })
}

module.exports = {
    inserirCliente,
    excluirTupla,
    selecionarGalpao
}