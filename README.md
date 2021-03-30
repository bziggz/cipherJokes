# cipherJokes
A RESTful API for retrieving a random joke, and converting it to pig latin.


Pig Latin Rules sourced from https://en.wikipedia.org/wiki/Pig_Latin

Rules:
  - If the word starts with a vowel (a, e, i, o, u), move the vowel to the 
    end of the word and concat 'way' to the end.

  - If the word starts with a 'q', move the 'qu' to the end and concat 'ay'.

  - If the word starts with a consonant, move the entire phonetic block of 
    consonants to the end of the word, and concat 'ay'.

  - Hyphenated words are 'pig latinated' in sections, not as a whole.


