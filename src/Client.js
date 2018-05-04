// Fetch Session Token
function fetchToken(callback) {
	fetch("https://opentdb.com/api_token.php?command=request")
		.then((res) => res.json())
		.then(callback)
}

// Reset Session Token
function resetToken(token, callback) {
	fetch(`https://opentdb.com/api_token.php?command=reset&token=${token}`)
		.then((res) => res.json())
		.then(callback)
}

// Fetch the categories
function fetchCategories(callback) {
	fetch("https://opentdb.com/api_category.php")
		.then((res) => res.json())
		.then(callback)
}

// Fetch 10 questions
function fetchQuestions(category, difficulty, token, callback) {
	fetch(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&token=${token}`)
		.then((res) => res.json())
		.then(callback)
}

const Client = {
	fetchToken,
	resetToken,
	fetchCategories, 
	fetchQuestions
};
export default Client;