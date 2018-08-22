'use strict';

module.exports.info = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'This API is purely for educational purposes. The data returned is not accurate.',
    }),
  };

  callback(null, response);
};

module.exports.latest = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless v1.0! Your function executed successfully!',
      // input: event,
    }),
  };

  callback(null, response);
};
