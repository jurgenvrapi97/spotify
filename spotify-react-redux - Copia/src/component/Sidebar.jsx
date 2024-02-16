import { Navbar, Nav, Form, InputGroup, Button, Col } from 'react-bootstrap'
import logo from '../assets/logo.png'
const Sidebar = () => {
  return (
    <>
      <Col className="col-2 pe-0">
        <Navbar
          expand="lg"
          className="flex-column sidebar d-none d-lg-flex pt-5"
        >
          <div>
            <Navbar.Brand href="index.html">
              <img src={logo} alt="Spotify Logo" width="131" height="40" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto flex-column">
                <Nav.Link className="text-secondary mt-5" href="#">
                  <i className="bi bi-house-door-fill text-secondary fs-4"></i>{' '}
                  Home
                </Nav.Link>
                <Nav.Link className="text-secondary" href="#">
                  <i className="bi bi-book-fill text-secondary fs-4"></i> Your
                  Library
                </Nav.Link>
                <InputGroup className="mb-3">
                  <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button variant="outline-secondary" id="button-addon2">
                    Go
                  </Button>
                </InputGroup>
              </Nav>
            </Navbar.Collapse>
          </div>
          <div className="nav-btn mt-auto">
            <div className="d-grid gap-2 mb-3">
              <Button
                variant="light"
                className="signup-btn d-block rounded-pill mb-3"
              >
                Sign Up
              </Button>
              <Button
                variant="outline-light"
                className="login-btn rounded-pill"
              >
                Login
              </Button>
            </div>
            <a className="text-secondary no-underline " href="#">
              Cookie Policy
            </a>{' '}
            |
            <a className="text-secondary  no-underline" href="#">
              {' '}
              Privacy
            </a>
          </div>
        </Navbar>
      </Col>
    </>
  )
}

export default Sidebar
