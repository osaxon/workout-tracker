const express = require('express');
const mongoose  = require('mongoose');
const logger = require('morgan');

const apiRoutes = require('./routes/api.js');
const viewRoutes = require('./routes/view.js')

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workoutdb')

app.use(viewRoutes);
app.use(apiRoutes)

app.listen(PORT, () => {
    console.log(`App listening on post ${PORT}`);
})