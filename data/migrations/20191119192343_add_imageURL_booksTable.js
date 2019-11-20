
exports.up = function (knex) {
	return knex.schema.table('books', books => {
		books
			.text('image_url')
			.nullable();

	});
}

exports.down = function (knex) {
	return knex.schema.table('books', books => {
		books.dropColumn('image_url');
	});
};