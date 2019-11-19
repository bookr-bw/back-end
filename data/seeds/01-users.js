const bcrypt = require("bcryptjs");

exports.seed = function(knex, Promise) {
  return knex('users').insert([
    // species_id must match valid species
    { username: "Test1", password: bcrypt.hashSync("Test1", 14)},
    { username: "Test2", password: bcrypt.hashSync("Test2", 14)},
    { username: "Test3", password: bcrypt.hashSync("Test3", 14)},
    { username: "Test4", password: bcrypt.hashSync("Test4", 14)}
  ]);
};
