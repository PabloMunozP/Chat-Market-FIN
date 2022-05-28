// IMports
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Componentes
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";

//las Views
import Home from "./views/Home";

// Provider

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          {/* hola soy el navbar */}
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
