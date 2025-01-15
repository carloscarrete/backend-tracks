const express = require('express');
const cors = require('cors');
const app = express();
const dotenv = require('dotenv');
const {connectDB} = require('./config/mongo');

dotenv.config();
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.static('storage'));

const port = process.env.PORT || 3000;

/* Rutas */
app.use('/api/v1', require('./routes'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});