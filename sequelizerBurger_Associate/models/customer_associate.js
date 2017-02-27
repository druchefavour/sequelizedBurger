module.exports = function(sequelize, DataTypes) {
  var Customer = sequelize.define("Customer", {
    // Giving the Customer model a name of type STRING
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
    customer_name: {
      type: DataTypes.TEXT,
     //allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      // defaultValue is a flag that defaults a new burger devour value to false if
      // it isn't supplied one
      defaultValue: false,
    },
    // Foreign key added mannually
     //Customer_id: {
     //type: //DataTypes.INTEGER,
      //references: {
        //model: 'Customer',
        //key: id
      //}
     // },
     createdAt: {
        allowNull: false,
        type: DataTypes.DATE
      },
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
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
          Customer.hasMany(models.Burga, {
            onDelete: "cascade",
            onUpdate: 'cascade'
          });
        }
      }
    }
  );
  return Customer;
};

    //===============================
        
        
  