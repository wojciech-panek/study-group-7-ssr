/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const request = require('request');
const querystring = require('querystring');
const logger = require('./logger');
const argv = require('minimist')(process.argv.slice(2));
/* eslint-enable import/no-extraneous-dependencies */


const api = express();

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;

// Let http.Server use its default IPv6/4 host
const host = customHost || null;
const prettyHost = customHost || 'localhost';

const port = argv.apiPort || process.env.API_PORT || 3002;

api.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

api.get('/openweathermap', function (req, res) {
  const url = 'http://api.openweathermap.org/data/2.5/weather?' + querystring.stringify(req.query);
  request.get({ url }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      res.json(JSON.parse(body));
    }
    res.status(response.statusCode).end();
  });
});

api.listen(port, host, (err) => {
  if (err) {
    return logger.error(err.message);
  }

  return logger.apiStarted(port, prettyHost);
});


module.exports = api;
