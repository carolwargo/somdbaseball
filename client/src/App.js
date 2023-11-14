import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
//import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./views/Home";
import About from "./views/About";
import Header from "./components/Header/Header";
import PlayersDrafted from "./views/Success/PlayersDrafted";
import PlayersSigned from "./views/Success/PlayersSigned";




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
          <Route path="/players-signed" element={<PlayersSigned/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;