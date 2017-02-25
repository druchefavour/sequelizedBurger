module.exports = function(sequelize, DataTypes) {
  var Burgers = sequelize.define("Burger", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.TEXT,
      allowNull: false,
      len: [1]
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
    },
    {
      // We're saying that we want our Customer to have Burgers
      classMethods: {
        associate: function(models) {
          // An Author (foreignKey) is required or a Post can't be made
          Burgers.belongsTo(models.Customer, {
            foreignKey: {
              allowNull: false
            }
          });
        }
      }
    }
    )
  return Burgers;
  };
//=========================
