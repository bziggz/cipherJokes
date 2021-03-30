const Express = require("express");
const fetch = require('node-fetch');

const app = Express();
const port = 3000;

app.use(Express.json());

const wordToPigLatin = (word) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  
  if (vowels.includes(word[0])) {
    return word.slice(1) + word[0] + 'way';
  } else if (word.slice(0,2) === 'qu') {
    return word.slice(2) + 'quay';
  } else {
    for (let i = 0; i < word.length; i += 1) {
      if (vowels.includes(word[i])) {
        return word.slice(i) + word.slice(0, i) + 'ay';
      }
    }
  }

  return word
}

const sentenceToPigLatin = (sentence) => {
  const sentenceArr = sentence.split(' ');
  const regExp = /\w+'?\w+/g;

  return sentence.toLowerCase()
    .replaceAll(regExp, (word) => wordToPigLatin(word))
    .split(' ')
    .map((word, idx) => {
      if (sentenceArr[idx][0].match(/[A-Z]/)) {
        return word[0].toUpperCase() + word.slice(1);
      }

      return word
    })
    .join(' ');
}

app.get('/random', (req, response) => {
  fetch('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke).replaceAll('&quot;', '"'))
    .then(joke => response.send(joke))
    .then(response.status(200));
});

app.get('/pig', (req, response) => {
  fetch('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke).replaceAll('&quot;', '"'))
    .then(joke => response.send(sentenceToPigLatin(joke)))
    .then(response.status(200));
})

app.listen(port, () => {
  console.log("Listening on port 3000");
});