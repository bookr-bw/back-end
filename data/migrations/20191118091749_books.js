
exports.up = function(knex) {
    return knex.schema.createTable('books', books => {
        books.increments('id');
        books
            .string('title', 255)
            .notNullable();
        books
            .string('description', 255)
            .nullable();
        books
            .string('author', 255)
            .nullable();
    });
}

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('books');
};
