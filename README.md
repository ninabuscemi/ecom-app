# Ecommerce Application Back-End

## Description

For this project, the objective was the create a back-end application for an ecommerce website using an Express.js API to connect with a MySQL database using Sequelize.

## User Story

```md
AS A manager at an internet retail company
I WANT a back end for my e-commerce website that uses the latest technologies
SO THAT my company can compete with other e-commerce companies
```

## Acceptance Criteria

```md
GIVEN a functional Express.js API
WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
THEN I am able to connect to a database using Sequelize
WHEN I enter schema and seed commands
THEN a development database is created and is seeded with test data
WHEN I enter the command to invoke the application
THEN my server is started and the Sequelize models are synced to the MySQL database
WHEN I open API GET routes in Insomnia for categories, products, or tags
THEN the data for each of these routes is displayed in a formatted JSON
WHEN I test API POST, PUT, and DELETE routes in Insomnia
THEN I am able to successfully create, update, and delete data in my database
```

## Installation
- Write your credentials for the database into the .env file
- Run SQL commands in schema.sql
- Exit SQL server
- Open the terminal and run commands:
     
```
node seeds/index.js
```
``` 
node server.js
```
## Demo

[ScreenTastify Link](https://app.screencastify.com/v3/watch/lt0zrlkMrnKlYiNg101G)

## Tests
The application was test with Insomnia.
  
## License
The project is under MIT License.
 
## Questions
If you have any questions regarding the project, please, feel free to contact me:
- GitHub: [ninabuscemi](https://github.com/ninabuscemi)
- Email: <ngbuscemi@gmail.com>