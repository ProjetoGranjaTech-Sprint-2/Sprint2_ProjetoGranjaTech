var express = require("express");
var router = express.Router();

var dashboardController = require('../controller/dashboardController.js')

router.post("/galpoes", function (req, res) {
    dashboardController.inserirCliente(req, res);  
});

// router.get("/dadosSensor", function (req, res) {
//     dashboardController.dadosSensor(req, res);  
// });

module.exports = router;
