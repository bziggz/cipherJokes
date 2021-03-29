const Express = require("express");
const fetch = require('node-fetch');

const app = Express();
const port = 3000;

app.use(Express.json());

app.get('/random', (req, response) => {
  let joke = '';
  fetch('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke))
    .then(j => joke = j)
    .then(_ => console.log(joke))
});

app.listen(port, () => {
  console.log("Listening on port 3000");
});