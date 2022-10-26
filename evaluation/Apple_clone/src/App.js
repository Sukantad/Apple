import Category from "./Components/Category";
import Footer from "./Components/Footer";
import GridProduct from "./Components/GridProduct";
import HomeSlider from "./Components/HomeSlider";
import Iphone12 from "./Components/Iphone12";
import Iphone14 from "./Components/Iphone14";
import Landing from "./Components/Landing";
import Navbar from "./Components/Navbar";
import Particle from "./Components/Particle";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      {/* <Particle/> */}
      <Iphone12 />
      <Iphone14 />
      <GridProduct />
      <HomeSlider />
        <Footer/>
     </div>
  );
}

export default App;
