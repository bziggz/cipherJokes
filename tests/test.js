const axios = require('axios');
axios.defaults.adapter = require('axios/lib/adapters/http');
const { sentence, word } = require('../api/utils/pigLatinator');

const SERVER_URL = 'http://server:8080';

describe('Server', () => {
	it('Should start the server', async () => {
		const response = await axios.get(SERVER_URL);
		expect(response.status).toEqual(200);
	});
});

describe('Random Joke Endpoint', () => {
  it('Should return a 200 status', async () => {
    const response = await axios.get(SERVER_URL + '/');
    expect(response.status).toEqual(200);
  });

  it('Should return a joke', async () => {
    const response = await axios.get(SERVER_URL + '/');
    expect(response.data.length).toBeGreaterThan(0);
  });
});

describe('Pig Latinated Joke Endpoint', () => {
  it('Should return a 200 status', async () => {
    const response = await axios.get(SERVER_URL + '/pig');
    expect(response.status).toEqual(200);
  });

    it('Should return a joke', async () => {
    const response = await axios.get(SERVER_URL + '/pig');
    expect(response.data.length).toBeGreaterThan(0);
  });
});

describe('Pig Latinator for Words', () => {
  it('Should pig-latinate the a word that starts with a vowel', () => {
    const testWord = 'always';
    expect(word(testWord)).toMatch('lwaysaway');
  });

  it('Should pig-latinate the a word that starts with a consonent group', () => {
    const testWord = 'strength';
    expect(word(testWord)).toMatch('engthstray');
  });

  it('Should pig-latinate the sections of a hyphenated word', () => {
    const testWord = 'never-do-well';
    expect(sentence(testWord)).toMatch('evernay-oday-ellway');
  });
});

describe('Pig Latinator for Sentences', () => {
  it('Should pig-latinate an entire sentence', () => {
    const testWord = 'Hello my name is Ben.';
    expect(sentence(testWord)).toMatch('Ellohay my amenay siway Enbay.');
  });

  it('Should pig-latinate the sections of a hyphenated word', () => {
    const testWord = 'never-do-well';
    expect(sentence(testWord)).toMatch('evernay-oday-ellway');
  });
});
