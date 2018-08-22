'use strict';
const data = require('./data');

const WARNING_MESSAGE = 'This API is purely for educational purposes. The data returned is not accurate.';
module.exports.info = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: WARNING_MESSAGE,
    }),
  };

  callback(null, response);
};

module.exports.latest = (event, context, callback) => {
  const base = ((event.queryStringParameters && event.queryStringParameters.base) || 'EUR').toUpperCase();
  const rates = data.rates[base] || {};

  const response = {
    statusCode: Object.keys(rates).length === 0 ? 404 : 200,
    body: JSON.stringify({
      message: WARNING_MESSAGE,
      base,
      rates,
      date: new Date(),
    }),
  };

  callback(null, response);
};
