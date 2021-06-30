const router = require('express').Router();
const path = require('path');
const db = require('../models');

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .then((data) => {
        console.log(data)
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
})


module.exports = router;