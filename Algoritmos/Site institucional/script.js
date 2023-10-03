function calcular() {
    var galinhas = Number(input_galinhas.value);
    var galinhasMortas = Number(input_galinhas_morte.value);
    var qtdOvo = Number(input_qtd_ovo.value);
    var precoOvo = Number(input_preco_ovo.value);
    // variáveis dos inputs
    var galinhasPerdidas = (galinhasMortas / galinhas) * 100 // Média de galinhas perdidas
    var ovoPorGalinha = qtdOvo / galinhas  // Ovos gerados por galinha
    var ovoPorGalinhaPerdido = ovoPorGalinha * galinhasMortas // Quantidade de ovos perdidos por galinha 
    var lucro = qtdOvo * precoOvo // Lucro em cima da quantidade de ovos e do preço do ovo
    var lucroPerdido = ovoPorGalinhaPerdido * precoOvo  // média de ovos por galinha perdidas pelo preço do ovo unitário gera o lucro perdido
    div_html.innerHTML = `
    <span> 
        De suas <b style="color: #4A3D33;"> ${galinhas} </b> galinhas, em média <b style="color: #4A3D33;"> ${(galinhasPerdidas).toFixed(3)}%. </b> delas morrem por falta de monitoramento de regulação da temperatura e umidade, com <b style="color: #4A3D33;"> ${galinhasMortas} </b> galinhas a menos, devido a perda de <b style="color: #4A3D33;">${(ovoPorGalinhaPerdido).toFixed(0)} </b> ovos, isso faz você deixar de ganhar:
    </span>
    <h2 style="color: #4A3D33;">R$ ${(lucroPerdido).toFixed(2)} mensalmente </h2> 
    <h2 style="color: #4A3D33;">R$ ${(lucroPerdido * 6).toFixed(2)} a cada 6 meses </h2>
    <h2 style="color: #4A3D33;">R$ ${(lucroPerdido * 12).toFixed(2)} anualmente </h2>
    <h2 style="color: #4A3D33;">R$ ${((lucroPerdido * 12) * 5).toFixed(2)} a cada 5 anos </h2>
    `
}
function limparGalinha() {
    galinhas = '';
    galinhasMortas = '';
    qtdOvo = '';
    precoOvo = '';

    div_html.innerHTML = `
        <h1>Bem vindo ao simulador GranjaTech</h1>
                <span>
                    Estamos aqui para ajudá-lo a entender como
                    as condições
                    climáticas afetam o desempenho financeiro de sua granja.
                </span>
    `
}
