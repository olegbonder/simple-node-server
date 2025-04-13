// Импорт модуля http из стандартной библиотеки Node.js
const http = require('http');

// Создание HTTP-сервера
const server = http.createServer((req, res) => {
  // Устанавливаем заголовок ответа с типом содержимого HTML
  res.writeHead(200, {'Content-Type': 'text/html'});
  
  // Отправляем HTML-ответ
  res.end(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Приветствие</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          text-align: center;
          margin-top: 50px;
          background-color: #f0f0f0;
        }
        h1 {
          color: #333;
        }
      </style>
    </head>
    <body>
      <h1>Добро пожаловать на мой сервер!</h1>
      <p>Это простейший сервер на Node.js</p>
    </body>
    </html>
  `);
});

// Запуск сервера на порту 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});