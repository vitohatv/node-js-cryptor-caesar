const express = require('express');
const app     = express();
const port    = 1605;

const Caesar = require('caesar-salad').Caesar;

app.get('/', (request, response) => {
    response.send(`Главная страница. Для использования шифратора необходимо
    переидти по пути: /encode/слово которое необходимо зашифорвать и так же
    дешифратор: /decode/зашифрованное слово`);
    request.end();
});

app.get('/encode/:name', (request, response) => {
    const param = request.params.name;
    let cipher = Caesar.Cipher('password').crypt(param);
    response.send('Шифратор:' + '' + cipher);
    request.end();
});

app.listen(port);
console.log('Server running on port 1605: http://localhost:' + port);