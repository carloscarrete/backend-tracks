const express = require('express');
const cors = require('cors');
const app = express();
const morganBody = require('morgan-body');
const dotenv = require('dotenv');
const {connectDB} = require('./config/mongo');
const { loggerStream } = require('./utils/handleLogger');
const { dbConnectSQL } = require('./config/mysql');

const ENGINE_DB = process.env.ENGINE_DB;

dotenv.config();
(ENGINE_DB === 'nosql') ? connectDB() : dbConnectSQL();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));


morganBody(app, { noColors: true, stream: loggerStream, skip: function (req, res) { return res.statusCode < 400 }, filterParameters: ['password'] });


const port = process.env.PORT || 3000;

/* Rutas */
app.use('/api/v1', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});