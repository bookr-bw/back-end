# Back-End For Bookr Application


Bookr is your source for all things book review!  Bookr allows you to utilize the power of your peers to help you narrow down  new books for you to read based on suggestions and ratings from those in this social platform. Allow users an easy and engaging way to browse new books that invites them to participate with the site and makes finding a new book an enjoyable process!

# BaseURL 
## https://bookr-bw-app.herokuapp.com/

# Endpoints

## User Register and Login
|Request Type|	Endpoint	|Description|
|:---------:|:-----------:|:---------------:|
|POST	|/api/users/register|	Creates New User and Gives Token|
|POST	|/api/users/login	|Logins previously registered user and Gives Token|
|GET	|/api/users/	|Once User has a token is able to retrieve a list of all users|
* JSON Web Tokens Are Used to Verify Users to all protected routes to access further resources for Bookr


###All endpoints below require an Authentication Token held within Local Storage**


## Book Reviews
|Request Type	|Endpoint	|Description|
|:---------:|:-----------:|:--------------:|
This endpoint allows user to get all book reviews related to a book by that book id and to post a review to a book already within the database.
|GET	|/api/books/:id	|Returns all Book Reviews based on passed in Book ID|
|POST|/api/books/:id		|Creates A New Book Review using Book ID|

## Books
|Request Type	|Endpoint	|Description|
|:---------:|:----------:|:---------------:|
|GET|   /api/books	|Return All Books in Database|
|GET|	/api/books/:id|	Returns Book in Database with that ID|
|DELETE| /api/books/:id|Deletes a book with this id from the Database|
# Data Models

## Authentication
### Register

#### A POST request to the /api/user/login and api/user/register endpoints expect to recieve an object as follows: (EVERY FIELD IS REQUIRED)
```javascript
{
    "username": "username"
    "password": "password"
}
```
### A POST Request to api/user/login and api/user/register returns an object as follows
```javascript
{
  "user": "Not A Real User",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IlRlc3QgVXNlcjkiLCJ1c2VyX2lkIjo1LCJpYXQiOjE1NzQxODU2MTksImV4cCI6MTU3NDI3MjAxOX0.svhPHRwLVlGlWPPhqN63FTh1prqfy2W7NnqG1v444ts"
}
```
**There is validation on the back End where user name must be at least 2 characters long and password must be at least 4 characters long when registering.
------------------------------------------------
### Adding a Book Review
#### A POST request to the /api/books endpoint expects to receive an object as follows. There is a check in the Back End to confirm the user has filled out the data fields needed.
```javascript
{
    "rating": "integer value"   //this value is an integer value based on # of stars user leaves in review
    "review": "This is a body of text user leaves in reviewing the book!"
}
```
### Looking Up One Book Review
#### A GET request to the /api/reviews/:id endpoint where id is the book id returns an object as follows if there are more than one book review for that book id and just one will be an array with one object.
```javascript
[
  {
    "id": 1,
    "rating": 1,
    "review": "Worst book ever",
    "books_id": 1,
    "user_id": 1
  },
  {
    "id": 4,
    "rating": 4,
    "review": "Not bad",
    "books_id": 1,
    "user_id": 2
  }
]
```

### Get All Books
#### A GET request to the api/books endpoint returns an an array of objects as follows:
```javascript
[
  {
    "id": 1,
    "title": "Best Book Ever",
    "description": "This is the best book ever",
    "author": "Author Jeff"
  },
  {
    "id": 2,
    "title": "Programming 101",
    "description": "Learn how to program",
    "author": "Author Richard"
  },
  {
    "id": 3,
    "title": "Learning Node",
    "description": "Node for Noobs",
    "author": "Author Nicole"
  },
  {
    "id": 4,
    "title": "Redux",
    "description": "Making Redux not suck",
    "author": "Author Ryan"
  },
  {
    "id": 5,
    "title": "React React React",
    "description": "React for beginners",
    "author": "Author Thomas"
  }
]
```

### GET One Book
#### A GET request to the api/books/:id endpoint where id is the id of the individual book returns object as follows:
```javascript
{
  "id": 4,
  "title": "Redux",
  "description": "Making Redux not suck",
  "author": "Author Ryan"
}
```


