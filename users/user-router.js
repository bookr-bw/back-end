const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("./users-model");
const { validateUser } = require("./user-helpers.js");
const authenticate = require('../middleware/auth-middleware.js');

//will use api/users/ and this endpoint will allow user to get a list of all users 
router.get("/", authenticate, (req, res) => {
	User.all()
		.then(users => {
			response.json(users);
		})
		.catch(err => response.send(err));
});

// for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
	let user = req.body;
	// always validate the data before sending it to the db
	const validateResult = validateUser(user);

	if (validateResult.isSuccessful === true) {
		const hash = bcrypt.hashSync(user.password, 14); // 2 ^ n
		user.password = hash;

		Users.add(user)
			.then(saved => {
				const token = getJwtToken(user);

				// 3: send the token to the client
				res.status(201).json({
					message: `Welcome ${user.username}! have a token...`,
					token
				})
			})
			.catch(error => {
				res.status(500).json(error);
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
				// 2: produce a token
				const token = getJwtToken(user);

				// 3: send the token to the client
				res.status(200).json({
					message: `Welcome ${user.username}! have a token...`,
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
		department: user.department
		//this will probably come from the database
	};

	const secret = process.env.JWT_SECRET || "This could be alphanumerically beautifully inside a torn horse 3 by 5 equals 38765!";

	const options = {
		expiresIn: "1d"
	};

	return jwt.sign(payload, secret, options);
}

module.exports = router;







