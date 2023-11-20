const nome_emp = localStorage.getItem("input_nome_empresarial");
const nome_fant = localStorage.getItem("input_nome_fantasia");
const cnpj_ = localStorage.getItem("input_cnpj");
const email_ = localStorage.getItem("input_email");
const telefone_ = localStorage.getItem("input_telefone");

const numero_ = localStorage.getItem("input_numero");
const rua_ = localStorage.getItem("input_rua");
const bairro_ = localStorage.getItem("input_bairro");
const cidade_ = localStorage.getItem("input_cidade");
const uf_ = localStorage.getItem("input_uf");
const cep_ = localStorage.getItem("input_cep");

var nome_emp_ = nome_emp;
var nome_fant_ = nome_fant;
var cnpj = cnpj_;
var email = email_;
var telefone = telefone_;

var numero = numero_;
var rua = rua_;
var bairro = bairro_;
var cidade = cidade_;
var uf = uf_;
var cep = cep_;

var output_nome_emp = document.getElementById("output_nome_emp");
var output_nome_fant = document.getElementById("output_nome_fant");
var output_cnpj = document.getElementById("output_cnpj");
var output_email = document.getElementById("output_email");
var output_telefone = document.getElementById("output_telefone");

var output_cep = document.getElementById("output_cep");
var output_uf = document.getElementById("output_uf");
var output_cidade = document.getElementById("output_cidade");
var output_bairro = document.getElementById("output_bairro");
var output_rua = document.getElementById("output_rua");
var output_numero = document.getElementById("output_numero");


if (telefone_ == "") {
    telefone = "--------";
};

output_nome_emp.textContent = nome_emp_;
output_nome_fant.textContent = nome_fant_;
output_cnpj.textContent = cnpj;
output_email.textContent = email;
output_telefone.textContent = telefone;

output_cep.textContent = cep;
output_uf.textContent = uf;
output_cidade.textContent = cidade;
output_bairro.textContent = bairro;
output_rua.textContent = rua;
output_numero.textContent = numero;