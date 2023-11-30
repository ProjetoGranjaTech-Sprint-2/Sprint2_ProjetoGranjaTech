var usuarioModel = require("../models/usuarioModel");

function cadastrar(req, res) {
    var nome_empresarial = req.body.nome_empresarialServer;
    var nome_fantasia = req.body.nome_fantasiaServer;
    var cnpj = req.body.cnpjServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var telefone = req.body.telefoneServer;
    var cep = req.body.cepServer;
    var uf = req.body.ufServer;
    var cidade = req.body.cidadeServer;
    var bairro = req.body.bairroServer;
    var rua = req.body.ruaServer;
    var numero = req.body.numeroServer;


    if (nome_empresarial == undefined) res.status(400).send("Seu nome_empresarial está undefined!");
    else if (nome_fantasia == undefined) res.status(400).send("Seu nome_fantasia está undefined!");
    else if (cnpj == undefined) res.status(400).send("Sua cnpj está undefined!");
    else if (email == undefined) res.status(400).send("Sua email está undefined!");
    else if (senha == undefined) res.status(400).send("Sua senha está undefined!");
    else if (telefone == undefined) res.status(400).send("Sua telefone está undefined!");
    else if (cep == undefined) res.status(400).send("Sua cep está undefined!");
    else if (uf == undefined) res.status(400).send("Sua uf está undefined!");
    else if (cidade == undefined) res.status(400).send("Sua cidade está undefined!");
    else if (bairro == undefined) res.status(400).send("Sua bairro está undefined!");
    else if (rua == undefined) res.status(400).send("Sua rua está undefined!");
    else if (numero == undefined) res.status(400).send("Sua numero está undefined!");
    else {
        usuarioModel.cadastrar(nome_empresarial, nome_fantasia, cnpj, email, senha, telefone, cep, uf, cidade, bairro, rua, numero)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) res.status(400).send("Seu email está indefinida!");
    else if (senha == undefined) res.status(400).send("Sua senha está indefinida");
    else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resposta) {
                    console.log(`\nResultados encontrados: ${resposta.length}`);
                    console.log(`Resultados: ${JSON.stringify(resposta)}`);

                    if (resposta.length == 1) {
                        console.log(resposta);

                        res.json({
                            id: resposta[0].idCliente,
                            nomeEmp: resposta[0].nomeEmpresarial,
                            email: resposta[0].email
                        });
                    } else if (resposta.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usúario com o mesmo login e senha")
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );

    }
}

module.exports = {
    autenticar,
    cadastrar,
}
