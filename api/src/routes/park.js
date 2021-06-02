const server = require("express").Router();
const axios = require("axios");

server.post("/lot", (req, res) => {
  const { method, url, token } = req.body;

  // const token =
  //   "Bearer mi5qSSqdhmrNXBjLq5MBMwuqcS0q8aE4u52fwqrG8CkrBjjksgdV8ZblHdh4ThtDqQVFapfOwrCqadcTH4sJIMhQgEcWpc0bK_9ms_rJ1H-xMT1Amp4tmH_PhAg3X3Yx";

  // const url =
  //   "https://api.yelp.com/v3/businesses/search?term=parking&sort_by=rating&location=indiana";
  // const method = "get";

  var config = {
    method: method,
    url: url,
    headers: {
      Authorization: token,
    },
  };

  axios(config)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
});

module.exports = server;
