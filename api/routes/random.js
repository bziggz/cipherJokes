const fetch = require('node-fetch');
const url = require('../utils/constants').random;

const fetchRandomChuckNorrisJoke = () => (
  fetch(url)
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke).replace(/&quot;/g, '"')));


module.exports = fetchRandomChuckNorrisJoke;