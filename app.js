const express = require('express');
const morgan = require('morgan');
require('dotenv/config');

const app = express();

// Middleware
app.use(morgan('tiny'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./routes/index'));

// Start server
app.listen(process.env.SERVER_PORT || 3000);
