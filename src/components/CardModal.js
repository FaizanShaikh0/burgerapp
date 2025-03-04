import React from "react";
import { Modal, Button } from "react-bootstrap";
import "../styles/CardModal.css";

const CardModal = ({
  show,
  onClose,
  data,
  quantity,
  incrementQuantity,
  decrementQuantity,
  handleAddToCart, // Add this prop to handle adding to the cart
}) => {
  // Calculate total price based on quantity
  const totalPrice = (data?.price * quantity).toFixed(2);

  return (
    <div
      className={`modal-backdrop ${show ? "show" : ""}`}
      style={{
        display: show ? "block" : "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1050,
      }}
    >
      <Modal.Dialog
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          zIndex: 1060,
          maxWidth: "600px",
          width: "90%",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fff",
        }}
      >
        <Modal.Header closeButton onClick={onClose} style={{ borderBottom: "1px solid #ddd" }}>
          <Modal.Title style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
            {data?.title}
          </Modal.Title>
        </Modal.Header>

        <Modal.Body style={{ padding: "20px 0" }}>
          <div className="modal-content">
            <div className="image-container" style={{ textAlign: "center" }}>
              <img src={data?.image} alt={data?.title} className="modal-image" />
            </div>
            <p style={{ fontSize: "1rem", color: "#555" }}>{data?.paragraph}</p>
            <h5 style={{ fontSize: "1.2rem", color: "#333", fontWeight: "bold" }}>
              Total: {totalPrice} -/Rs
            </h5>
          </div>
        </Modal.Body>

        <Modal.Footer>
          <div style={{ width: "48%" }}>
            <div className="quantity-controls">
              <button
                onClick={decrementQuantity}
                disabled={quantity <= 1}
                className="quantity-button"
                style={{ padding: "5px 15px", fontSize: "1.2rem" }}
              >
                -
              </button>
              <span className="quantity-display">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="quantity-button"
                style={{ padding: "5px 15px", fontSize: "1.2rem" }}
              >
                +
              </button>
            </div>
          </div>
          <Button
            variant="primary"
            onClick={handleAddToCart} // When Add to Cart is clicked, call this function
            style={{ width: "48%" }}
          >
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
};

export default CardModal;
