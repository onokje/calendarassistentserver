const express = require('express');
const app = express();
const port = 3001;

let currentStatus = 'normal';

app.get('/', (req, res) => {

  const newStatus = req.query.status;

  if (newStatus) {
    currentStatus = newStatus;

    res.sendStatus(204);
  } else {
    res.sendFile(__dirname + '/index.html');
  }

});

app.get('/status', (req, res) => {

  res.set('Content-Type', 'application/json');
  res.send(JSON.stringify({ status: currentStatus }));

});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));