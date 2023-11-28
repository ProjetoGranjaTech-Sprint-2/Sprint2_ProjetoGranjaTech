


function mostrar() {
    senha = input_senha.value;

    if (senha.type == "password") {
        senha.type = "text"
    } else {
        senha.type = "password"
    }
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

                                const nome_emp = document.getElementById("input_nome_empresarial").value;
                                const nome_fant = document.getElementById("input_nome_fantasia").value;
                                const cnpj_ = document.getElementById("input_cnpj").value;
                                const email_ = document.getElementById("input_email").value;
                                const telefone_ = document.getElementById("input_telefone").value;


                                // localStorage.setItem("input_nome_empresarial", nome_empresarial);
                                // localStorage.setItem("input_nome_fantasia", nome_fantasia);
                                // localStorage.setItem("input_cnpj", cnpj);
                                // localStorage.setItem("input_email", email);
                                // localStorage.setItem("input_telefone", telefone_); NÃO USEI ISSO POR NÃO EXPIRAR APÓS SAIR DA PAGINA, E POIS MESMO LIMPANDO O CACHE O VALOR NÃO SOME

                                sessionStorage.NOME_EMP = nome_empresarial
                                sessionStorage.NOME_FANT = nome_fantasia
                                sessionStorage.CNPJ = cnpj
                                sessionStorage.EMAIL = email
                                sessionStorage.SENHA = senha
                                sessionStorage.TELEFONE = telefone

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



function checkEnter(event) {
    if (event.key === "Enter") {
        prosseguir();
    }
    
}

function sumirMensagem() {
    cardErro.style.display = "none";
}