const fetch = require('node-fetch');
const url = require('../utils/constants').random;

const fetchRandomJoke = () => (fetch(url)
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke).replaceAll('&quot;', '"')));


module.exports = fetchRandomJoke;