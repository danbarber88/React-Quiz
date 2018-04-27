// Fetch the categories
function fetchCategories(callback) {
	fetch("https://opentdb.com/api_category.php")
		.then((res) => res.json())
		.then(callback)
}

const Client = { fetchCategories };
export default Client;