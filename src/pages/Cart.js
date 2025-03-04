import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import Lottie from "lottie-react"; // Import Lottie
import emptyCartAnimation from "../assets/EmptyCart.json"; // Import Lottie animation JSON
import "../styles/Cart.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems, updateQuantity, getTotalPrice } = useCart();

  useEffect(() => {
    document.body.style.backgroundColor = "#E5D0AC";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = (id, action) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    let newQuantity = item.quantity;
    if (action === "increase") {
      newQuantity += 1;
    } else if (action === "decrease" && item.quantity > 1) {
      newQuantity -= 1;
    }

    // Update quantity in the cart context
    updateQuantity(id, newQuantity);
  };

  // Ensure getTotalPrice returns a number
  const totalPrice = getTotalPrice() || 0;

  return (
    <div className="cart-container">
      <Container fluid>
        <h2 className="text-center">Shopping Cart</h2>
        <Row className="d-flex justify-content-center">
          <Col md={12} lg={9}>
            {cartItems.length === 0 ? (
              <div className="empty-cart-container text-center">
                {/* Lottie Animation for Empty Cart */}
                <Lottie
                  animationData={emptyCartAnimation} // Lottie JSON file
                  loop={true} // Loop the animation
                  autoplay={true} // Autoplay the animation
                  style={{ height: "300px", width: "300px", margin: "0 auto" }} // Custom styles
                />
                <p className="empty-cart-text">
                  Your cart is empty. <Link to="/">Continue Shopping</Link>
                </p>
              </div>
            ) : (
              <>
                <div className="cart-items-list">
                  {cartItems.map((item) => (
                    <Card key={item.id} className="cart-item mb-3">
                      <Row className="">
                        <Col lg={3} md={3}>
                          <h5 className="text-center">Product Details</h5>
                        </Col>
                        <Col lg={3} md={3}>
                          <h5 className="text-center">Price</h5>
                        </Col>
                        <Col lg={3} md={3}>
                          <h5 className="text-center">Quantity</h5>
                        </Col>
                        <Col lg={3} md={3}>
                          <h5 className="text-center">Total</h5>
                        </Col>
                      </Row>
                      <Row className="align-items-center">
                        <Col
                          lg={4}
                          md={4}
                          className="d-flex flex-column flex-md-row "
                        >
                          <Card.Img
                            src={item.image}
                            alt={item.title}
                            className="cart-item-img mt-lg-3"
                          />
                          <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                              {item.paragraph}
                            </Card.Subtitle>
                          </Card.Body>
                        </Col>
                        <Col lg={2} md={2}>
                          <p>${item.price.toFixed(2)}</p>
                        </Col>
                        <Col lg={3} md={3}>
                          <div className="quantity-controls">
                            <button
                              disabled={item.quantity <= 1}
                              onClick={() =>
                                handleQuantityChange(item.id, "decrease")
                              }
                              className="quantity-button"
                              aria-label="Decrease quantity"
                            >
                              -
                            </button>
                            <span className="quantity-display">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                handleQuantityChange(item.id, "increase")
                              }
                              className="quantity-button"
                              aria-label="Increase quantity"
                            >
                              +
                            </button>
                          </div>
                        </Col>
                        <Col lg={3} md={3} className="text-center">
                          <p>${(item.price * item.quantity).toFixed(2)}</p>
                        </Col>
                      </Row>
                    </Card>
                  ))}
                </div>
              </>
            )}
          </Col>
          {cartItems.length > 0 && (
            <Col md={12} lg={3}>
              <div className="cart-summary mt-5 mb-5 mt-lg-0 mb-lg-0">
                <div className="cart-total">
                  <h5 className="pb-2">Order Summary</h5>
                  <hr />
                  <div className="d-flex justify-content-between">
                    <p>Items: {cartItems.length}</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between py-2 pb-3">
                    <p>Total Cost:</p>
                    <p>${totalPrice.toFixed(2)}</p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <Link to={"/"}>
                      <Button variant="danger" className="">
                        Go Back
                      </Button>
                    </Link>
                    <Button variant="primary" className="">
                      CHECKOUT
                    </Button>
                  </div>
                </div>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
