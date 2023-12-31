var database = require("../database/config");

function listarSensor(idGalinheiro) {
    var instrucao = `
    select * from sensor where fkGalin = ${idGalinheiro};
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dadosSensor(idSensor) {
    var instrucao = `
    select *, date_format(timeVrf, '%H:%i:%s') as tempo from historico 
        where fkSensor = ${idSensor}
            order by idHist desc
                limit 24;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function dadosTempoReal(idSensor) {
    var instrucao = `
    select stats as stats, date_format(timeVrf, '%H:%i:%s') as tempo from historico where fkSensor = ${idSensor} order by idHist desc limit 1;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarSensor,
    dadosSensor,
    dadosTempoReal,
}


