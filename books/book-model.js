const db = require('../data/dbConfig');

module.exports = {
	find,
	findBy,
	findById,
	del
};

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

function del(id) {
	return db(books)
		.where(findById(id))
		.delete(id)
} 