const models = require('../models')

const getAllVillains = async (request, response) => {
  try {
    const villains = await models.villains.findAll()

    return response.send(villains)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villains, please try again')
  }
}

const getVillainBySlug = async (request, response) => {
  try {
    const { slug } = request.params
    const matchedVillain = await models.villains.findOne({ where: { slug } })

    return matchedVillain
      ? response.send(matchedVillain)
      : response.sendStatus(404)
  } catch (error) {
    return response.status(500).send('Unable to retrieve villain, please try again')
  }
}

const saveNewVillain = async (request, response) => {
  const { name, movie, slug } = request.body

  if (!name || !movie || !slug) {
    return response.status(400).send('The following parameters are required: name, movie, slug')
  }

  const newVillain = await models.villains.create({ name, movie, slug })

  return response.status(201).send(newVillain)
}

module.exports = { getAllVillains, getVillainBySlug, saveNewVillain }
