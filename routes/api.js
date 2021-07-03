const router = require('express').Router();
const path = require('path');
const db = require('../models');

router.get('/api/workouts/range', (req, res) => {
    db.Workout.find({})
    .limit(7) // 7 days of data
    .sort({ day: 1 }) // order by most recent first
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(400).json(err);
    })
    
})

router.post('/api/workouts', (req, res) => {
    db.Workout.create(req.body)
    .then((data) => {
        res.json(data)
    })
    .catch((err) => {
        res.json(err)
    })
})


module.exports = router;