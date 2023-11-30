var express = require("express");
var router = express.Router();

var sensoresController = require('../controller/sensoresController.js')

router.get("/listarSensor", function (req, res) {
    sensoresController.listarSensor(req, res);  
});

router.get("/dadosSensor", function (req, res) {
    sensoresController.dadosSensor(req, res);  
});

module.exports = router;
