var database = require("../database/config");

function chamarGalpão(fkUsuario) {
    var instrucao = `
    INSERT INTO galinheiro(fkCliente) VALUES (${fkUsuario});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


module.exports = {
    chamarGalpão,
}


