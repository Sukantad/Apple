import Navbar from "./Components/Home/Navbar";
import HomePage from "./Components/HomePage.";
import Category from "./Components/StorePage/Category";
import "./App.css";
import { Routes,Route, Router } from "react-router-dom";
import AllRouter from './Components/AllRouter'
function App() {
  return (
    <div className="App">
      <Navbar />
      <AllRouter/>
    
      {/* <Category/> */}      

    </div>
  );
}

export default App;
