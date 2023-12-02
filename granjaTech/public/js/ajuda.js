const nodemailer = require('nodemailer');

var enviar = document.getElementById("submit");
var texto = textarea.textContent;

enviar.addEventListener('click', ()=> {

    var assunto = slc_category.value
    if (texto == '') alert("ERRO - Não reconhecemos sua solicitação, verifique o campo");
    else {
        // Configurar o transporte
        const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'GranjaTechG2@gmail.com',
            pass: 'GranjaT3ch',
        },
        });

        // Definir detalhes do e-mail
        const mailOptions = {
        from: 'GranjaTechG2@gmail.com',
        to: 'help@granjatech.on.spiceworks.com',
        subject: assunto,
        text: texto,
        };

        // Enviar o e-mail
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error(error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
        });        
    }
});