# sequelizedBurger
Use Sequelize to update the Eat-A-Burger app

* This Project involves Sequelizing the Burger app reposed in https://github.com/druchefavour/burger - ![GitHub](https://github.com/druchefavour/burger)

* The github folder for this project is called sequelizedBurger. Inside the folder is a copy of the contents of the 'burger' project directory 

* To create the required sequel file run sequelize init in the terminal.

# TIER 1

* Remove all references to the vanilla MySQL queries and replace them with Sequelize queries. This includes:
 	* Replacing the MySQL Burger model (burger.js) with a Sequelized equivalent
 	* Editing the model and initial migration file to make the burger's devoured field carry a default value of false
 	* Including a sync script in server.js to sync the models
 	* Editing the config.json file created by running sequelize init to include the database configurations. (The JawsDB details is placed in the production property of the json file; while the details of the local database go in the developer property)
 	* Removing the old ORM file, as well as any references to it in burgers_controller.js. Replacing those references with Sequelize's ORM method
* The outlook of the app after completion is:
![Image of Eat-A-Burger-App](https://github.com/druchefavour/sequelizedBurger/blob/master/public/assets/images/app_pic.png)
