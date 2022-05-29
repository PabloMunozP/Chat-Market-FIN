// IMports
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import "bootstrap/dist/css/bootstrap.min.css";
//las Views
import Home from "./views/Home";
import Post from "./views/Post"
import MyTickets from "./views/MyTickets";
import Detail from "./views/Detail";
// Provider

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/swap" element={<Post />}/>
        <Route path="/mytickets" element={<MyTickets />}/> 
        <Route path="/detail/:id" element={<Detail />}/> 
      </Routes>
    </Router>
    
   
  );
}

export default App;
