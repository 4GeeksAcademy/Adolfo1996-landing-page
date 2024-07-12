import React from "react";
import Navbar from "./navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Card from "./Card.jsx";
import Footer from "./Footer.jsx";
//include images into your bundle
//create your first component
const Home = () => {
	return (
		 <>
		<Navbar/>
		<Jumbotron/>
		<Card/>
		<Footer/>
		</>
		);
};

export default Home;
