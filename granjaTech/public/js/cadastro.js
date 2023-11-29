


function mostrar() {
    senha = input_senha.value;

    if (senha.type == "password") {
        senha.type = "text"
    } else {
        senha.type = "password"
    }
}

var nome_empresarial;
var nome_fantasia;
var cnpj;
var email;
var senha;
var telefone;


function prosseguir() {
    nome_empresarial = input_nome_empresarial.value;
    nome_fantasia = input_nome_fantasia.value;
    cnpj = input_cnpj.value;
    email = input_email.value;
    senha = input_senha.value;
    telefone = input_telefone.value;

    if (nome_empresarial == "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Por favor, preencha o campo "Nome Empresarial (Responsável/Empresário)".`;
        setTimeout(sumirMensagem, 2000);
    } else if (nome_fantasia == "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Por favor, preencha o campo "Nome Fantasia".`;
        setTimeout(sumirMensagem, 2000);
    } else if (cnpj == "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Por favor, preencha o campo CNPJ. Ele deve ter entre 14 e 18 números".`;
        setTimeout(sumirMensagem, 2000);
    } else if (cnpj.length >= 14 & cnpj.length <= 18) {
        if (email == "") {
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = `Por favor, preencha o campo "Email".`;
            setTimeout(sumirMensagem, 2000);
        } else if (email.indexOf('.com') >= 0) {
            var possuiEmailVálido =
                email.indexOf('@gmail') >= 0 ||
                email.indexOf('@hotmail') >= 0 ||
                email.indexOf('@outlook') >= 0;

            if (possuiEmailVálido) {
                if (senha == "") {
                    cardErro.style.display = "block";
                    mensagem_erro.innerHTML = `Por favor, preencha o campo "Senha".`;
                    setTimeout(sumirMensagem, 2000);
                } else if (senha.length >= 10) {
                    var possui_especial =
                        senha.indexOf('#') >= 0 ||
                        senha.indexOf('@') >= 0 ||
                        senha.indexOf('!') >= 0 ||
                        senha.indexOf('%') >= 0 ||
                        senha.indexOf('$') >= 0 ||
                        senha.indexOf('&') >= 0 ||
                        senha.indexOf('*') >= 0;

                    if (possui_especial) {

                        // const nome_emp = document.getElementById("input_nome_empresarial").value;
                        // const nome_fant = document.getElementById("input_nome_fantasia").value;
                        // const cnpj_ = document.getElementById("input_cnpj").value;
                        // const email_ = document.getElementById("input_email").value;
                        // const telefone_ = document.getElementById("input_telefone").value;

                        // localStorage.setItem("input_nome_empresarial", nome_empresarial);
                        // localStorage.setItem("input_nome_fantasia", nome_fantasia);
                        // localStorage.setItem("input_cnpj", cnpj);
                        // localStorage.setItem("input_email", email);
                        // localStorage.setItem("input_telefone", telefone_); NÃO USEI ISSO POR NÃO EXPIRAR APÓS SAIR DA PAGINA, E MESMO LIMPANDO O CACHE O VALOR NÃO SOME

                        sessionStorage.CNPJ = cnpj;
                        sessionStorage.EMAIL = email;
                        sessionStorage.SENHA = senha;

                        window.location.href = "cadastro2.html";

                    } else {
                        cardErro.style.display = "block";
                        mensagem_erro.innerHTML = `Sua senha não contém caracteres especiais! Por favor, insira uma senha com um ou mais caracteres especiais (!, @, #, $, %, &, *).`;
                        setTimeout(sumirMensagem, 2000);
                    }
                } else {
                    cardErro.style.display = "block";
                    mensagem_erro.innerHTML = `Senha com quantidade de caracteres inválido! Por favor, insira uma senha com 10 ou mais caracteres.`;
                    setTimeout(sumirMensagem, 2000);
                }
            } else {
                cardErro.style.display = "block";
                mensagem_erro.innerHTML = `Email inválido - Insira um email que tenha um dos seguintes endereços: "@outlook", "@gmail" ou "@hotmail".`;
                setTimeout(sumirMensagem, 2000);
            }
        } else {
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = `Email inválido!`;
            setTimeout(sumirMensagem, 2000);
        }
    } else {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `CNPJ inválido!`;
        setTimeout(sumirMensagem, 2000);
    }
}

