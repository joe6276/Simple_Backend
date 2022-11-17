const {v4} =require('uuid')
const trainees = [
  {
    id: '422606e2-5bb7-40a9-993b-683597dd73c7',
    name: 'John Doe',
    age: 124,
  },
]

const getTrainees = (req, res) => {
  res.status(200).send(trainees)
}
const addTrainee = (req, res) => {
  const body = req.body
  const id = v4()
  const trainee = { id, ...body }
  trainees.push(trainee)
  res.status(201).send({ message: 'User was created' })
}

const updateTrainee = (req, res) => {
  const { id } = req.params
  const body = req.body
  const index = trainees.findIndex((t) => t.id === id)
  if (index >= 0) {
    trainees[index] = { id, ...body }
    return res.status(200).json({ message: 'User Was Updated' })
  } else {
    return res.status(404).send({ message: 'User Not Found' })
  }
}

const deleteTrainee = (req, res) => {
  const { id } = req.params
  const index = trainees.findIndex((t) => t.id === id)
  if (index >= 0) {
    trainees.splice(index, 1)
    return res.status(200).json({ message: 'User Was Deleted' })
  } else {
    return res.status(404).send({ message: 'User Not Found' })
  }
}

const getaTrainee = (req, res) => {
  const { id } = req.params
  const trainee = trainees.find((t) => t.id === id)
  if (trainee) {
    return res.status(200).send(trainee)
  } else {
    return res.status(404).send({ message: 'User Not Found' })
  }
}


module.exports={
    getTrainees,
    getaTrainee,
    addTrainee,
    updateTrainee,
    deleteTrainee
}