
exports.seed = function(knex, Promise) {
  return knex('users').insert([
    // species_id must match valid species
    { username: "Test1", password: "Test1"},
    { username: "Test2", password: "Test2"},
    { username: "Test3", password: "Test3"},
    { username: "Test4", password: "Test4"}
  ]);
};