function limpar() {
    input_rua.value = "";
    input_bairro.value = "";
    input_cidade.value = "";
    input_uf.value = "";
    input_cep.value = "";
    input_numero.value = "";
}


var numero;
var rua;
var bairro;
var cidade;
var uf;
var cep;

function confirmacao() {
    // const nome_emp = localStorage.getItem("input_nome_empresarial");
    // const nome_fant = localStorage.getItem("input_nome_fantasia");
    // const cnpj_ = localStorage.getItem("input_cnpj");
    // const email_ = localStorage.getItem("input_email");
    // const telefone_ = localStorage.getItem("input_telefone");

    numero = input_numero.value;
    rua = input_rua.value;
    bairro = input_bairro.value;
    cidade = input_cidade.value;
    uf = input_uf.value;
    cep = input_cep.value;
    
    div_cadastro = "";

    if (numero == "") {
        alert(`Por favor, insira um número`);
    } else {

        // const numero_ = document.getElementById("input_numero").value;
        // const rua_ = document.getElementById("input_rua").value;
        // const bairro_ = document.getElementById("input_bairro").value;
        // const cidade_ = document.getElementById("input_cidade").value;
        // const uf_ = document.getElementById("input_uf").value;
        // const cep_ = document.getElementById("input_cep").value;

        // localStorage.setItem("input_numero", numero_);
        // localStorage.setItem("input_rua", rua_);
        // localStorage.setItem("input_bairro", bairro_);
        // localStorage.setItem("input_cidade", cidade_);
        // localStorage.setItem("input_uf", uf_);
        // localStorage.setItem("input_cep", cep_);

        window.location.href = "cadastro3.html";
    }
}

function preencher() {

    output_nome_emp.textContent = nome_empresarial;
    output_nome_fant.textContent = nome_fantasia;
    output_cnpj.textContent = cnpj;
    output_email.textContent = email;
    output_telefone.textContent = telefone;

    output_cep.textContent = cep;
    output_uf.textContent = uf;
    output_cidade.textContent = cidade;
    output_bairro.textContent = bairro;
    output_rua.textContent = rua;
    output_numero.textContent = numero;

}

function finalizar () {
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    body: JSON.stringify({
        nome_empresarialServer: nome_empresarial,
        nome_fantasiaServer: nome_fantasia,
        cnpjServer: cnpj,
        emailServer: email,
        senhaServer: senha,
        telefoneServer: telefone, 
        cepServer: cep, 
        ufServer: uf, 
        cidadeServer: cidade, 
        bairroServer: bairro, 
        ruaServer: rua, 
        numeroServer: numero, 
    }),
    })
    .then(function (result) {
        
        if (result.ok) {
            cardErro.style.display = "block";
            mensagem_erro.innerHTML = `Cadastro realizado com sucesso! Redirecionando para tela de Login...`;

            setTimeout(()=> {
                window.location.href = "../cadastro_login/login.html"
            }, 2000);

            sessionStorage.clear();
            sumirMensagem();
        } else throw "Houve um erro ao tentar realizar o cadastro!"; 
    })
    .catch(function (resposta) {
        console.log(`[ERRO] ${resposta}`)
        sumirMensagem();
    });
    return false;
}



function ativarProsseguir(event) {
    if (event.key === "Enter") {
        prosseguir();
    }

}

function ativarConfirmacao(event) {
    if (event.key === "Enter") {
        confirmacao();
    }
}

function sumirMensagem() {
    cardErro.style.display = "none";
}