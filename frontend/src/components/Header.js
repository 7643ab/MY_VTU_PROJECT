import React from "react";
import {Navbar,Nav,NavDropdown,Image,Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = ()=> {
    return(
        <header>
            
             <Navbar className="navbar-style" expand="lg">
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand href="/">
                <Image src='images/VTU logo.jpeg' alt='VTU' className="logo-style" roundedCircle/>
                <h6 className="logo-text-style">Visvesvaraya Technological University, Belagavi</h6>
                </Navbar.Brand>
           </LinkContainer>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">

                        <LinkContainer to='/'>
                        <Nav.Link href="/">Home</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/about'>
                        <Nav.Link href="/about">About us</Nav.Link>
                        </LinkContainer>
                        
                        <NavDropdown title="Academic" id="basic-nav-dropdown">
                       <LinkContainer to='/admission'>
                      <NavDropdown.Item href="/admission">Admission</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/circular/notification'>
                      <NavDropdown.Item href="/circular/notification">Circular & Notification</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/certificate'>
                      <NavDropdown.Item href="/certificate">Certificated Issued</NavDropdown.Item>
                      </LinkContainer>
                      </NavDropdown>

                       <NavDropdown title="Examination" id="basic-nav-dropdown">
                        <LinkContainer to='/guidlines'>
                      <NavDropdown.Item href="/guidlines">Examination Guidlines</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/application'>
                      <NavDropdown.Item href="/application">Examination Application</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/result'>
                      <NavDropdown.Item href="/result">Results</NavDropdown.Item>
                      </LinkContainer>
                      </NavDropdown>

                       <NavDropdown title="VTU: Departments" id="basic-nav-dropdown">
                        <LinkContainer to='me'>
                      <NavDropdown.Item href="me">Mechanical Engineering</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/cse'>
                      <NavDropdown.Item href="cse">Computer Science&Engineering</NavDropdown.Item>
                      </LinkContainer>
                      <LinkContainer to='/iot'>
                      <NavDropdown.Item href="iot">Internet of Things</NavDropdown.Item>
                      </LinkContainer>
                      </NavDropdown>

                       <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                        <LinkContainer to='/login'>
                      <NavDropdown.Item href="/login">Login As Admin</NavDropdown.Item>
                      </LinkContainer>
                        
                      </NavDropdown>
                      </Nav>
      
                      </Navbar.Collapse>
                 </Container>
                      </Navbar>
            
        
        </header>
    )
}

export default Header