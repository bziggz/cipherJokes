FROM node:14

WORKDIR /Users/benjaminzelinski/Desktop/Coding/Projects/cipher_health/cipherJokes

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

CMD [ "node", "./api/server.js"]