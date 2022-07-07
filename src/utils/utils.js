const API_URL = process.env.REACT_APP_BASE_URL;

const fetchHeroes = async (value) => {
	let baseUrl = `${API_URL}/v1/public/characters`; // api from docs

	let ts = Date.now().toString();
	let apiKey = process.env.REACT_APP_API_KEY;
	let privateKey = process.env.REACT_APP_PRIVATE_KEY;
	let hash = getHash(ts, privateKey, apiKey);

	let url = `${baseUrl}?ts=${ts}&apiKey=${apiKey}&hash=${hash}&nameStartsWith=${value}`;

	try {
		let response = await fetch(url);
		console.log(data);
		let data = await response.json();
		return data;
	} catch (err) {
		console.error(err);
		return;
	}
};

export { fetchHeroes };
