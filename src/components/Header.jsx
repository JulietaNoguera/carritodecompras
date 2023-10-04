import React, { useRef } from 'react'
import { Nav ,Navbar,Container} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Header = () => {
    
    return (
        <Navbar className='bg-white' expand="lg">
        <Container>
          <Navbar.Brand className="logo"href="#">CARRITO DE COMPRAS</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarTogglerDemo02"className='bg-light' />
          <Navbar.Collapse id="navbarTogglerDemo02 " >
          <Nav className="flex-grow-1">
            {/* Espacio flexible */}
          </Nav>
            <Nav className="me-auto">
             {/* cambiar a una lista que recoorra  */}
                <Nav.Link href="#" className="nav-link custom-text-color">PRODUCTOS</Nav.Link>
                <Nav.Link href="#" className="nav-link custom-text-color">CHANGUITO</Nav.Link>
                <Nav.Link href="#" className="nav-link custom-text-color">STORE</Nav.Link>
                <Nav.Link href="#" className="nav-link custom-text-color">AYUDA</Nav.Link>
          </Nav>
            
        
            <Nav className="custom-text-color">
    
              <Nav.Link href="#">
                <a className="navbar-brand" href="#">
                  <Image
                    src="https://as1.ftcdn.net/v2/jpg/03/25/73/68/1000_F_325736897_lyouuiCkWI59SZAPGPLZ5OWQjw2Gw4qY.jpg"
                    roundedCircle
                    alt="Search"
                    width="20px"
                    height="20px"
                  />
                </a>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


      
      );
}
 
export default Header ;