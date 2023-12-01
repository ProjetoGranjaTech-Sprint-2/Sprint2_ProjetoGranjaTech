var database = require("../database/config");

function inserirCliente(fkUsuario) {
    var instrucao = `
    INSERT INTO galinheiro(fkCliente) VALUES (${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function chamarGalpão(fkUsuario) {
    var instrucao = `
    SELECT idGalinheiro FROM galinheiro WHERE fkCliente = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    inserirCliente,
    chamarGalpão
}


