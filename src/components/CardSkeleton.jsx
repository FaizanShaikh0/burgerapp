import React from "react";
import { Col, Card } from "react-bootstrap";
import "../styles/CardSkeleton.css";

const CardSkeleton = () => {
  return (
    <Col sm={6} lg={4} xl={3} className="mb-4">
      <Card className="overflow-hidden">
        <div className="skeleton skeleton-image" />
        <Card.Body>
          <div className="d-flex align-items-center justify-content-between mb-2">
            <div className="skeleton skeleton-text" style={{ width: "60%" }} />
            <div className="skeleton skeleton-icon" />
          </div>

          <div className="skeleton skeleton-title mb-2" />
          <div className="skeleton skeleton-text mb-3" />

          <div className="d-flex align-items-center justify-content-between">
            <div className="skeleton skeleton-price" style={{ width: "40%" }} />
            <div className="skeleton skeleton-button" />
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardSkeleton;
