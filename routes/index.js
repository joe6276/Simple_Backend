const {Router} = require('express')
const { getTrainees, addTrainee, getaTrainee, deleteTrainee, updateTrainee } = require('../controller')

const router= Router()

router.get('/', getTrainees)
router.post('/', addTrainee)
router.get('/:id', getaTrainee)
router.put('/:id', updateTrainee)
router.delete('/:id', deleteTrainee)

module.exports=router