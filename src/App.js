import React from "react";
import NasaList from "./components/NasaList"
import logo from "./assets/logo.png"
import "./App.css";
import { Button, Navbar, NavbarBrand, NavItem, Nav, NavLink} from 'reactstrap'


function App() {
  return (
    <div className="App">
      <div className="logo-container">
        <img className="logo" src={logo} alt="Nasa Logo"/>
      </div>
      <div>
        <Navbar light expand="lg">
          <NavbarBrand href="Home">Home</NavbarBrand>
          <Nav className="nav-bar" navbar>
            <NavItem>
              <NavLink href="About">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="Articles">Articles</NavLink>
            </NavItem>
            <NavItem>
             
            </NavItem>
            <Button size="sm" color="danger">Register</Button>
          </Nav>
        </Navbar>
     
        </div>
      <NasaList />
    </div>
  );
}

function nasaNav() {
  return (
    <div 
      style= {{
        
      }}
      ></div>
  )
}



export default App;
