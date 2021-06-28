const express = require('express');
const logger = require('morgan');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'))


app.listen(PORT, () => {
    console.log(`App listening on post ${PORT}`);
})