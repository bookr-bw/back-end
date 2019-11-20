
exports.seed = function (knex, Promise) {
	return knex('books').insert([
		{ title: "Salt, Fat, Acid, Heat: Mastering the Elements of Good Cooking", description: "Just reading Salt, Fat, Acid, Heat will make you a better cook, adept at seasoning, balancing, understanding what it really is you’re doing and why... Make room on the bedside table—and the countertop.", author: "Samin Nosrat", image_url: "https://images-na.ssl-images-amazon.com/images/I/515vfwlf2vL._SX396_BO1,204,203,200_.jpg" },
		{ title: "Wrecking Ball (Diary of a Wimpy Kid Book 14) ", description: "An unexpected inheritance gives Greg Heffley’s family a chance to make big changes to their house. But they soon find that home improvement isn’t all it’s cracked up to be.", author: "Jeff Kinney", image_url: "https://images-na.ssl-images-amazon.com/images/I/51S-kDF-fXL._SX340_BO1,204,203,200_.jpg" },
		{ title: "Where the Crawdads Sing", description: " The story is set in the 1950s and revolves around a young woman named Kya Clark, who is from extremely rural North Carolina. Known by others as the Marsh Girl, she lives alone in nature—but the draw of other people, and specifically love, brings her into contact with the greater world. This novel has a mystery at its core, but it can be read on a variety of levels. ", author: "Delia Owens", image_url: "https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._SX330_BO1,204,203,200_.jpg" },
		{ title: "The Guardians: A Novel", description: "Terrific…affecting…Grisham has done it again.  Such creative longevity is not that unusual in the suspense genre, but what is rare is Grisham’s feat of keeping up the pace of producing, on average, a novel a year without a notable diminishment of ingenuity or literary quality.", author: "John Grisham", image_url: "https://images-na.ssl-images-amazon.com/images/I/51U2hIUQgqL._SY346_.jpg" },
		{
			title: "Guinness World Records 2020",
			description: "In a series of 11 fact-packed chapters, we introduce you to the record-holders who’ve pushed the boundaries of what’s possible",
			author: "Guinness World Records",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/511w4HUthdL._SX374_BO1,204,203,200_.jpg",
		},
		{
			title: "Educated: A Memoir",
			description: "Westover has somehow managed not only to capture her unsurpassably exceptional upbringing, but to make her current situation seem not so exceptional at all, and resonant for many others.",
			author: "Tara Westover",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/41%2BaN7ZbS9L._SX327_BO1,204,203,200_.jpg",
		},
		{
			title: "Guts ",
			description: "Raina wakes up one night with a terrible upset stomach. Her mom has one, too, so it's probably just a bug. Raina eventually returns to school, where she's dealing with the usual highs and lows: friends, not-friends, and classmates who think the school year is just one long gross-out session.",
			author: "Raina Telgemeier",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/314HhTs9P9L._SX342_BO1,204,203,200_.jpg",
		},
		{
			title: "Olive, Again",
			description: "In thirteen poignant interconnected stories, Strout follows the cantankerous, truth-telling Mainer as she ages, experiencing a joyful second marriage and the evolution of her difficult relationship with her son. In her blunt yet compassionate way, Olive grapples with loneliness, infidelity, mortality and the question of whether we can ever really know someone—ourselves included",
			author: "Elizabeth Strout",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/51fu2JUE-1L._SX327_BO1,204,203,200_.jpg",
		},
		{
			title: "I Really Needed This Today: Words to Live By",
			description: "From New York Times bestselling author and beloved Today show co-host Hoda Kotb comes an inspiring collection of quotes--drawn from her own personal favorites featured on her enormously popular Instagram account--that offer wisdom, courage, and hope.",
			author: "Hoda Kotb",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/41hODrqrfBL._SX386_BO1,204,203,200_.jpg",
		},
		{
			title: "Talking to Strangers: What We Should Know About the People We Don't Know",
			description: "Malcolm Gladwell, host of the podcast Revisionist History and author of the number-one New York Times best seller Outliers, reinvents the audiobook in this immersive production of Talking to Strangers, a powerful examination of our interactions with people we don't know.",
			author: "Malcolm Gladwell",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/41plY9%2B1OrL._SX342_.jpg",
		},
		{
			title: "The Body: A Guide for Occupants",
			description: "Bill Bryson once again proves himself to be an incomparable companion as he guides us through the human body--how it functions, its remarkable ability to heal itself, and (unfortunately) the ways it can fail.",
			author: "Bill Bryson",
			image_url: "https://images-na.ssl-images-amazon.com/images/I/41aIidpbKwL._SX340_BO1,204,203,200_.jpg",
		}

	]);
};
