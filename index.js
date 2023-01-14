const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');
mongoose.set('strictQuery', true);

app.use(cors());
// http request
app.options('*', cors());

// for indentify post request json file format (Middleware)
app.use(bodyParser.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;

// imported routers
const shedRouter = require('./routers/sheds');
const vehicleRouter=require('./routers/vehicles');

// set api uril
app.use(`${api}/sheds`, shedRouter);
app.use(`${api}/vehicles`,vehicleRouter);

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

