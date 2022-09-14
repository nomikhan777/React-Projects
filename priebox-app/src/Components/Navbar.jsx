import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/Group 43.svg";

function NavScrollExample() {
  return (
    <Navbar style={{backgroundColor:"white"}} expand="lg">
      <Container
        fluid
        className="d-flex justify-content-between px-5 align-items-center"
      >
        <Navbar.Brand href="#">
          <img src={logo} alt="" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
        {/* <Navbar.Collapse id="navbarScroll"> */}
        <Form
          className="d-flex justify-content-between align-items-center"
          style={{ flex: 0.5 }}
        >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1" className="mx-3">
              Tools
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-3">
              Pricing
            </Nav.Link>
            <Nav.Link href="#action2" className="mx-3">
              Blog
            </Nav.Link>

            <Nav.Link href="#" active className="mx-3">
              Blog
            </Nav.Link>
          </Nav>
          <Nav.Link href="#action2" className="mx-3">Login</Nav.Link>
          <Button
            variant="outline-success"
            style={{ backgroundColor: "#5A29A7", color: "white" }}
          >
            Sign up
          </Button>
        </Form>
        {/* </Navbar.Collapse> */}
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
