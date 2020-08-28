import React, {useState, useEffect} from "react";
import NasaCard from "./components/NasaCard";
import logo from "./assests/logo.png";
import axios from "axios";

import styled from "styled-components";
import "./App.css";

function App() {
  const [nasa, setNasa] = useState({});
  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=bRMRi9sEJLXmehY7n7V6fhUE3PYSnexk1FX6L6a5&date=2020-08-18`)
      .then((res) => {
        console.log(res, "This is the res");
        setNasa(res.data);
      })
      .catch((err) => {
        console.log(err, "Error Occured")
      });
  }, []);
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Nasa Logo"/>
      </div>
      <Container>
          <nav>
            <a href="Home">Home</a>
            <a href="About">About</a>
            <a href="Articles">Articles</a>
            <input type="text" placeholder="Search.."></input>
            <a href="Sign">Sign In</a>
            <Button>Register</Button>
        </nav>
      </Container>
      <div className="nasa-api">
        <NasaCard nasa={nasa}/>
      </div>
    </div>
  );
}
const Button = styled.button`
background-color: #FFD1DC;
border-radius: 3px;
color: #5DB29E;
font-weight: bold;
margin: 2em 1em;
padding 0.25em 1em;
`;
const Container = styled.div`
  text-align: center;
  

`;


export default App;
