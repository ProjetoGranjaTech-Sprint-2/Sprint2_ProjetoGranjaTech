var express = require("express");
var router = express.Router();

var sensoresController = require('../controller/sensoresController.js')

router.get("/listarSensor/:idGalinheiro", function (req, res) {
    sensoresController.listarSensor(req, res);  
});

router.get("/dadosSensor/:idSensor", function (req, res) {
    sensoresController.dadosSensor(req, res);  
});

router.get("/dadosTempoReal/:idSensor", function (req, res) {
    sensoresController.dadosTempoReal (req, res);
});

module.exports = router;
