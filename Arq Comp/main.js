const serialport = require('serialport');
const express = require('express');
const mysql = require('mysql2');

const SERIAL_BAUD_RATE = 9600;
const SERVIDOR_PORTA = 3000;
const HABILITAR_OPERACAO_INSERIR = true;

const serial = async (
    // stats,
    valoresStatsTemp,
    valoresStatsUmi

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

        valoresStatsUmi.push(statsUmi); 
        valoresStatsTemp.push(statsTemp);

        if (HABILITAR_OPERACAO_INSERIR) {
            await poolBancoDados.execute(
                `INSERT INTO historico (fkSensor, stats, uniMedida) VALUES (5, ${statsUmi}, '%'), (4, ${statsTemp}, '°C');`
            );
            // setInterval(HABILITAR_OPERACAO_INSERIR, 15000)
        }


        arduino.on('error', (mensagem) => {
            console.error(`Erro no arduino (Mensagem: ${mensagem}`)
        });
    }
    );
}
const servidor = (
    stats,
    valoresStatsUmi,
    valoresStatsTemp,
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

    app.get('/sensores/dht11/umidade', (_, response) => {
        return response.json(valoresStatsUmi);
    });

    app.get('/sensores/lm35/temperatura', (_, response) => {
        return response.json(valoresStatsTemp);
    });
}

(async () => {
    // const stats = [];
    const valoresStatsTemp = [];
    const valoresStatsUmi = [];
    await serial(
        // stats,
        valoresStatsTemp,
        valoresStatsUmi,
    );
    servidor(
        // stats,
        valoresStatsTemp,
        valoresStatsUmi,
    );
})();
