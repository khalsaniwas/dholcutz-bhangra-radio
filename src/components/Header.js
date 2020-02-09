import React from 'react';
import logo from '../images/logo.svg';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl'


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
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>

    </header>
  );
}

export default Header;
