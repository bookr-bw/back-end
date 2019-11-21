const request = require('supertest');

const { validateReview } = require("./review-helpers");

describe("review model", function () {
  it("it should fail a bad review", function () {

    const badReview = {
      'noProperty': 'ofMine'
    };

    expect(validateReview(badReview).isSuccessful).toBe(false);


  });

  it("should allow a good review", function () {

    const goodReview = { rating: 2, review: "This book was not good", user_id: 1, books_id: 2 };
    expect(validateReview(goodReview).isSuccessful).toBe(true);

  })
});