import React, { useState, useEffect } from "react";
// scss
import "./header.scss";
// react bootstrap
import {
  Container,
  Navbar,
  Nav,
  Dropdown,
  NavDropdown,
  DropdownButton,
  ButtonGroup,
} from "react-bootstrap";

const Header = () => {
  const dropData = [
    { id: 1, label: "Deep Drop Down 1", evenKey: "1" },
    { id: 2, label: "Deep Drop Down 2", evenKey: "2" },
    { id: 3, label: "Deep Drop Down 3", evenKey: "3" },
    { id: 4, label: "Deep Drop Down 4", evenKey: "4" },
    { id: 5, label: "Deep Drop Down 5", evenKey: "5" },
  ];

  const [data, setData] = useState(dropData);

  return (
    <>
      <header id="header">
        <Navbar expand="lg">
          <Container>
            <Navbar.Brand href="#banner" className="brand_logo">
              Medilab
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto">
                <Nav.Link href="#banner" className="active_link">
                  Home
                </Nav.Link>
                <Nav.Link href="#aboutUs">About</Nav.Link>
                <Nav.Link href="#services">Services</Nav.Link>
                <Nav.Link href="#departments">Departments</Nav.Link>
                <Nav.Link href="#doctors">Doctors</Nav.Link>
                <NavDropdown title="Drop Down" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">Drop Down 1</NavDropdown.Item>

                  <div>
                    {["start"].map((direction) => (
                      <DropdownButton
                        as={ButtonGroup}
                        key={direction}
                        id={`dropdown-button-drop-${direction}`}
                        drop={direction}
                        title={`Deep Drop Down`}
                        className="deep_dropdown"
                      >
                        {data.map((ele) => {
                          return (
                            <Dropdown.Item
                              eventKey={`${ele.eventKey}`}
                              className="drop_item"
                              key={`${ele.id}`}
                            >
                              {`${ele.label}`}
                            </Dropdown.Item>
                          );
                        })}
                      </DropdownButton>
                    ))}
                  </div>

                  <NavDropdown.Item href="#">Drop Down 2</NavDropdown.Item>
                  <NavDropdown.Item href="#">Drop Down 3</NavDropdown.Item>
                  <NavDropdown.Item href="#">Drop Down 4</NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link
                  href="#appointment"
                  className="appointment_btn hover_color"
                >
                  Make an Appointment
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
