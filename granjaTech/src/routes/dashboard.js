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

    var { assunto, texto, email } = req.body;

    // Configurar o transporte
    const transporter = nodemailer.createTransport({
        service: 'outlook',
        auth: {
            user: 'auto-granjatech@outlook.com',
            pass: 'AutoGranjatech',
        },
    });

    // Definir detalhes do e-mail
    const mailOptions = {
        from: 'auto-granjatech@outlook.com',
        to: 'help@granjatech.on.spiceworks.com',
        subject: assunto,
        html: `
            <html>
            <head>
                <style>
                body {
                    background-color: #f0f0f0;
                    color: #333;
                    font-family: Arial, sans-serif;
                }
                </style>
            </head>
            <body>
                <h1>Sou, ${email}</h1>
                <p>${texto}</p>
                <p>Você pode personalizar o conteúdo aqui.</p>
            </body>
            </html>
        `,
    };

    // Enviar o e-mail
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error('Deu' + error);
        } else {
            console.log('Email enviado: ' + info.response);
        }
    });
});

module.exports = router;
