const express = require('express');
const http = require('http');
const fs = require('fs');


const app = express();
const port = 9090;

app.use(express.static('public'))

const options = {};

app.get('/', (req, res) => {
  res.send({
    code: 20000,
    message: 'Success',
    data: {
      t: Date.now()
    }
  })
})

app.get('/api/getData', (req, res) => {
  res.send({
    code: 20000,
    message: 'Success',
    data: {
      t: Date.now()
    }
  })
})

const server = http.createServer(options, app);

server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
