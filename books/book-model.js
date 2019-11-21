const db = require('../data/dbConfig');

module.exports = {
	find,
	findBy,
	findById,
	remove,
	add
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
	return db('reviews').where('books_id', id).del().then(deleted => {
		return db('books')
			.where("id", id)
			.del();
	});
}

async function add(book) {
	const [ id ] = await db("books").returning('id').insert(book, 'id');
  
	return findById(id);
  }

