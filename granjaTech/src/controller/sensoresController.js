var sensoresModel = require("../models/sensoresModel");

function listarSensor(req, res) {
    var idGalinheiro = req.params.idGalinheiro;

    if (idGalinheiro == undefined) {
        res.status(400).send ("Seu galinheiro não está definido");
    }
    sensoresModel.listarSensor(idGalinheiro)
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        // res.json(resultado)
        .catch((erro) => {
            console.error(`Erro ao listar sensores: ${erro}`);
            res.status(500).json({ erro: "Erro interno ao listar sensores" });
        });
};

function dadosSensor(req, res) {
    sensoresModel.dadosSensor()
        .then((resultado) => {
            res.status(200).json(resultado);
        })
        .catch((erro) => {
            console.error(`Erro ao ler os valores sensores: ${erro}`);
            res.status(500).json({ erro: "Erro interno ao ler os sensores" });
        })
}

function dadosTempoReal(req, res) {

    console.log(`Recuperando medidas em tempo real`);

    sensoresModel.dadosTempoReal().then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }   
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


module.exports = {
    listarSensor,
    dadosSensor,
    dadosTempoReal,
}

