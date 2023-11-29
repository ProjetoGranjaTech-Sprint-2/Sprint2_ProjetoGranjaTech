var database = require("../database/config")

function cadastrar(nome_empresarial, nome_fantasia, cnpj, email, senha, telefone, cep, uf, cidade, bairro, rua, numero) {
    var instrucao = `
        INSERT INTO cadastro_cliente (nomeEmpresarial, nomeFantasia, cnpj, email, senha, telefone, cep, estado, cidade, bairro, rua, numero) VALUES ('${nome_empresarial}', '${nome_fantasia}', '${cnpj}', '${email}', '${senha}', '${telefone}', '${cep}', '${uf}', "${cidade}", "${bairro}", "${rua}", ${numero});
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao)
    // .then(result => {
    //     autenticar(email, senha).then(function (id){
    //         return inserirPerfil(id[0].id, genero)

    //     })
    //     // const idUsuario = result.insertId;
    //     // console.log(`chegou aqui ${idUsuario}, ${genero}`)
    // })
}

function autenticar(email, senha) {
    var instrucao = `
        SELECT idCliente, nomeEmpresarial, email, FROM cadastro_cliente WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    cadastrar,
    autenticar
};
