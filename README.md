# Full Stack MVP Project. My Amigurumi Keeper App

## About the project

In this repository, you will find my first MVP full stack project, based on adding, storing and displaying different amigurumi and crochet patterns.

## Technologies and libraries used

Back End:

-          API server using Node/Express

-          MySql 2 Database

-          Axios library

Front End:

-          React

-          Bootstrap

## Getting Started

- In in git bash execute `git clone git@github.com:memi-bonagui/amigurumi-mvp.git` to clone the project

### Database Prep

Access the MySQL interface in your terminal by running mysql -u root -p

You can find the files to configure the db under folder `server/data/init_db`. In here, you'll find my db name (my_mvp) and all the queries required for MySql

Run npm run migrate in the project folder of this repository, in a new terminal window. This will create a table called 'amigurumis' and a second table with a foreign key called “pieces” in your database.

### Dependencies / server

You need to still be cd into the server folder.

Run `npm install` to install Express dependencies.
Run `npm run start` to start your server.

The server Will run on port http://localhost:4000

### Dependencies / client

In a different terminal:

Once you installed back end dependencies, follow these steps to prepare the front end:

Do “cd ..” to go back to the main Project of the repository.

Now, cd into the client folder

Run again `npm install` to install all React dependencies.

Run `npm run dev` to launch the app in your browser.

The app Will run on http://localhost:5173 as the default port (or another port if this is not available)

## Functionality

This app is able to add different kind of crochet patterns, mostly dedicated to amigurumis (japanese art of knitting or crocheting small, stuffed yarn creatures).

It will also store all this patterns in an organized gallery, and the user is able to delete them if needed.

### Folder structure

The client, inside the src folder, has 3 principal folders: views, components and components_css.

The views folder includes 2 components, one for the PatternGallery display and the other for the CreateAmigurumi forms.

The components folder includes in total 13 components. 11 of them are children of the views components (Banner and Homepage are children from App)

The components_css includes all CSS files from their respective components.

### Browser structure

In the main Home page, there are 2 principal views: The Gallery Pattern and the Add Amigurumi Forms were you’ll add your new amigurumi pattern

This app is able to add different kind of crochet patterns, mostly dedicated to amigurumis (japanese art of knitting or crocheting small, stuffed yarn creatures).

It will also store all this patterns in an organized gallery, and the user is able to delete them if needed.

In the main Home page, there are 2 principal views: The Gallery Pattern and the Add Amigurumi Forms were you’ll add your new amigurumi pattern

### The Add Amigurumi Forms

Two different forms, one for the general information of the amigurumi, and the other to specify about the parts that conform this amigurumi

Once you submit the first form, it will display next to it and allow you to complete the second form. This Will also be displayed beneath the amigurumi information

Automatically, all this information you submit (patterns) Will be stored and available on the Pattern Gallery

### The Gallery Pattern

Shows a grid of your stored pattern cards. Here the user will be able to delete the selected pattern, or fully display the selected amigurumi / crochet pattern.

## About the queries

The routes are in server/routes/amigurumis.js

Use Postman to test the current queries. After starting the server, check GET / on http://localhost:4000

- [ ] GET `/api/amigurumis` should retrieve all amigurumis.

- [ ] GET `/api/amigurumis/pieces` should retrieve all amigurumi´s pieces.

- [ ] GET `/api/amigurumis/:id` should retrieve all amigurumis with their pieces.

- [ ] GET `/api/amigurumis/:id/pieces` should retrieve all pieces from an specific amigurumi.

- [ ] POST `/api/amigurumis` should create a new amigurumi.

  - To test your route, use Postman to see if GET `/api/amigurumis ` returns your new resources.

- [ ] PATCH`/api/amigurumis/:id/isCompleted` should update once a proyect is completed.

  - This feature is still on development.

- [ ] PATCH `/api/ amigurumis /:id/isFavorite` should update if the selected Project is favorite.

  - This feature is still on development.

- [ ] DELETE `/api/amigurumis/:id` should delete an amigurumi pattern, with all their pieces.

  - To test your route, use Postman to see if GET `/api/amigurumis` does not include your new resources.

- [ ] DELETE `/api/amigurumis/:id/:PiecesId` should delete an specific piece pattern from an specific amigurumi.

  - This feature is still on development.

## Notes

_This is a student project that was created at [CodeOp](http://CodeOp.tech), a full stack development bootcamp in Barcelona._
