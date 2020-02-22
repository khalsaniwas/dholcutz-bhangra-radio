import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'


function Header() {
  return (
    <header className="App-header">

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">DholCutz Bhangra Radio</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Browse</Nav.Link>
          <Nav.Link href="#pricing">Chat Forume</Nav.Link>
        </Nav>
      </Navbar>

    </header>
  );
}

export default Header;
