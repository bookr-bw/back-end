const bcrypt = require("bcryptjs");

exports.seed = function (knex, Promise) {
	return knex('users').insert([
		// species_id must match valid species
		{ username: "Test1", password: bcrypt.hashSync("Test1", 14) },
		{ username: "Test2", password: bcrypt.hashSync("Test2", 14) },
		{ username: "Test3", password: bcrypt.hashSync("Test3", 14) },
		{ username: "Test4", password: bcrypt.hashSync("Test4", 14) },
		{ username: "Logan", password: bcrypt.hashSync("password", 14) },
		{ username: "Robert", password: bcrypt.hashSync("password", 14) },
		{ username: "Aaron", password: bcrypt.hashSync("password", 14) },
		{ username: "Amber", password: bcrypt.hashSync("password", 14) },
		{ username: "Emily", password: bcrypt.hashSync("password", 14) },
		{ username: "Olivia", password: bcrypt.hashSync("password", 14) },
		{ username: "William", password: bcrypt.hashSync("password", 14) },
		{ username: "Jacob", password: bcrypt.hashSync("password", 14) },
		{ username: "Emma", password: bcrypt.hashSync("password", 14) },
		{ username: "Sarah", password: bcrypt.hashSync("password", 14) },
		{ username: "Daniel", password: bcrypt.hashSync("password", 14) }
	]);
};
