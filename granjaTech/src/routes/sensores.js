var express = require("express");
var router = express.Router();

var sensoresController = require('../controller/sensoresController.js')

router.get("/listarSensor", function (req, res) {
    sensoresController.listarSensor(req, res);  
});

module.exports = router;
