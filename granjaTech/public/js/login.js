
function entrar() {
    var login = input_login.value;
    var senha = input_senha.value;
    if (login.indexOf('.com') >= 0) {
        var possuiEmailVálido =
            login.indexOf('@gmail') >= 0 ||
            login.indexOf('@hotmail') >= 0 ||
            login.indexOf('@outlook') >= 0;

        if (possuiEmailVálido) {
            if (senha.length >= 8) {
                var possui_especial =
                    senha.indexOf('#') >= 0 ||
                    senha.indexOf('@') >= 0 ||
                    senha.indexOf('!') >= 0 ||
                    senha.indexOf('%') >= 0 ||
                    senha.indexOf('$') >= 0 ||
                    senha.indexOf('&') >= 0 ||
                    senha.indexOf('*') >= 0;
                if (possui_especial) {

                    fetch("/usuarios/autenticar", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            emailServer: emailVar,
                            senhaServer: senhaVar
                        })
                    })
                        .then(function (resposta) {
                            console.log("ESTOU NO THEN DO ENTRAR()!");

                            if (resposta.ok) {
                                console.log(resposta);

                                resposta.json().then(json => {
                                    console.log(json);
                                    console.log(JSON.stringify(json));
                                    sessionStorage.EMAIL_USUARIO = json.email;
                                    sessionStorage.NOME_USUARIO = json.nome;
                                    sessionStorage.ID_USUARIO = json.id;


                                    img_galinha.style.display = 'block'; // Mostra a imagem da galinha
                                    setTimeout(function () {
                                        img_galinha.style.animation = 'spin 2s linear infinite'; // Adicione a animação
                                        setTimeout(function () {
                                            window.location.href = "../logado/logado.html";
                                        }, 900); // Redireciona após a animação ter girado por um tempo
                                    }, 10); // Aguarde um curto período antes de mostrar e animar a galinha
                                });
                            } else {
                                console.log("Houve um erro ao tentar realizar o login!");

                                resposta.text().then(texto => {
                                    console.error(texto);
                                    finalizarAguardar(texto);
                                });
                            }
                        }).catch(function (erro) {
                            console.log(erro)
                        });
                    return false;
                }
            }
        } else if (login == "" || senha == "") {
            input_login.value = '';
            input_senha.value = '';
            input_login.focus();
            mensagem_erro.innerHTML = `Usuário ou senha incorretos.`;
        } else {
            input_login.value = '';
            input_senha.value = '';
            input_login.focus();
            mensagem_erro.innerHTML = `Usuário ou senha incorretos.`;
        }
    }
}

function checkEnter(event) {
    if (event.key === "Enter") {
        entrar();
    }
}
