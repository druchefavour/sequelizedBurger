module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.STRING,
      //allowNull: false,
      //validate: {
      //  len: [1]
     // }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new burger devour value to false if
      // it isn't supplied one
      defaultValue: false,
    },
    createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
    updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
  });
  return Burgers;
};