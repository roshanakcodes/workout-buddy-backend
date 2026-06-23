const express = require('express')
const {
    createworkout,
    getworkouts,
    getworkout,
    deleteworkout,
    updateworkout
} = require('../controllers/workoutcontroller')
const router = express.Router()

router.get('/', getworkouts)
//Get a single workout

router.get('/:id', getworkout)

router.post('/', createworkout)

router.delete('/:id', deleteworkout)

router.patch('/:id', updateworkout)


module.exports = router