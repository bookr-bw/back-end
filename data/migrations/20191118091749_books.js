
exports.up = function (knex) {
	return knex.schema.createTable('books', books => {
		books.increments('id');
		books
			.text('title')
			.notNullable();
		books
			.text('description')
			.nullable();
		books
			.text('author')
			.nullable();

	});
}

exports.down = function (knex) {
	return knex.schema.dropTableIfExists('books');
};
