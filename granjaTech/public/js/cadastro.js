var nome_empresarial = input_nome_empresarial.value;
var nome_fantasia = input_nome_fantasia.value;
var cnpj = input_cnpj.value;
var email = input_email.value;
var senha = input_senha.value;
var telefone = input_telefone.value;

function mostrar() {
    senha = input_senha.value;
    senha = document.getElementById("input_senha")

    if (senha.type == "password") {
        senha.type = "text"
    } else {
        senha.type = "password"
    }
}
function prosseguir() {
    nome_empresarial = input_nome_empresarial.value;
    nome_fantasia = input_nome_fantasia.value;
    cnpj = input_cnpj.value;
    email = input_email.value;
    senha = input_senha.value;
    telefone = input_telefone.value;

    if (nome_empresarial == "") {
        alert(`Por favor, preencha o campo "Nome Empresarial (Responsável/Empresário)".`)
    } else {
        if (nome_fantasia == "") {
            alert(`Por favor, preencha o campo "Nome Fantasia".`)
        } else {
            res.innerHTML = "";
            if (cnpj == "") {
                alert(`Por favor, preencha o campo CNPJ. Ele deve ter entre 14 e 18 números".`)
            } else if (cnpj.length >= 14 & cnpj.length <= 18) {
                if (email == "") {
                    alert(`Por favor, preencha o campo "Email".`)
                } else if (email.indexOf('.com') >= 0) {
                    var possuiEmailVálido =
                        email.indexOf('@gmail') >= 0 ||
                        email.indexOf('@hotmail') >= 0 ||
                        email.indexOf('@outlook') >= 0;

                    if (possuiEmailVálido) {
                        if (senha == "") {
                            alert(`Por favor, preencha o campo "Senha".`)
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

                                const nome_emp = document.getElementById("input_nome_empresarial").value;
                                const nome_fant = document.getElementById("input_nome_fantasia").value;
                                const cnpj_ = document.getElementById("input_cnpj").value;
                                const email_ = document.getElementById("input_email").value;
                                const telefone_ = document.getElementById("input_telefone").value;


                                localStorage.setItem("input_nome_empresarial", nome_emp);
                                localStorage.setItem("input_nome_fantasia", nome_fant);
                                localStorage.setItem("input_cnpj", cnpj_);
                                localStorage.setItem("input_email", email_);
                                localStorage.setItem("input_telefone", telefone_);

                                window.location.href = "cadastro2.html";

                            } else {
                                alert(`Sua senha não contém caracteres especiais! Por favor, insira uma senha com um ou mais caracteres especiais (!, @, #, $, %, &, *).`)
                            }
                        } else {
                            alert(`Senha com quantidade de caracteres inválido! Por favor, insira uma senha com 10 ou mais caracteres.`)
                        }
                    } else {
                        alert(`Email inválido - Insira um email que tenha um dos seguintes endereços: "@outlook", "@gmail" ou "@hotmail"`)

                    }
                } else {
                    alert(`Email inválido!`)
                }
            } else {
                alert(`CNPJ inválido!`)
            }
        }
    }
}
function checkEnter(event) {
    if (event.key === "Enter") {
        prosseguir();
    }
}