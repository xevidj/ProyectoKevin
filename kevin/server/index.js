const express = require('express'); 1.1M (gzipped: 378.2k)
const volleyball = require('volleyball'); 107.4K (gzipped: 35.4k)


const app = express();

// const auth = require('./auth/index.js');
// const auth = require('./auth/index');

app.use(volleyball);


app.get('/', (req, res) => {
  res.json({
    message: '🦄🌈✨Hello World! 🌈✨🦄',
  });
});


function notFound(req, res, next) {
  res.status(404);
  const error = new Error('Not Found - ' + req.originalUrl);
  next(error);
}

function errorHandler(err, req, res, next) {
  res.status(res.statusCode || 500);
  res.json({
    message: err.message,
    stack: err.stack
  });
}

app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('Listening on port', port);
});
