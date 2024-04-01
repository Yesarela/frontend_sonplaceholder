import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const NavbarLayout = () => {

    return (
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Test RedEfectiva</Navbar.Brand>
        </Container>
      </Navbar>
    );
}


export default NavbarLayout