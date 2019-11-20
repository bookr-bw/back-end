# Back-End For Bookr Application


Bookr is your source for all things book review!  Bookr allows you to utilize the power of your peers to help you narrow down  new books for you to read based on suggestions and ratings from those in this social platform. Allow users an easy and engaging way to browse new books and invites them to participate with the site and makes finding a new book an enjoyable process!

# BaseURL 
## https://bookr-bw-app.herokuapp.com/

# Endpoints

## User Register and Login
|Request Type|	Endpoint	|Description|
|:---------:|:-----------:|:---------------:|
|POST	|/api/users/register|	Creates New User and Gives Token|
|POST	|/api/users/login	|Logins previously registered user and Gives Token|
|GET	|/api/users/	|Once User has a token they are able to retrieve a list of all users|
|GET	|/api/users/:id	|Once User has a token they are able to retrieve a user their specific id in the database|

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


#### A GET request to the api/users/:id endpoint returns an object as follows:
```javascript
{
  "id": 1,
  "username": "Test1"
}
```
### A GET request to api/users for a list of all users returns an array of objects as follows:
```javascript
[
  {
    "id": 1,
    "username": "Test1"
  },
  {
    "id": 2,
    "username": "Test2",
  },
  {
    "id": 3,
    "username": "Test3",
  }

]
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
    "title": "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking",
    "description": "Just reading Salt, Fat, Acid, Heat will make you a better cook, adept at seasoning, balancing, understanding what it really is you’re doing and why... Make room on the bedside table—and the countertop.",
    "author": "Samin Nosrat",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/515vfwlf2vL._SX396_BO1,204,203,200_.jpg"
  },
  {
    "id": 2,
    "title": "Wrecking Ball (Diary of a Wimpy Kid Book 14) ",
    "description": "An unexpected inheritance gives Greg Heffley’s family a chance to make big changes to their house. But they soon find that home improvement isn’t all it’s cracked up to be.",
    "author": "Jeff Kinney",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/51S-kDF-fXL._SX340_BO1,204,203,200_.jpg"
  },
  {
    "id": 3,
    "title": "Where the Crawdads Sing",
    "description": " The story is set in the 1950s and revolves around a young woman named Kya Clark, who is from extremely rural North Carolina. Known by others as the Marsh Girl, she lives alone in nature—but the draw of other people, and specifically love, brings her into contact with the greater world. This novel has a mystery at its core, but it can be read on a variety of levels. ",
    "author": "Delia Owens",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._SX330_BO1,204,203,200_.jpg"
  },
  {
    "id": 4,
    "title": "The Guardians: A Novel",
    "description": "Terrific…affecting…Grisham has done it again.  Such creative longevity is not that unusual in the suspense genre, but what is rare is Grisham’s feat of keeping up the pace of producing, on average, a novel a year without a notable diminishment of ingenuity or literary quality.",
    "author": "John Grisham",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/51U2hIUQgqL._SY346_.jpg"
  },
  {
    "id": 5,
    "title": "Guinness World Records 2020",
    "description": "In a series of 11 fact-packed chapters, we introduce you to the record-holders who’ve pushed the boundaries of what’s possible",
    "author": "Guinness World Records",
    "image_url": "https://images-na.ssl-images-amazon.com/images/I/511w4HUthdL._SX374_BO1,204,203,200_.jpg"
  }
]
```

### GET One Book
#### A GET request to the api/books/:id endpoint where id is the id of the individual book returns object as follows:
```javascript
{
  "id": 4,
  "title": "The Guardians: A Novel",
  "description": "Terrific…affecting…Grisham has done it again.  Such creative longevity is not that unusual in the suspense genre, but what is rare is Grisham's feat of keeping up the pace of producing, on average, a novel a year without a notable diminishment of ingenuity or literary quality.",
  "author": "John Grisham",
  "image_url": "https://images-na.ssl-images-amazon.com/images/I/51U2hIUQgqL._SY346_.jpg"
}
```
### DELETE One Book
#### A DELETE request to the api/books/:id endpoint where id is the id of the individual book returns an object as follows for a successful deletion:
```javascript
{
  "Deleted": 1
}
```
#### If there is no book with that id a message returned will be thus: 
```javascript
{
  "message": " No book with that id"
}
```

