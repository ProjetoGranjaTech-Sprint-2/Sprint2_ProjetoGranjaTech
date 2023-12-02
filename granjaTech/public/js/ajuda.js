function enviar() {
    
    var texto = textarea.value;
    var assunto = slc_category.value
    if (texto == '') alert("ERRO - Não reconhecemos sua solicitação, verifique o campo");
    else {

        fetch('/dashboard/enviar-email', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify({ assunto, texto }),
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            finalizar();
        })
        .catch(error => {
            console.log('Erro:', error)
        })         
    }
};