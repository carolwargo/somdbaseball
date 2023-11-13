import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
//import { BrowserRouter as Router,Route, Routes } from "react-router-dom";

import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header/Header";
import PlayersDrafted from "./views/Success/PlayersDrafted";




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
          <Route path="/players-drafted" element={<PlayersDrafted/>} />
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;