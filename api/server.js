const Express = require('express');
const fetchRandomJoke = require('./routes/random');
const sentenceToPigLatin = require('./utils/pigLatinator');

const app = Express();
const port = 8080;

app.use(Express.json());

app.get('/', (request, response) => {
  fetchRandomJoke()
    .then(joke => response.status(200).send(joke))
    .catch(e => console.log(e));
});

app.get('/pig', (request, response) => {
  fetchRandomJoke()
    .then(joke => response.status(200).send(sentenceToPigLatin(joke)))
    .catch(e => console.log(e));
})

app.listen(port, () => {
  console.log("Listening on port 3000");
});