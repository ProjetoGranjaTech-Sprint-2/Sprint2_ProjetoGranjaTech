function enviar() {
    
    var texto = textarea.value;
    var assunto = slc_category.value;
    var email = sessionStorage.EMAIL_USUARIO;
    if (texto == '') alert("ERRO - Não reconhecemos sua solicitação, verifique o campo");
    else {

        fetch('/dashboard/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ assunto, texto, email}),
        })
        .then(response => {
            response.json()
            console.log(data);
        })
        .catch(error => {
            console.log('Erro:', error)
        })         
        finalizar();
    }
};

function finalizar() {
    textarea.value = ''
    cardErro.style.display = "block";
    mensagem_erro.innerHTML = `Cadastro realizado com sucesso! Redirecionando para tela de Login...`;
    setTimeout(() => {
        cardErro.style.display = "none";
    }, 2500);
}

