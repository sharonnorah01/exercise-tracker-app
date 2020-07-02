const router = require('express').Router();
const Excercise = require('../models/exercise.model')

router.route('/').get((req, res)=>{
    Excercise.find()
    .then(exercises => res.json(exercises))
    .catch(error =>res.status(400).json('error', error));
})

router.route('/add').post((req, res)=>{
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Excercise({
        username, description, duration, date
    });
    newExercise.save()
    .then(()=>res.json('new exercise added'))
    .catch(err => res.status(400).json('error', err));
})

module.exports = router;