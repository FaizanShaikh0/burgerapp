import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { Col, Container, Row, Button, Card, Badge } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { FaTrash, FaArrowLeft } from "react-icons/fa";
import emptyCartAnimation from "../assets/EmptyCart.json";
import Lottie from "lottie-react";
import "../styles/Cart.css";

const Cart = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); // Get the navigate function

  const { cartItems, updateQuantity, removeFromCart, getTotalPrice } =
    useCart();

  useEffect(() => {
    document.body.style.backgroundColor = "#E5D0AC";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  // Function to handle quantity change
  const handleQuantityChange = async (id, action) => {
    setIsLoading(true);
    try {
      const item = cartItems.find((item) => item.id === id);
      if (!item) return;

      let newQuantity = item.quantity;
      if (action === "increase") {
        newQuantity += 1;
      } else if (action === "decrease" && item.quantity > 1) {
        newQuantity -= 1;
      }

      await updateQuantity(id, newQuantity);
    } catch (error) {
      console.error("Failed to update quantity", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle item removal
  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  const totalPrice = getTotalPrice() || 0;
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // Function to handle checkout
  const handleCheckout = () => {
    navigate("/checkout-page"); // Redirect to the checkout form
  };

  return (
    <div className="cart-container py-4">
      <Container fluid>
        <div className="position-relative">
          <Link
            to="/"
            className="btn btn-outline-dark position-absolute top-0 start-0 m-3"
          >
            <FaArrowLeft className="me-2" />
            Back to Menu
          </Link>
        </div>

        <div className="cart-header mb-4">
          <h2 className="text-center text-capitalize">Your Cart</h2>
          <p className="text-center text-muted">
            {cartItems.length > 0
              ? `You have ${totalItems} items in your cart`
              : ""}
          </p>
        </div>

        <Row className="d-flex justify-content-center">
          <Col md={12} lg={9}>
            {cartItems.length === 0 ? (
              <div className="empty-cart-container text-center p-5 bg-white rounded shadow-sm">
                <Lottie
                  animationData={emptyCartAnimation}
                  loop={true}
                  autoplay={true}
                  style={{ height: "300px", width: "300px", margin: "0 auto" }}
                />
                <p className="empty-cart-text mt-3 mb-4">Your cart is empty.</p>
                <Link to="/" className="btn btn-primary btn-lg">
                  <FaArrowLeft className="me-2" /> Continue Shopping
                </Link>
              </div>
            ) : (
              <div className="cart-items-list mb-4">
                <Card className="cart-header-card mb-3 d-none d-md-block">
                  <Row className="p-3">
                    <Col md={4}>
                      <h5 className="m-0">Product Details</h5>
                    </Col>
                    <Col md={2} className="text-center">
                      <h5 className="m-0">Price</h5>
                    </Col>
                    <Col md={2} className="text-center">
                      <h5 className="m-0">Quantity</h5>
                    </Col>
                    <Col md={2} className="text-center">
                      <h5 className="m-0">Total</h5>
                    </Col>
                    <Col md={2} className="text-center">
                      <h5 className="m-0">Action</h5>
                    </Col>
                  </Row>
                </Card>

                {cartItems.map((item) => (
                  <Card key={item.id} className="cart-item mb-3 border-0 ">
                    <Row className="align-items-center p-3">
                      <Col xs={12} md={4} className="mb-3 mb-md-0">
                        <div className="d-flex align-items-center">
                          <div className="cart-img-container me-3">
                            <Card.Img
                              src={item.image}
                              alt={item.title}
                              className="cart-item-img"
                            />
                          </div>
                          <div>
                            <h5 className="mb-1">{item.title}</h5>
                            <p className="text-muted mb-0 small">
                              {item.paragraph}
                            </p>
                          </div>
                        </div>
                      </Col>

                      <Col xs={6} md={2} className="text-md-center">
                        <span className="d-md-none text-muted">Price: </span>
                        <span className="fw-bold">
                          ₹ {item.price.toFixed(2)}
                        </span>
                      </Col>

                      <Col xs={6} md={2} className="text-end text-md-center">
                        <div className="quantity-controls d-inline-flex">
                          <button
                            disabled={item.quantity <= 1 || isLoading}
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
                            disabled={isLoading}
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

                      <Col
                        xs={6}
                        md={2}
                        className="mt-3 mt-md-0 text-md-center"
                      >
                        <span className="d-md-none text-muted">Total: </span>
                        <span className="fw-bold">
                          ₹ {(item.price * item.quantity).toFixed(2)}
                        </span>
                      </Col>

                      <Col
                        xs={6}
                        md={2}
                        className="mt-3 mt-md-0 text-end text-md-center"
                      >
                        <Button
                          variant="outline-danger"
                          size="sm"
                          onClick={() => handleRemoveItem(item.id)}
                          aria-label="Remove item"
                          className="remove-button"
                          disabled={isLoading}
                        >
                          <FaTrash />
                        </Button>
                      </Col>
                    </Row>
                  </Card>
                ))}
              </div>
            )}
          </Col>

          {cartItems.length > 0 && (
            <Col md={12} lg={3}>
              <div className="cart-summary p-4 bg-white rounded mb-4">
                <h4 className="mb-3">Order Summary</h4>
                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <p className="mb-0">Items:</p>
                  <Badge
                    bg="primary"
                    className="rounded-pill d-flex align-items-center justify-content-center"
                  >
                    {totalItems}
                  </Badge>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="mb-0">Subtotal:</p>
                  <p className="mb-0 fw-bold">₹ {totalPrice.toFixed(2)}</p>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <p className="mb-0">Shipping:</p>
                  <p className="mb-0">Free</p>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0">Total:</h5>
                  <h5 className="mb-0 fw-bold">₹ {totalPrice.toFixed(2)}</h5>
                </div>

                <div className="d-grid gap-2">
                  <Button
                    variant="warning"
                    className="mb-2 fw-bold"
                    onClick={handleCheckout}
                  >
                    PROCEED TO CHECKOUT
                  </Button>
                  <Link to="/" className="btn btn-outline-secondary">
                    <FaArrowLeft className="me-2" /> Continue Shopping
                  </Link>
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
