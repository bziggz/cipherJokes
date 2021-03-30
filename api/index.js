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
}

const sentenceToPigLatin = (sentence) => {
  const sentenceArr = sentence.split(' ');
  const regExp = /\w+/g;
  return sentence.replaceAll(regExp, (word) => wordToPigLatin(word))
    .split(' ')
    .map((word, idx) => {
      if (sentenceArr[idx][0].match(/[A-Z]/)) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }

      return word
    })
    .join(' ');
}

app.get('/random', (req, response) => {
  let joke = '';
  fetch('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke))
    .then(j => joke = j)
    .then(_ => console.log(joke))
});

app.get('/pig', (req, response) => {
  let joke = '';
  fetch('https://api.icndb.com/jokes/random?exclude=[explicit]')
    .then(res => res.json())
    .then(data => JSON.stringify(data.value.joke))
    .then(j => joke = j)
    .then(_ => console.log(joke))
})

app.listen(port, () => {
  console.log("Listening on port 3000");
});