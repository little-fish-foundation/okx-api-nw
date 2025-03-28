const { RestClient } = require('okx-api-nw');

  // This example shows how to call this OKX API endpoint with either node.js, javascript (js) or typescript (ts) with the npm module "okx-api" for OKX exchange
  // This OKX API SDK is available on npm via "npm install okx-api"
  // ENDPOINT: /api/v5/tradingBot/grid/orders-algo-pending
  // METHOD: GET
  // PUBLIC: NO

const client = new RestClient({
    apiKey: 'apiKeyHere',
    apiSecret: 'apiSecretHere',
    apiPass: 'apiPassHere',
});

client.getGridAlgoOrderList(params)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  });
