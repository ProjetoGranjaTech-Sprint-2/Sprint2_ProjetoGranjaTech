const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3000;
const HABILITAR_OPERACAO_INSERIR = true;

const serial = async (
    valoresStatsTemp,
    valoresStatsUmi,
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    // valoresChave
) => {
    const poolBancoDados = mysql.createPool(
        {
            host: 'localhost',
            port: 3306,
            user: 'BDuser',
            password: 'MYSQLuser123',
            database: 'BDGranjaTech'
        }
    ).promise();

    const portas = await serialport.SerialPort.list();
    const portaArduino = portas.find((porta) => porta.vendorId == 2341 && porta.productId == 43);
    if (!portaArduino) {
        throw new Error('O arduino não foi encontrado em nenhuma porta serial');
    }
    const arduino = new serialport.SerialPort(
        {
            path: portaArduino.path,
            baudRate: SERIAL_BAUD_RATE
        }
    );
    arduino.on('open', () => {
        console.log(`A leitura do arduino foi iniciada na porta ${portaArduino.path} utilizando Baud Rate de ${SERIAL_BAUD_RATE}`);
    });
    arduino.pipe(new serialport.ReadlineParser({ delimiter: '\r\n' })).on('data', async (data) => {
        const valores = data.split(',');
        const statsUmi = parseFloat(valores[0]); // ISSO É A UMIDADE DO DHT
        const statsTemp = parseFloat(valores[1]); // TEMPERATURA DO LM35

        // valoresStatsUmi.push(statsUmi);
        // valoresStatsTemp.push(statsTemp);

        const stats = [statsUmi, statsTemp];

        // EMPURRAR UMIDADE E TEMPERATURA DO DHT

        // const dht11Temperatura = parseFloat(valores[2]);
        // const luminosidade = parseFloat(valores[3]);
        // const lm35Temperatura = parseFloat(valores[1]);
        // const chave = parseInt(valores[4]);
        
        if (stats[0] > 30){
            if (HABILITAR_OPERACAO_INSERIR) {
                await poolBancoDados.execute(
                    'INSERT INTO historico (idHist, fkSensor, timeVrf, stats, uniMedida) VALUES (?)',
                    [null, null, null, stats[0], '%']
                );
            }
        } else if (stats[1] <= 30){
            if (HABILITAR_OPERACAO_INSERIR) {
                await poolBancoDados.execute(
                    'INSERT INTO historico (idHist, fkSensor, timeVrf, stats, uniMedida) VALUES (?)',
                    [null, null, null, stats[1], '°C']
                );
            }
        }
        // valoresStatsTemp.push(statsTemp); // EMPURRAR TEMPERATURA LM35

        // valoresDht11Temperatura.push(dht11Temperatura);
        // valoresLuminosidade.push(luminosidade);
        // valoresLm35Temperatura.push(lm35Temperatura);
        // valoresChave.push(chave);

        // if (HABILITAR_OPERACAO_INSERIR) {
        //     await poolBancoDados.execute(
        //         'INSERT INTO historico (idHist, fkSensor, timeVrf, stats, uniMedida) VALUES (?)',
        //         [stats]
        //     );
        // }

    });
    arduino.on('error', (mensagem) => {
        console.error(`Erro no arduino (Mensagem: ${mensagem}`)
    });
}

const servidor = (
    stats,
    // valoresDht11Temperatura,
    // valoresLuminosidade,
    // valoresLm35Temperatura,
    // valoresChave
) => {
    const app = express();
    app.use((request, response, next) => {
        response.header('Access-Control-Allow-Origin', '*');
        response.header('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
        next();
    });
    app.listen(SERVIDOR_PORTA, () => {
        console.log(`API executada com sucesso na porta ${SERVIDOR_PORTA}`);
    });
    app.get('/dadosSensor', (_, response) => {
        return response.json(stats);
    });
    // app.get('/sensores/dht11/temperatura', (_, response) => {
    //     return response.json(valoresDht11Temperatura);
    // });
    // app.get('/sensores/luminosidade', (_, response) => {
    //     return response.json(valoresLuminosidade);
    // });
    // app.get('/sensores/lm35/temperatura', (_, response) => {
    //     return response.json(valoresLm35Temperatura);
    // });
    // app.get('/sensores/chave', (_, response) => {
    //     return response.json(valoresChave);
    // });
}

(async () => {
    const stats = [];
    // const valoresDht11Temperatura = [];
    // const valoresLuminosidade = [];
    // const valoresLm35Temperatura = [];
    // const valoresChave = [];
    await serial(
        stats,
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        // valoresLm35Temperatura,
        // valoresChave
    );
    servidor(
        stats,
        // valoresDht11Temperatura,
        // valoresLuminosidade,
        // valoresLm35Temperatura,
        // valoresChave
    );
})();
