const express = require('express');
const https = require('https');
const fs = require('fs');


const app = express();
const port = 443;

app.use(express.static('public'))

const options = {
  key: fs.readFileSync('your_domain.key'),
  cert: fs.readFileSync('your_domain.crt')
};

app.get('/', (req, res) => {
  res.send({
    code: 20000,
    message: 'Success',
    data: {}
  })
})

const server = https.createServer(options, app);

server.listen(port, () => {
  console.log(`Server running on https://localhost:${port}`);
});
