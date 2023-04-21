import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { Outlet} from "react-router-dom";

function Header() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href = "/">
            Chores4Sale
          </Navbar.Brand>
          <Nav className="ml-auto ">
            <Nav.Link href = "add-job">Add Job</Nav.Link>
            <Nav.Link href = "/services">Services</Nav.Link>
            <Button href = "/login">Login</Button>

          </Nav>
          <Outlet />

        </Container>
      </Navbar>
    </>
  );
}

export default Header;