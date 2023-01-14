const express = require('express')
const app = express();
require('dotenv/config');
const morgan = require('morgan');
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
// http request
app.options('*', cors());

// for indentify post request json file format (Middleware)
app.use(bodyParser.json());
app.use(morgan('tiny'));

mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: process.env.DB_NAME
})
.then(() => {
    app.listen(process.env.PORT, () => {
        console.log('Server is listening.....')
    })
    console.log('Database connection is ready......');
})
.catch((err) => {
    console.log(err);
})

