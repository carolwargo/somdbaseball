import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
//import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header";
import "./App.css";
/*import Contact from "./views/Contact/Contact";
import WebDesign from "./views/WebDesign/WebDesign";
import GraphicDesign from "./views/GraphicDesign/GraphicDesign";
import SoftwareDevelopment from "./views/SoftwareDevelopment/SoftwareDevelopment";
import DigitalMarketing from "./views/DigitalMarketing/DigitalMarketing"; 
import Ecommerce from "./views/Ecommerce/Ecommerce";  
import Footer from "./components/Footer/index";
import Navbar from "./components/Navbar/index";
import Signup from "./views/Signup/Signup";
import Login from "./views/Login/Login";
import "bootstrap/dist/css/bootstrap.css";*/
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

/*const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});*/

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;