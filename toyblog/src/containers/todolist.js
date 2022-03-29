import React, { Component , useState, useEffect} from 'react'
import { Navbar ,NavDropdown, Nav,Container, Button } from 'react-bootstrap'


const MainPage = (props) => {
    
    const [number, setNumber] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${number} times`;
      });
  return (
    <div>
    <Navbar bg="light" expand="lg">

    <Container>
      <Navbar.Brand href="#home">{props.title}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" onClick = {() => setNumber(0)}>Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2" >Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
    
  </Navbar>

  <div>

  <h1 align = 'center'>{number}</h1>
  <div align = 'center'>
  <Button align = 'center' as="input" type="button" value="숫자더하기" onClick = {() => setNumber(number  + 1)} />{' '}
  <Button align = 'center' as="input" type="button" value="숫자빼기" onClick = {() => setNumber(number  - 1)} />
  </div>
  </div>
  </div>
  


  );
}
export default MainPage;