var express = require("express");
var nodemailer = require("nodemailer");
var router = express.Router();

var dashboardController = require('../controller/dashboardController.js')

router.post("/inserir/galpoes", function (req, res) {
    dashboardController.inserirCliente(req, res);  
});

router.post("/excluir/galpoes", function (req, res) {
    dashboardController.excluirTupla(req, res);  
});

router.post("/selecionar/galpoes", function (req, res) {
    dashboardController.selecionarGalpao(req, res);  
});

router.post("/enviar-email", (req, res) => {

    var { assunto, texto } = req.body;

    // Configurar o transporte
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'thythy04@outlook.com',
            pass: 'Mari2013',
        },
    });

        // Definir detalhes do e-mail
        const mailOptions = {
        from: 'thythy04@outlook.com',
        to: 'help@granjatech.on.spiceworks.com',
        subject: assunto,
        text: texto,
        };

        // Enviar o e-mail
        transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.error('Deu' + error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });      
});

module.exports = router;
