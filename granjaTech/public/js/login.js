
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

                img_galinha.style.display = 'block'; // Mostra a imagem da galinha
                setTimeout(function () {
                    img_galinha.style.animation = 'spin 2s linear infinite'; // Adicione a animação
                    setTimeout(function () {
                        window.location.href = "../logado/logado.html";
                    }, 900); // Redireciona após a animação ter girado por um tempo
                }, 10); // Aguarde um curto período antes de mostrar e animar a galinha
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
function checkEnter(event) {
    if (event.key === "Enter") {
        entrar();
    }
}

