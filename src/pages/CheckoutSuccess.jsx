import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CheckoutSuccess = () => {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Card className="text-center p-4">
            <Card.Title className="mb-4">Thank You for Your Order!</Card.Title>
            <Card.Text>
              Your order has been placed successfully. You will receive a
              confirmation email shortly.
            </Card.Text>
            <Button as={Link} to="/" variant="primary" className="mb-2">
              Continue Shopping
            </Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutSuccess;