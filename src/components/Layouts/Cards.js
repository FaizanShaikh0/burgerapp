import React, { useState } from "react";
import { Col, Card } from "react-bootstrap";
import { useCart } from "../../context/CartContext"; // Access cart context
import CardModal from "../CardModal"; // Import the modal component
import { toast } from "react-toastify";

function Cards({
  id,
  image,
  title,
  price,
  rating,
  paragraph,
  renderRatingIcons,
}) {
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const { addToCart } = useCart(); // Access addToCart function from context

  const handleAddToCart = () => {
    const notify = () => {
      toast.success("Item added to cart!", {
        className: "custom-toast",
      });
    };

    const item = { image, rating, title, paragraph, price, id, quantity };
    addToCart(item);
    setShowModal(false); // Close the modal after adding to cart
    // toast.success("Item added to cart!");
    notify();
  };

  const incrementQuantity = () => setQuantity(quantity + 1);
  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (
    <>
      <Col sm={6} lg={4} xl={3} className="mb-4">
        <Card className="overflow-hidden">
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <div className="d-flex align-items-center justify-content-between">
              <div className="item_rating">{renderRatingIcons(rating)}</div>
              <div className="wishlist">
                <i className="bi bi-heart"></i>
              </div>
            </div>

            <Card.Title>{title}</Card.Title>
            <Card.Text>{paragraph}</Card.Text>

            <div className="d-flex align-items-center justify-content-between">
              <div className="menu_price">
                <h5 className="mb-0">${price}</h5>
              </div>
              <div className="add_to_cart">
                <button
                  onClick={() => setShowModal(true)}
                  className="p-1 bg-success text-white border-0 px-2 rounded "
                >
                  <i className="bi bi-bag me-2"></i>
                  Order
                </button>
              </div>
            </div>
          </Card.Body>
        </Card>
      </Col>

      {/* Show CardModal when showModal is true */}
      {showModal && (
        <CardModal
          show={showModal}
          onClose={() => setShowModal(false)} // Close modal
          data={{ image, rating, title, paragraph, price, id }} // Pass item details to modal
          quantity={quantity}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          handleAddToCart={handleAddToCart} // Pass the function to handle adding to the cart
        />
      )}
    </>
  );
}

export default Cards;
