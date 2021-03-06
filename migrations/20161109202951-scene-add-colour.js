module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Scenes',
      'colour',
      {
        type: Sequelize.STRING(7),
        allowNull: false,
        defaultValue: ""
      }
    );
  },

  down: function (queryInterface) {
    return queryInterface.removeColumn('Scenes', 'colour');
  }
};
