const request = require('supertest');
const reviewModel = require('./review-model');
const bookModel = require('../books/book-model');


const db = require('../data/dbConfig');


describe("review model", function () {
  beforeAll(() => {
    db.migrate.rollback().then(() => {
       db.migrate.latest().then(() => {
          db.seed.run();
        });
    });
})

  beforeEach(async () => {
    return db('reviews').truncate();
  })
 

  afterAll(async () => {
    await db.migrate.rollback();
  });


  describe("insert()", function () {

    it("should insert a review", async function () {


      const review = await reviewModel.add({
        rating: 1,
        review: "Worst book ever",
        user_id: 1,
        books_id: 1,
      });

      const reviews = await db("reviews"); // read from db directly
      expect(reviews).toHaveLength(1); // at least we know one record was inserted
    });
  });
  describe("delete()", function () {
    it("should insert delete a review", async function () {



      const review = await reviewModel.add({
        rating: 1,
        review: "Worst book ever",
        user_id: 1,
        books_id: 1,
      }).then(review => {
        reviewModel.remove(review.id).then(removed => {
          db("reviews").then(reviews => {
            expect(reviews).toHaveLength(0);
          });
        });
      });

    });
  });
});