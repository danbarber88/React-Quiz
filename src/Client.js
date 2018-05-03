// Fetch the categories
function fetchCategories(callback) {
	fetch("https://opentdb.com/api_category.php")
		.then((res) => res.json())
		.then(callback)
}

// Fetch 10 questions
function fetchQuestions(category, difficulty, callback) {
	fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}`)
		.then((res) => res.json())
		.then(callback)
}

const Client = { 
	fetchCategories, 
	fetchQuestions
};
export default Client;