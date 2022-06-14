'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const statusdeleteRoutes = require('./routes/statusdeleteRoutes');
const roleRoutes = require('./routes/roleRoutes');
const statusRoutes = require('./routes/statusRoutes');
const statuspaymentRoutes = require('./routes/statuspaymentRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const clientRoutes = require('./routes/clientRoutes');
const chatRoutes = require('./routes/chatRoutes');
const typeRoutes = require('./routes/typeRoutes')

const app = express();

app.use(cors());
app.use(express.json({extended: true, limit: '50mb'}));
app.use(bodyParser.json());

app.use('/api', userRoutes.routes);
app.use('/api', statusdeleteRoutes.routes);
app.use('/api', roleRoutes.routes);
app.use('/api', statusRoutes.routes);
app.use('/api', statuspaymentRoutes.routes);
app.use('/api', applicationRoutes.routes);
app.use('/api', clientRoutes.routes);
app.use('/api', chatRoutes.routes);
app.use('/api', typeRoutes.routes)


app.listen(config.port, () => console.log('Server is listening on http://localhost:' + config.port));