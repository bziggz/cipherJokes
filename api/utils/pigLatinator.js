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
  const regExp = /\w+'?\w*/g;

  return sentence.toLowerCase()
    .replace(regExp, (word) => wordToPigLatin(word))
    .split(' ')
    .map((word, idx) => {
      if (sentenceArr[idx][0].match(/[A-Z]/)) {
        return word[0].toUpperCase() + word.slice(1);
      }

      if (word[0] === '"') {
        return '"' + word[1].toUpperCase() + word.slice(2);
      }

      return word
    })
    .join(' ');
}

module.exports = { sentence: sentenceToPigLatin, word: wordToPigLatin };