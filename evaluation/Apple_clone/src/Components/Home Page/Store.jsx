import React from 'react';
import Category from "./Category";
import Footer from "./Footer";
import GridProduct from "./GridProduct";
import HomeSlider from "./HomeSlider";
import Iphone12 from "./Iphone12";
import Iphone14 from "./Iphone14";
import Landing from "./Landing";
import Navbar from "./Navbar";
import Particle from "./Particle";
function Store() {
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

export default Store;