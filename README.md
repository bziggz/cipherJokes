# cipherJokes
A RESTful API for retrieving a random joke, and converting it to pig latin.

![Chuck_Pig](https://user-images.githubusercontent.com/50502798/113039203-68265880-9165-11eb-8220-c4a486e15922.png)

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

<h3>Downloading Image</h3>
  From your working directory, run:
  <code>git clone https://github.com/bziggz/cipherJokes</code>

<h3>Automated Testing</h3>
  <code>docker-compose -f docker-compose-test.yml up --abort-on-container-exit</code>
  
  This will run automated tests (found in /tests/test.js) and then close both containers.

<h3>Manual Testing</h3>
  <code>docker-compose up</code>
  
  This will spin up the server container for testing in local browser.

  <h4>Endpoints</h4>
    <pre>
    <code>localhost:3000</code> -- retrieve a random Chuck Norris joke
    <code>localhost:3000/pig</code> -- retrieve a pig-latinated Chuck Norris Joke</pre>
<h3>Implementation Notes</h3>

  - The filetree is designed to scale, allowing for easy implementation of possible
  desired additions, such as retrieving a joke by id or category, or retrieving a
  joke from a different api.

- The api urls can be found in /api/utils/constants

- Currently, as this is a job interview and jokes are being retrieved at random,
    all jokes are being filtered to exclude explicit content, though those filters
    are applied by icndb.com, and do not necessarily reflect those of the 
    developer.

<h3>Possible Optimizations</h3>

  - A random joke could be retrieved on server start, then on endpoint request, said
    cached joke could be sent or pig-latinated and sent. The server would then retrieve
    a new random joke and cache that for the next request.
  
- If retrieving a joke by id is ever implemented, caching already-seen jokes in a 
    <pre><code>
      {
        id,
        joke,
      }
    </code></pre>
    format would speed up retrieval for specific jokes. Of course, this would only work
    within the current session unless a persistent databse layer is implemented, perhaps 
    through some sort of bastardized postgres/mongodb hybrid...

<h3>Comment Style</h3>

  - I've tried to be so explicit in variable and function names that additional
  in-file comments would be redundant.
