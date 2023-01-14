const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Fuel app </h1>');
})

app.listen(3000, () => {
    console.log('Server is listening.....')
})
