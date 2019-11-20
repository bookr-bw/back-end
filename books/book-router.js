const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Books = require("./book-model");
const authenticate = require('../middleware/auth-middleware.js');

//will use api/books will get a list of all books in database
router.get("/", authenticate, (req, res) => {
	Books.find()
		.then(books => {
			res.status(200).json(books);
		})
		.catch(err => {
			res.status(500).json({ message: "There was a server error please try again soon!" })
		});
})

router.get("/:id", authenticate, (req, res) => {
	let id = req.params.id
	Books.findById(id)
		.then(book => {
			if (book) {
				res.status(200).json(book)
			} else {
				res.status(400).json({ message: " No book with that id" })
			}
		}).catch(error => {
			res.status(500).json({ message: "There was a server error please try again soon" })
		})
})

router.delete("/:id", authenticate, (req, res) => {
	let { id } = req.params;
	Books.remove(id)
		.then(deletedBook => {
			if (deletedBook) {
				res.status(200).json({ deletedBook })
			} else {
				res.status(404).json({ message: " No book with that id" })
			}
		}).catch(error => {
			res.status(500).json({ message: "There was a server error please try again soon!" })
		})
})



module.exports = router;







