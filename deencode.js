const express = require('express');
const app     = express();
const port    = 1605;

const Caesar = require('caesar-salad').Caesar;

app.get('/', (request, response) => {
    response.send(`Главная страница. Для использования шифратора необходимо
    переидти по пути: /encode/слово которое необходимо зашифорвать и так же
    дешифратор: /decode/зашифрованное слово`);
    response.end();
});

app.get('/encode/:name', (request, response) => {
    const param = request.params.name;
    let cipher = Caesar.Cipher('password').crypt(param);
    response.send('Шифратор:' + '' + cipher);
    response.end();
});

app.get('/decode/:name', (request, response) => {
    const param = request.params.name;
    let decipher = Caesar.Decipher('password').crypt(param);
    response.send('Дешифратор:' + '' + decipher);
    response.end();
})


app.listen(port);
console.log('Server running on port 1605: http://localhost:' + port);