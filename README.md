An example currency exchange API that is used in [Handlebar Labs'](http://www.handlebarlabs.com/) courses. This API is purely for educational purposes. The data returned is not accurate.

## Available Endpoints

- `/`: Returns general information about the API
- `/latest`: Returns conversion information for the base currency. Base currency can be passed via a `base` query string. Defaults to EUR. Example `/latest?base=USD`
