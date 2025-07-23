import React from "react";
import {Navbar,Nav,NavDropdown,Image} from 'react-bootstrap';
import {Container} from 'react-bootstrap';

const Header = ()=> {
    return(
        <header>
            
             <Navbar className="navbar-style" expand="lg">
          <Container>
              <Navbar.Brand href="#">
                <Image src='images/VTU logo.jpeg' alt='VTU' className="logo-style" roundedCircle/>
                <h6 className="logo-text-style">Visvesvaraya Technological University, Belagavi</h6>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                 <Navbar.Collapse id="basic-navbar-nav">
                      <Nav className="ml-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">About us</Nav.Link>
                      <NavDropdown title="Academic" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#">Admission</NavDropdown.Item>
                      <NavDropdown.Item href="#">Circular & Notification</NavDropdown.Item>
                      <NavDropdown.Item href="#">Certificated Issued</NavDropdown.Item>
                      </NavDropdown>

                       <NavDropdown title="Examination" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#">Examination Guidlines</NavDropdown.Item>
                      <NavDropdown.Item href="#">Examination Application</NavDropdown.Item>
                      <NavDropdown.Item href="#">Results</NavDropdown.Item>
                      </NavDropdown>

                       <NavDropdown title="VTU: Departments" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#">Mechanical Engineering</NavDropdown.Item>
                      <NavDropdown.Item href="#">Computer Science&Engineering</NavDropdown.Item>
                      <NavDropdown.Item href="#">Internet of Things</NavDropdown.Item>
                      </NavDropdown>

                       <NavDropdown title="Staff Login" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#">Login As Admin</NavDropdown.Item>
                        
                      </NavDropdown>
                      </Nav>
      
                      </Navbar.Collapse>
                 </Container>
                      </Navbar>
            
        
        </header>
    )
}

export default Header