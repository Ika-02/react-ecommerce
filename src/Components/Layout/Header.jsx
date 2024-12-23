import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import HeaderCartButton from './HeaderCartButton';

const Header = ({clickCart}) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"><h1>🛍 Ecommerce</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Acceuil</Nav.Link>
            <Nav.Link href="#links">Liens</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <HeaderCartButton clickCart={clickCart}/>    
      </Container>
    </Navbar>
  );
}

export default Header;