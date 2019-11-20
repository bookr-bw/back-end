const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./users-model");
const { validateUser } = require("./user-helpers.js");
const authenticate = require('../middleware/auth-middleware.js');

//will use api/users/ and this endpoint will allow user to get a list of all users 
router.get("/", authenticate, (req, res) => {
	Users.all()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => res.status(500).json(err));
});

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
	let user = req.body;
	// always validate the data before sending it to the db
	const validateResult = validateUser(user);

	if (validateResult.isSuccessful === true) {
		const hash = bcrypt.hashSync(user.password, 14);
		user.password = hash;

		Users.add(user)
			.then(saved => {
				const token = getJwtToken(user);

				// Send the token back to the client
				res.status(201).json({
					user: `${user.username}`,
					token
				})
			})
			.catch(error => {
				res.status(500).json('An error has occured in storing the user: ' + error);
			});
	} else {
		res.status(400).json({
			message: "Invalid information about the user, see errors for details",
			errors: validateResult.errors
		});
	}
});

router.post("/login", (req, res) => {
	let { username, password } = req.body;

	Users.findBy({ username })
		.first()
		.then(user => {
			if (user && bcrypt.compareSync(password, user.password)) {
				// Produce the token
				const token = getJwtToken(user);

				// Send the token to the client
				res.status(200).json({
					user: `${user.username}`,
					token
				});
			} else {
				res.status(401).json({ message: "Invalid Credentials" });
			}
		})
		.catch(error => {
			res.status(500).json(error.toString());
		});
});

function getJwtToken(user) {
	const payload = {
		username: user.username,
		user_id: user.id
	};

	const secret = process.env.JWT_SECRET || "This could be alphanumerically beautifully inside a torn horse 3 by 5 equals 38765!";

	const options = {
		expiresIn: "1d"
	};

	return jwt.sign(payload, secret, options);
}

module.exports = router;







