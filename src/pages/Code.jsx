import React from "react";

const Code = () => {
  return (
    <div>
      <Col md={12} lg={3}>
        <div className="cart-main">
          {/* Display Total Price */}
          <div className="cart-total">
            <h4>Total: ${getTotalPrice()}</h4>
          </div>

          {/* Button to continue shopping or proceed to checkout */}
          <div className="cart-actions">
            <Link to="/">
              <Button
                variant="secondary"
                className="continue-shopping-btn"
                aria-label="Continue Shopping"
              >
                Continue Shopping
              </Button>
            </Link>
            <Link to="/checkout">
              <Button
                variant="primary"
                className="checkout-btn"
                aria-label="Proceed to Checkout"
              >
                Proceed to Checkout
              </Button>
            </Link>
          </div>
        </div>
      </Col>

      <div>
        {/* 
        import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Col, Container, Row, Button, Card } from "react-bootstrap";
import Lottie from "lottie-react";
import emptyCartAnimation from "../assets/EmptyCart.json";
import "../styles/Cart.css";
import { Link } from "react-router-dom";

const CartItem = ({ item, handleQuantityChange }) => {
  return (
    <Card key={item.id} className="cart-item mb-3">
      <Row>
        <Col lg={4} md={4} className="d-flex flex-column flex-md-row align-items-center">
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
              onClick={() => handleQuantityChange(item.id, "decrease")}
              className="quantity-button"
              aria-label="Decrease quantity"
            >
              -
            </button>
            <span className="quantity-display">{item.quantity}</span>
            <button
              onClick={() => handleQuantityChange(item.id, "increase")}
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
  );
};

const CartSummary = ({ cartItems, getTotalPrice }) => {
  const totalPrice = getTotalPrice() || 0;
  return (
    <div className="cart-summary">
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
          <Link to="/">
            <Button variant="danger">Go Back</Button>
          </Link>
          <Button variant="primary">CHECKOUT</Button>
        </div>
      </div>
    </div>
  );
};

const Cart = () => {
  const { cartItems, updateQuantity, getTotalPrice } = useCart();

  useEffect(() => {
    document.body.style.backgroundColor = "#E5D0AC";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleQuantityChange = (id, action) => {
    const item = cartItems.find((item) => item.id === id);
    if (!item) return;

    let newQuantity = item.quantity;
    if (action === "increase") {
      newQuantity += 1;
    } else if (action === "decrease" && item.quantity > 1) {
      newQuantity -= 1;
    }

    updateQuantity(id, newQuantity);
  };

  return (
    <div className="cart-container">
      <Container fluid>
        <h2 className="text-center">Shopping Cart</h2>
        <Row className="d-flex justify-content-center">
          <Col md={12} lg={9}>
            {cartItems.length === 0 ? (
              <div className="empty-cart-container text-center">
                <Lottie
                  animationData={emptyCartAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: "300px", width: "300px", margin: "0 auto" }}
                />
                <p className="empty-cart-text">
                  Your cart is empty. <Link to="/">Continue Shopping</Link>
                </p>
              </div>
            ) : (
              <div className="cart-items-list">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} handleQuantityChange={handleQuantityChange} />
                ))}
              </div>
            )}
          </Col>
          {cartItems.length > 0 && (
            <Col md={12} lg={3}>
              <CartSummary cartItems={cartItems} getTotalPrice={getTotalPrice} />
            </Col>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
      */}
      </div>
    </div>
  );
};

export default Code;
