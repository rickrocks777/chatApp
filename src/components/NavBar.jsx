import { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { getRequest } from '../../apiConnector';
import { userContext } from '../../context/UserContextProvider';
import { Link } from 'react-router-dom';

function NavBar() {
  const {logUser,logOut} = useContext(userContext)
  
    return (
        <Navbar expand="lg" bg='dark' variant='dark' fixed='top'>
      <Container>
        <Navbar.Brand href="#home">ChatApp</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          {logUser &&<Navbar.Text style={{color:"white", marginLeft:"35%"}}>logged in as {logUser}</Navbar.Text>}
          <Nav className="ms-auto">
            {!logUser && <>
              <Nav.Link href="#home"><Link to ='/'><Button variant='primary'>Login</Button></Link></Nav.Link>
              <Nav.Link href="#link"><Link to ='/signup'><Button variant='info'>Sign Up</Button></Link></Nav.Link>
            </>
            }
            {
              logUser && <Nav.Link><Button onClick={logOut} variant='danger'>Log Out</Button></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default NavBar