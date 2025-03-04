import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Adjust the path as needed
import Logo from "../../assets/logo/logo.png";
import "../../styles/HeaderStyle.css";

const Header = ({ scrollToSection, sectionRefs }) => {
  const [nav, setNav] = useState(false);
  const { cartItems } = useCart(); // Access cart items from context

  // Function to calculate the number of distinct items in the cart
  const getNumberOfItems = () => {
    return cartItems.length;
  };

  // Scroll Navbar
  const changeValueOnScroll = () => {
    const scrollValue = document?.documentElement?.scrollTop;
    scrollValue > 100 ? setNav(true) : setNav(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeValueOnScroll);
    return () => {
      window.removeEventListener("scroll", changeValueOnScroll);
    };
  }, []);

  return (
    <header>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`${nav === true ? "sticky" : ""}`}
      >
        <Container>
          <Navbar.Brand>
            <Link to="/" className="logo">
              <img src={Logo} alt="Logo" className="img-fluid" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                onClick={() => scrollToSection(sectionRefs.section1Ref)}
              >
                Home
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection(sectionRefs.section2Ref)}
              >
                About
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection(sectionRefs.section3Ref)}
              >
                Our Menu
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection(sectionRefs.section5Ref)}
              >
                Shop
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection(sectionRefs.section6Ref)}
              >
                Blog
              </Nav.Link>
              <Nav.Link
                onClick={() => scrollToSection(sectionRefs.section7Ref)}
              >
                Contact
              </Nav.Link>
              <Nav.Link as={Link} to="/cart">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">{getNumberOfItems()}</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
