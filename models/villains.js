const villains = (connection, Sequelize) => connection.define('villains', {
  id: { type: Sequelize.STRING },
  name: { type: Sequelize.STRING },
  movie: { type: Sequelize.STRING },
  slug: { type: Sequelize.STRING },
}, { paranoid: true })

module.exports = villains
