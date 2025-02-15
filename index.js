const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

var quotes = require('random-movie-quotes')

app.get('/quote', (req, res) => {
  res.json({
    quote: quotes.getQuote()
  });
});


app.listen(port, () => console.log(`Awesome app listening on port ${port}!`));