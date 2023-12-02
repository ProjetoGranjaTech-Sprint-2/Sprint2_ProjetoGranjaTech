
var count;

document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000)

var username = sessionStorage.NOME_USUARIO;
boasVindas.innerHTML += `<h1> Seja bem-vindo(a) ${sessionStorage.NOME_USUARIO}`;

function nextImage() {

    var radio_1 = document.getElementById("radio1").checked;
    var radio_2 = document.getElementById("radio2").checked;
    var radio_3 = document.getElementById("radio3").checked;

    if (radio_1 == true) {
        count = 1
    } else if (radio_2 == true) {
        count = 2
    } else if (radio_3 == true) {
        count = 3
    }

    count++;
    if (count > 3) {
        count = 1;
    }

    document.getElementById("radio" + count).checked = true;

}