const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { errors } = require('celebrate');
const cookieParser = require('cookie-parser');
const routes = require('./routes');
const auth = require('./middlewares/auth');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const { PORT = 3000 } = process.env;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

mongoose.connect('mongodb://127.0.0.1:27017/mestodb', {
  useNewUrlParser: true,
});

app.use('/', require('./routes/validation'));

app.use(auth);
app.use(routes);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(PORT);
});
