const paypal = require("paypal-rest-sdk");

paypal.configure({
  mode: "sandbox",
  client_id: "AWrLP6MxXfWS1wnYmDcQOs-_Ux5OANzXK0-XGExIMY6OT8GWWms2YDLRTR4pqlEyqwjLxhrrWur3lvGe",
  client_secret: "ELIgH4Jy2IzGjsgfzuhyeK8l3xXYIotb9qO-8fPoujZvl3kNrYKEPxOF8aNJm7OH7uyqrn9e5kCVyqCS",
});

module.exports = paypal;
