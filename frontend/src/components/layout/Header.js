import React, { useEffect } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Container ,Image} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/actions/userAction";

// import { Link } from "react-scroll";
import {useHistory} from 'react-router-dom'
export default function Header() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();
const history = useHistory()
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  const logoutHandler = () => {
    dispatch(logout());
    history.push("/");
  };
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        variant="dark"
        className="px-5"
        sticky="top"
      >
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <i className="fas fa-laptop-code"></i>
              
            </Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <LinkContainer to="/">
                <Nav.Link><i className="fas fa-home"></i> Home</Nav.Link>
              </LinkContainer>

              {/* <Link to="portofolio" spy={true} smooth={true} duration={0}>
            <Nav.Link >PORTFOLIO</Nav.Link>
            </Link>

            <Link to="contact" spy={true} smooth={true} duration={0}>
              <Nav.Link>Contact</Nav.Link>
            </Link> */}

              {userInfo && userInfo.name ? (
                <NavDropdown title={"Hi, " + userInfo.name} id="username">
                  <LinkContainer to="/projectlist">
                    <NavDropdown.Item>Projects</NavDropdown.Item>
                  </LinkContainer>

                  <NavDropdown.Item onClick={logoutHandler}>
                    <i class="fas fa-sign-out-alt"></i> Logout
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link><i class="fas fa-sign-in-alt"></i> login</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
