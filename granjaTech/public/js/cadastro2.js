

    function confirmacao() {
        const nome_emp = localStorage.getItem("input_nome_empresarial");
        const nome_fant = localStorage.getItem("input_nome_fantasia");
        const cnpj_ = localStorage.getItem("input_cnpj");
        const email_ = localStorage.getItem("input_email");
        const telefone_ = localStorage.getItem("input_telefone");

        var numero = input_numero.value;
        var rua = input_rua.value;
        var bairro = input_bairro.value;
        var cidade = input_cidade.value;
        var uf = input_uf.value;
        var cep = input_cep.value;
        div_cadastro = "";

        if (numero == "") {
            alert(`Por favor, insira um número`);
        } else {

            const numero_ = document.getElementById("input_numero").value;
            const rua_ = document.getElementById("input_rua").value;
            const bairro_ = document.getElementById("input_bairro").value;
            const cidade_ = document.getElementById("input_cidade").value;
            const uf_ = document.getElementById("input_uf").value;
            const cep_ = document.getElementById("input_cep").value;

            localStorage.setItem("input_numero", numero_);
            localStorage.setItem("input_rua", rua_);
            localStorage.setItem("input_bairro", bairro_);
            localStorage.setItem("input_cidade", cidade_);
            localStorage.setItem("input_uf", uf_);
            localStorage.setItem("input_cep", cep_);

            window.location.href = "cadastro3.html";
        }
    }
    function limpar() {
        input_rua.value = "";
        input_bairro.value = "";
        input_cidade.value = "";
        input_uf.value = "";
        input_cep.value = "";
        input_numero.value = "";
    }
    function limpa_formulário_cep() {
        //Limpa valores do formulário de cep.
        document.getElementById('rua').value = ("");
        document.getElementById('bairro').value = ("");
        document.getElementById('cidade').value = ("");
        document.getElementById('uf').value = ("");
    }

    function meu_callback(conteudo) {
        if (!("erro" in conteudo)) {
            //Atualiza os campos com os valores.
            document.getElementById('input_rua').value = (conteudo.logradouro);
            document.getElementById('input_bairro').value = (conteudo.bairro);
            document.getElementById('input_cidade').value = (conteudo.localidade);
            document.getElementById('input_uf').value = (conteudo.uf);
        } //end if.
        else {
            //CEP não Encontrado.
            limpa_formulário_cep();
            alert("CEP não encontrado.");
        }
    }

    function pesquisacep(valor) {

        //Nova variável "cep" somente com dígitos.
        var cep = valor.replace(/\D/g, '');

        //Verifica se campo cep possui valor informado.
        if (cep != "") {

            //Expressão regular para validar o CEP.
            var validacep = /^[0-9]{8}$/;

            //Valida o formato do CEP.
            if (validacep.test(cep)) {

                //Preenche os campos com "..." enquanto consulta webservice.
                document.getElementById('input_rua').value = "...";
                document.getElementById('input_bairro').value = "...";
                document.getElementById('input_cidade').value = "...";
                document.getElementById('input_uf').value = "...";

                //Cria um elemento javascript.
                var script = document.createElement('script');

                //Sincroniza com o callback.
                script.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=meu_callback';

                //Insere script no documento e carrega o conteúdo.
                document.body.appendChild(script);

            } //end if.
            else {
                //cep é inválido.
                limpa_formulário_cep();
                alert("Formato de CEP inválido.");
            }
        } //end if.
        else {
            //cep sem valor, limpa formulário.
            limpa_formulário_cep();
        }
    }
    function checkEnter(event) {
        if (event.key === "Enter") {
            confirmacao();
        }
    }