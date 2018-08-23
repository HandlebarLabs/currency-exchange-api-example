'use strict';
const data = require('./data');

const WARNING_MESSAGE = 'This API is purely for educational purposes. The data returned is not accurate. https://github.com/HandlebarLabs/currency-exchange-api-example';
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

  const hasRates = Object.keys(rates).length > 0;

  const response = {
    statusCode: hasRates ? 404 : 200,
    body: JSON.stringify({
      message: WARNING_MESSAGE,
      base,
      rates,
      date: new Date(),
      error: hasRates ? null : 'Invalid base',
    }),
  };

  callback(null, response);
};
