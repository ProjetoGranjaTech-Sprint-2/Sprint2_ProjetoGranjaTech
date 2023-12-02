var database = require("../database/config");

function inserirCliente(fkUsuario) {
    var instrucao = `
    INSERT INTO galinheiro(fkCliente) VALUES (${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function excluirTupla(idGalinheiro) {
    var instrucao = `
    DELETE FROM galinheiro WHERE idGalinheiro = ${idGalinheiro};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function selecionarGalpao(fkUsuario) {
    var instrucao = `
    SELECT idGalinheiro FROM galinheiro WHERE fkCliente = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    inserirCliente,
    excluirTupla,
    selecionarGalpao
}


