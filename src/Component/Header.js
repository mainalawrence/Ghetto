import React from 'react'
import Logo from '../Images/Gettologo.webp'
import radio from '../Images/syasy.svg'
import { Link } from 'react-router-dom'
import { Navbar,Nav,NavDropdown,Form,FormControl,Button,ContainerFluid } from 'react-bootstrap'
import "../App.css"
export default function Header({HandleCartView}) {
    //logo
    //home btn
    //About-us
    //the buses
    // the services
    //contact us
    return (
     
            <div className="container-fluid bg-dark py-2  text-light d-flex justify-content-center align-items-center navbar">
           
        <Navbar bg="dark"  className="container-fluid" expand="lg">
          <Navbar.Brand href="#home"> <img src={Logo} alt="logo" className="float-left" /></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="btn btn-warning mx-1" href="/home"><b>Home</b></Nav.Link>
              <Nav.Link className="btn btn-warning mx-1"href="/about-us"><b>About Us</b></Nav.Link>
              <Nav.Link className="btn btn-warning mx-1"href="/buses"><b>The Bus</b></Nav.Link>
              <Nav.Link className="btn btn-warning mx-1" href="/services"><b>services</b></Nav.Link>
              <Nav.Link className="btn btn-warning mx-1"href="/products"><b>Products</b></Nav.Link>
              <Nav.Link className="btn btn-warning mx-1"href="/contact-us"><b>Contact us</b></Nav.Link>
              <Nav.Link onClick={()=>{HandleCartView()}} className="btn btn-warning mx-1"><b>Cart</b></Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
        </div>

        
    )
}
