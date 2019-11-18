
exports.seed = function(knex, Promise) {
  return knex('reviews').insert([
    { rating: 1 , review: "Worst book ever", user_id: 1, books_id: 1},
    { rating: 2 , review: "Meh", user_id: 1, books_id: 2},
    { rating: 4 , review: "Better than expected", user_id: 1, books_id: 3},
    { rating: 4 , review: "Not bad", user_id: 2, books_id: 1},
    { rating: 5 , review: "I really enjoyed this book", user_id: 3, books_id: 2},
  ]);
};
