module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Customer model a name of type STRING
    customer_id: {
      type: DataTypes.INTEGER,
     allowNull: false,
    },
    customer_name: {
      type: DataTypes.TEXT,
     allowNull: false,
      len: [1]
    }
    },
    // Here we'll pass a second "classMethods" object into the define method
    // This is for any additional configuration we want to give our models
    {
      // We're saying that we want our Customer to have many Burgers
      classMethods: {
        associate: function(models) {
          // Associating Customer with Burgers
          // When a Customer is deleted, also delete any associated Burgers
          Customer.hasMany(models.Burger, {
            onDelete: "cascade"
          });
        }
      }
    }
  );
  return Customer;
};

    //===============================
        
        
  