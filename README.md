# Gobble up Ur Burger
A burger logger with MySQL, Node, Express, Handlebars and a homemade ORM `(Object-relational mapping)`


[Live Demo](https://burgergobbleup.herokuapp.com/)


## Overview

This App is a burger logger with MySQL, Node, Express, Handlebars and a homemade ORM, that follows the MVC design pattern; uses Node and MySQL to query and route data in  the app, and Handlebars to generate its HTML. 

[Express](https://www.npmjs.com/package/express)

[Express-Handlebars](https://www.npmjs.com/package/express-handlebars)

[MySql](https://www.npmjs.)


So Gobble Up Your Burger is a restaurant app that lets users input the names of burgers they'd like to eat. 

* Whenever a user submits a burger's name, the app will display the burger on the left side of the page, waiting to be eaten. 
* Each burger in the `waiting area` has a `Eat me!` button. When the user clicks it, the burger will move to the page's right side in to the `devoured area`.
* Each burger in the `devoured area` has a `Back!` button In case a user wants to eat ot again.
* The app stores every burger in a database, whether devoured or not.


## Settings

For local use:

1. install all the dependencies needed with **`$npm install`**  Note tha the file package.json already has what you need

2. Navigate to the app folder and start a console

3. Start Express server with `$ node server.js`

4. On your web browser go to `localhost:3000`

5. Enjoy




## COMMITS
**_Commit 10_**

Readme.md file update with all i formations about the app. Deploy to Heroku completed. See live Demo


**_Commit 9_**

Added data base settings to Heroku deploy

**_Commit 8_**

jQuery logic completed to interact with the web page and the data base.

**_Commit 7_**

Handlebars configuration completed page is rendered correctly.

**_Commit 6_**

test.html added to tes de final app's view to be replicated on Handelbars views. CSS file completed for styling.

**_Commit 5_**

Burger controller completed, not tested yet.


**_Commit 4_**

App set up completed: Server code created, configuration (connection to Data base and custom orm coded), model code created, controller settings added. Now app is able to listen at localhost and connect to Data base.

**_Commit 3_**

Data Base  connection setup, base queries created.

**_Commit 2_**

File structure created. package.json file 

created, npm dependencies installed

**_Commit 1_**

Initial commit, repository created
