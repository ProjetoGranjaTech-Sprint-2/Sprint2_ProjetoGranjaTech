function mostrar() {
    let senha = input_senha;

    if (senha.type == "password") {
        senha.type = "text"
    } else {
        senha.type = "password"
    }
}

function auxiliar() {

    let cnpj = input_cnpj.value;

    if (cnpj.length == 2 && cnpj.charAt(1) != '.' || cnpj.length == 6 && cnpj.charAt(5) != '.') input_cnpj.value += '.';
    else if (cnpj.length == 10 && cnpj.charAt(9) != '/') input_cnpj.value += '/';
    else if (cnpj.length == 15 && cnpj.charAt(14) != '-') input_cnpj.value += '-';
}

function prosseguir() {
    var nome_empresarial = input_nome_empresarial.value;
    var nome_fantasia = input_nome_fantasia.value;
    var cnpj = input_cnpj.value;
    var email = input_email.value;
    var senha = input_senha.value;
    var telefone = input_telefone.value;

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

                        if (telefone == "") {
                            telefone = "--------";
                        };

                        localStorage.setItem("input_nome_empresarial", nome_empresarial);
                        localStorage.setItem("input_nome_fantasia", nome_fantasia);
                        localStorage.setItem("input_cnpj", cnpj);
                        localStorage.setItem("input_email", email);
                        localStorage.setItem("input_senha", senha);
                        localStorage.setItem("input_telefone", telefone);

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

function confirmacao() {

    var numero = input_numero.value;
    var rua = input_rua.value;
    var bairro = input_bairro.value;
    var cidade = input_cidade.value;
    var uf = input_uf.value;
    var cep = input_cep.value;
    
    div_cadastro = "";

    if (numero == "") {
        cardErro.style.display = "block";
        mensagem_erro.innerHTML = `Por favor, insira um número`;
        setTimeout(sumirMensagem, 2000);
    } else {

        localStorage.setItem("input_numero", numero);
        localStorage.setItem("input_rua", rua);
        localStorage.setItem("input_bairro", bairro);
        localStorage.setItem("input_cidade", cidade);
        localStorage.setItem("input_uf", uf);
        localStorage.setItem("input_cep", cep);

        window.location.href = "cadastro3.html";
    }
}

function preencher() {

    const nome_emp = localStorage.getItem("input_nome_empresarial");
    const nome_fant = localStorage.getItem("input_nome_fantasia");
    const cnpj_ = localStorage.getItem("input_cnpj");
    const email_ = localStorage.getItem("input_email");
    const senha_ = localStorage.getItem("input_senha");
    const telefone_ = localStorage.getItem("input_telefone");
    
    
    const cep_ = localStorage.getItem("input_cep");
    const rua_ = localStorage.getItem("input_rua");
    const bairro_ = localStorage.getItem("input_bairro");
    const cidade_ = localStorage.getItem("input_cidade");
    const uf_ = localStorage.getItem("input_uf");
    const numero_ = localStorage.getItem("input_numero");


    output_nome_emp.textContent = nome_emp;
    output_nome_fant.textContent = nome_fant;
    output_cnpj.textContent = cnpj_;
    output_email.textContent = email_;
    output_telefone.textContent = telefone_;

    output_cep.textContent = cep_;
    output_uf.textContent = uf_;
    output_cidade.textContent = cidade_;
    output_bairro.textContent = bairro_;
    output_rua.textContent = rua_;
    output_numero.textContent = numero_;

}

function finalizar() {
    fetch("/usuarios/cadastrar", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            nome_empresarialServer: localStorage.getItem("input_nome_empresarial"),
            nome_fantasiaServer: localStorage.getItem("input_nome_fantasia"),
            cnpjServer: localStorage.getItem("input_cnpj"),
            emailServer: localStorage.getItem("input_email"),
            senhaServer: localStorage.getItem("input_senha"),
            telefoneServer: localStorage.getItem("input_telefone"), 
            cepServer: localStorage.getItem("input_cep"), 
            ufServer: localStorage.getItem("input_uf"), 
            cidadeServer: localStorage.getItem("input_cidade"), 
            bairroServer: localStorage.getItem("input_bairro"), 
            ruaServer: localStorage.getItem("input_rua"), 
            numeroServer: localStorage.getItem("input_numero"), 
    }),
    })
    .then(function (result) {
        console.log('resposta: ', result);

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