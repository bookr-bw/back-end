module.exports = {
	validateReview
};

function validateReview(reviews) {
	let errors = [];

	if (!reviews.rating || reviews.rating.length < 1) {
		errors.push("Please include a rating!");
	}

	if (!reviews.review || reviews.review.length < 9) {
		errors.push("Please include a review that is at least a sentence. ");
	}

	return {
		isSuccessful: errors.length > 0 ? false : true,
		errors
	};
}
