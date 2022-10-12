import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../Assets/Group 43.svg";

function NavScrollExample() {
  return (
    <Navbar expand="lg">
      <Container
        fluid
        className="d-flex justify-content-between px-5 align-items-center bg-red-500 w-85"
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <Navbar.Brand href="#" className="">
          <img src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse
          id="navbarScroll"
          className="d-flex justify-content-end align-items-center"
        >
          <Form
            // className="d-flex justify-content-between align-items-center"
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
            </Nav>
          </Form>
          <div className="d-flex w-25 justify-content-around">
            <button
              variant="outline-success"
              style={{ backgroundColor: "#ffffff", color: "black", marginLeft:"3px" }}
            >
              Login
            </button>{" "}
            <Button
              variant="outline-success"
              style={{ backgroundColor: "#5A29A7", color: "white" }}
            >
              Sign up
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
