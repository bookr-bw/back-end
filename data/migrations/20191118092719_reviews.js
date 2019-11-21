exports.up = function (knex) {
	return knex.schema.createTable("reviews", reviews => {
		reviews.increments("id");
		reviews.integer("rating");
		reviews.text("review");

		reviews
			.integer("books_id")
			.unsigned()
			.references("id")
			.inTable("books");

		reviews
			.integer("user_id")
			.unsigned()
			.references("id")
			.inTable("users");
	});
};

exports.down = function (knex) {
	return knex.schema.dropTableIfExists("reviews");
};
