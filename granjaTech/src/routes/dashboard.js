var express = require("express");
var router = express.Router();

var dashboardController = require('../controller/dashboardController.js')

router.post("/inserir/galpoes", function (req, res) {
    dashboardController.inserirCliente(req, res);  
});

router.post("/selecionar/galpoes", function (req, res) {
    dashboardController.selecionarGalpao(req, res);  
});

module.exports = router;
