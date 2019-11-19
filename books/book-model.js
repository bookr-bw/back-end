const db = require('../data/dbConfig');

module.exports = {
	find,
	findBy,
	findById,
	remove
}
function find() {
	return db('books')
}

function findBy(filter) {
	return db('books').where(filter);
}

function findById(id) {
	return db('books')
		.where({ id })
		.first();
}

function remove(id) {
	return db('books')
		.where("id", id)
		.del();
}

