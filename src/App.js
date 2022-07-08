import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./routes/Home";
import HeroDetails from "./routes/HeroDetails";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path={"/"} element={<Home />} />
				<Route path={"/:id"} element={<HeroDetails />} />
			</Routes>
			<Footer />
		</Router>
	);
}

export default App;
