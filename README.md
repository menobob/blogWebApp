# DEMO

https://blogitup.herokuapp.com/

# DESCRIPTION
A blogging web app that uses some of the latest web technologies. As a prototype, this web app currently allows users to:
 - **CREATE** posts.
 -  **DELETE** posts.
 -  **EDIT** posts.

# TECHNICAL DETAILS
Based on NodeJs, this app implements the full proper RESTful route convention. In addition, it is integrated with MongoDb for persistant data. Currently it is hosted on heroku and uses mLab MonboDB add-on for database storage.

## FRONT-END
 - EJS (Embedded Javascript Framework) for creating view templates.
 - Semantics UI (similar to bootstrap)
 - HTML/CSS
 
##  BACK-END
 - Express.js for the server side RESTful API implementation.
 - Mongoose framework used for interacting with mongoDb.
 - MongoDb (Database to store the post info etc.)

## REST API

| Name  | Path  | HTTP Verb  | Purpose  |
|---|---|---|---|
| Index   |  /blogs | GET  | Display all blogs  |
| New  | /blogs  | GET  | Display a new blog post form  |
| Create  | /blogs  |  POST | Create a new blog post  |
| Show  | /blogs/:id  | GET  | Show a specific blog  |
| Edit  | /blogs/:id/edit  | GET  | Display edit form for a specific blog  |
| Update  | /blogs/:id  | PUT  | Update a specific blog  |
| Destroy  | /blogs/:id  | DELETE  | Delete a specific blog  |
