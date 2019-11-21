const express = require("express");

const db = require("../data/dbConfig");

module.exports = {
	add,
	remove,
	update,
	find,
	findBy,
	findById,
};

async function add(review) {
	const [id] = await db("reviews").insert(review, 'id');

	return findById(id);
}

function remove(id) {
	return db("reviews")
		.where("id", id)
		.delete();
}

async function update(review) {
	return db("reviews")
		.where({ id: review.id })
		.update(review);
}

function find() {
	return db("reviews");
}

function findBy(filter) {
	return db("reviews")
		.join('users', 'users.id', 'reviews.user_id')
		.select('reviews.id', 'reviews.rating', 'reviews.review', 'reviews.books_id', 'reviews.user_id', 'users.username')
		.where(filter)
}

function findById(id) {
	return db("reviews")
		.where({ id })
		.first();
}