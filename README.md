# cipherJokes
A RESTful API for retrieving a random joke, and converting it to pig latin.

![Chuck_Pig](https://github.com/bziggz/cipherJokes/issues/4)

<em>Pig Latin Rules sourced from https://en.wikipedia.org/wiki/Pig_Latin</em>

<h3>Rules:</h3>
  - The character 'y' does not count as a vowel.

  - If the word starts with a vowel (a, e, i, o, u), move the vowel to the 
    end of the word and concat 'way' to the end.

  - If the word starts with a 'q', move the 'qu' to the end and concat 'ay'.

  - If the word starts with a consonant, move the entire phonetic block of 
    consonants to the end of the word, and concat 'ay'.

  - Hyphenated words are 'pig latinated' in sections, not as a whole.

  - If a word contains no vowels ('my'), the word is returned as normal.

<h3>Downloading Image and Creating Container</h3>
  <code>docker build https://github.com/bziggz/cipherJokes#main:docker</code>

<h3>Automated Testing</h3>
  <code>docker-compose -f docker-compose-test.yml up</code>

<h3>Manual Testing</h3>
  <code>docker-compose up</code>


