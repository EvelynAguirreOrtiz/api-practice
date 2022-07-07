import React, { useState } from "react";

import Container from "../components/Container";
import SearchBar from "../components/SearchBar";
import Grid from "../components/Grid";

export default function Home() {
	const [heroes, setHeroes] = useState([]);

	return (
		<Container>
			<h1>Discover Marvel Heroes</h1>
			<SearchBar />
			<Grid>
				<div>1</div>
			</Grid>
		</Container>
	);
}
