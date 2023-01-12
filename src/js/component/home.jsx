import React from "react";
import Card from "./Card.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";

//include images into your bundle


//create your first component
const Home = () => {
	return (
		<>
<Navbar/>
    <div className="container">
            <Jumbotron/>


        <div className="d-flex mb-3">

            <div className="mx-auto ms-0 "><Card/></div>
            <div className="mx-auto "><Card/></div>
            <div className="mx-auto "><Card/></div>
            <div className="mx-auto me-0 "><Card/></div>








        </div>
    </div>
        <Footer/>
		</>
	)
};
export default Home;
