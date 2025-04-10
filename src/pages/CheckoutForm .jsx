import React, { useEffect, useState } from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Container,
  Row,
  Col,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
// import Layout from "../components/Layouts/Layout";

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "creditCard",
    cardNumber: "",
    cvv: "",
    expiryDate: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "#f3e5d6";
    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.firstName) errors.firstName = "First name is required";
    if (!formData.lastName) errors.lastName = "Last name is required";
    if (!formData.email) errors.email = "Email is required";
    if (!formData.address) errors.address = "Address is required";
    if (!formData.city) errors.city = "City is required";
    if (!formData.state) errors.state = "State is required";
    if (!formData.zip) errors.zip = "Zip code is required";
    if (!formData.cardNumber) errors.cardNumber = "Card number is required";
    if (!formData.cvv) errors.cvv = "CVV is required";
    if (!formData.expiryDate) errors.expiryDate = "Expiry date is required";
    if (!formData.password) errors.password = "Password is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length === 0) {
      try {
        console.log("Submitting form data:", formData);
        navigate("/checkout-success");
      } catch (error) {
        console.error("Checkout failed", error);
      }
    } else {
      setFormErrors(errors);
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2 className="mb-4">Checkout</h2>
        </Col>
      </Row>
      <Row>
        <Col md={7} className="me-auto">
          <Form onSubmit={handleSubmit} className="p-5 shadow bg-white rounded">
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    invalid={!!formErrors.firstName}
                    className="mb-3"
                  />
                  {formErrors.firstName && (
                    <FormText color="danger">{formErrors.firstName}</FormText>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    invalid={!!formErrors.lastName}
                    className="mb-3"
                  />
                  {formErrors.lastName && (
                    <FormText color="danger">{formErrors.lastName}</FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                invalid={!!formErrors.email}
                className="mb-3"
              />
              {formErrors.email && (
                <FormText color="danger">{formErrors.email}</FormText>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="address">Address</Label>
              <Input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                invalid={!!formErrors.address}
                className="mb-3"
              />
              {formErrors.address && (
                <FormText color="danger">{formErrors.address}</FormText>
              )}
            </FormGroup>
            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="city">City</Label>
                  <Input
                    type="text"
                    name="city"
                    id="city"
                    value={formData.city}
                    onChange={handleChange}
                    invalid={!!formErrors.city}
                    className="mb-3"
                  />
                  {formErrors.city && (
                    <FormText color="danger">{formErrors.city}</FormText>
                  )}
                </FormGroup>
              </Col>
              <Col md={4}>
                <FormGroup>
                  <Label for="state">State</Label>
                  <Input
                    type="text"
                    name="state"
                    id="state"
                    value={formData.state}
                    onChange={handleChange}
                    invalid={!!formErrors.state}
                    className="mb-3"
                  />
                  {formErrors.state && (
                    <FormText color="danger">{formErrors.state}</FormText>
                  )}
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup>
                  <Label for="zip">Zip Code</Label>
                  <Input
                    type="text"
                    name="zip"
                    id="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    invalid={!!formErrors.zip}
                    className="mb-3"
                  />
                  {formErrors.zip && (
                    <FormText color="danger">{formErrors.zip}</FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
          </Form>
        </Col>

        <Col md={5} className="me-auto">
          <Form onSubmit={handleSubmit} className="p-5 shadow bg-white rounded">
            <FormGroup>
              <Label for="paymentMethod">Payment Method</Label>
              <Input
                type="select"
                name="paymentMethod"
                id="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="mb-3"
              >
                <option value="creditCard">Credit Card</option>
                <option value="paypal">PayPal</option>
                <option value="bankTransfer">Bank Transfer</option>
              </Input>
            </FormGroup>

            <Row>
              <Col md={6}>
                <FormGroup>
                  <Label for="cardNumber">Card Number</Label>
                  <Input
                    type="number"
                    name="cardNumber"
                    id="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    invalid={!!formErrors.cardNumber}
                    className="mb-3"
                  />
                  {formErrors.cardNumber && (
                    <FormText color="danger">{formErrors.cardNumber}</FormText>
                  )}
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="cvv">CVV Number</Label>
                  <Input
                    type="text"
                    name="cvv"
                    id="cvv"
                    value={formData.cvv}
                    onChange={handleChange}
                    invalid={!!formErrors.cvv}
                    className="mb-3"
                  />
                  {formErrors.cvv && (
                    <FormText color="danger">{formErrors.cvv}</FormText>
                  )}
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="expiryDate">Expiry Date</Label>
              <Input
                type="date"
                name="expiryDate"
                id="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                invalid={!!formErrors.expiryDate}
                className="mb-3"
              />
              {formErrors.expiryDate && (
                <FormText color="danger">{formErrors.expiryDate}</FormText>
              )}
            </FormGroup>
            <FormGroup>
              <Label for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                invalid={!!formErrors.password}
                className="mb-3"
              />
              {formErrors.password && (
                <FormText color="danger">{formErrors.password}</FormText>
              )}
            </FormGroup>

            <Button color="primary" type="submit" className="mt-3 w-100">
              Place Order
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutForm;
