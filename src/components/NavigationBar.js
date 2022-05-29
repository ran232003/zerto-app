import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
//import "./NavigationBar.css"
const NavigationBar = (props)=>{

    return(
        <div>
<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="cont">
  <Navbar.Brand as = {Link} to="/">Zerto</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      
     
    </Nav>
    <Nav>
      <Nav.Link as = {Link} to="/sign-up">Edit</Nav.Link>
      <Nav.Link eventKey={2} as = {Link} to="/login">
        WebSites
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}

export default NavigationBar