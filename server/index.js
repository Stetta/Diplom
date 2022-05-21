'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(express.json({extended: true}));
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);


app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));