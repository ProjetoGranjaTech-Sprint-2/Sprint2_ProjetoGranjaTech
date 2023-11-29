var database = require("../database/config");

function listarSensor() {
    var instrucao = `
    select * from sensor;
    `
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    listarSensor,
}


