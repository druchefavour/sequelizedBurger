module.exports = function(sequelize, DataTypes) {
  var Burga = sequelize.define("Burga", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    burger_name: {
      type: DataTypes.TEXT,
      //allowNull: false,
      validate: {
        len: [1]
      }
      //len: [1]
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
          // A Customer (foreignKey) is required or a Burger can't be consumed
          Burga.belongsTo(models.Customer, {
            //foreignKey: {
              //allowNull: false
           // }
          });
        }
      }
    }
    )
  return Burga;
  };
//=========================
