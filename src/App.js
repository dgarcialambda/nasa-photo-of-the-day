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
    <Apps className="App">
      <Logo className="logo-container">
        <Image className="logo" src={logo} alt="Nasa Logo"/>
      </Logo>
      <Container>
          <nav>
            <Anchors href="Home">Home</Anchors>
            <Anchors href="About">About</Anchors>
            <Anchors href="Articles">Articles</Anchors>
            <Input type="text" placeholder="Search.."></Input>
            <Anchors href="Sign">Sign In</Anchors>
            <Button>Register</Button>
        </nav>
        <NasaCard nasa={nasa}/>
      </Container>
      
    </Apps>
  );
}
const Button = styled.button`
background-color: #f2c6de;
border-radius: 3px;
color: #5e6472;
font-weight: bold;
margin: 2em 1em;
padding 0.25em 1em;
text-align: center;
font-size: 1.4rem;
`;
const Container = styled.div`
background-color: #ffc6ff;
color: #5e6472; 
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  

`;
const Apps = styled.div`
background-color: black; 
  

`;
const Anchors = styled.a`
text-decoration: none;
font-size: 1.5rem;
color: #5e6472;
padding: 50px;



`;
const Input = styled.input`
text-decoration: none;
font-size: 1.0rem;
color: #5e6472;
padding: 8px;
width: 325px;


`;
const Image = styled.img`
width: 175px;
height: 150px;
padding: 5px;
margin-right: 75%;



`;
const Logo = styled.div`
background-image: url("https://wallpaperstream.com/wallpapers/full/milky-way/Purple-Pink-Night-Sky-Wallpaper.jpg");
background-position: center;
background-repeat: no-repeat;
background-size: cover;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


`;





export default App;
