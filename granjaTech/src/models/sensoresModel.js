var database = require("../database/config");

function listarSensor(idGalinheiro) {
    var instrucao = `
    select * from sensor where fkGalin = ${idGalinheiro};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dadosSensor() {
    var instrucao = `
    select * from historico;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dadosTempoReal() {
    var instrucao = `
    select * from historico order by idHist desc;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarSensor,
    dadosSensor,
    dadosTempoReal,
}


