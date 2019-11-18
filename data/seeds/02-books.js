
exports.seed = function(knex, Promise) {
  return knex('books').insert([
    { title: "Best Book Ever", description: "This is the best book ever", author: "Author Jeff"},
    { title: "Programming 101", description: "Learn how to program", author: "Author Richard"},
    { title: "Learning Node", description: "Node for Noobs", author: "Author Nicole"},
    { title: "Redux", description: "Making Redux not suck", author: "Author Ryan"},
    { title: "React React React", description: "React for beginners", author: "Author Thomas"}
  ]);
};
