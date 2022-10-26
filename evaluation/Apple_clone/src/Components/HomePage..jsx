import React from 'react';
import Footer from "./Home/Footer";
import GridProduct from "./Home/GridProduct";
import HomeSlider from "./Home/HomeSlider";
import Iphone12 from "./Home/Iphone12";
import Iphone14 from "./Home/Iphone14";
import Landing from "./Home/Landing";
import Navbar from "./Home/Navbar";
import Particle from "./Home/Particle";
function HomePage() {
    return (
        <div>
            
       <Landing />
       <Iphone12 />
       <Iphone14 />
       <GridProduct />
       <HomeSlider />
        <Footer/>

        </div>
    );
}

export default HomePage;