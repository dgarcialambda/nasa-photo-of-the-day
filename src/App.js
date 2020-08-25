import React from "react";
import NasaList from "./components/NasaList"
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="nav-bar">
        <h1>Nasa</h1>
        <nav>
          <a href="">Home</a>
          <a href="">About</a>
          <a href="">Articles</a>
          <a href="">Sign In</a>
          <input type="text" placeholder="Search.."></input>
          <button>Register</button>
        </nav>
      </div>
      <NasaList />
    </div>
  );
}

export default App;
