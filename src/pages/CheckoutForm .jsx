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
import { useCart } from "../context/CartContext";

const CheckoutForm = () => {
  const { cartItems, getTotalPrice, setCartItems } = useCart();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    paymentMethod: "cod",
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
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
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
    return errors;
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length !== 0) {
      setFormErrors(errors);
      return;
    }

    if (formData.paymentMethod === "cod") {
      console.log("Order submitted (COD):", {
        customer: formData,
        cart: cartItems,
        total: getTotalPrice(),
      });
      setCartItems([]);
      navigate("/checkout-success");
      return;
    }

    const res = await loadRazorpayScript();
    if (!res) {
      alert("Razorpay SDK failed to load.");
      return;
    }

    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_BASE_URL}/api/orders`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            customer: formData,
            cartItems,
            total: getTotalPrice(),
          }),
        }
      );

      const data = await response.json();

      const options = {
        key: "rzp_test_6ngYWdyTKfuvpE",
        amount: data.razorpayOrder.amount,
        currency: "INR",
        name: `${formData.firstName} ${formData.lastName}`,
        description: "Food Order",
        order_id: data.razorpayOrder.id,
        handler: async function (response) {
          await fetch(
            `${process.env.REACT_APP_API_BASE_URL}/api/verify`,
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
                orderId: data.orderId,
              }),
            }
          );

          setCartItems([]);
          navigate("/checkout-success");
        },
        prefill: {
          name: `${formData.firstName} ${formData.lastName}`,
          email: formData.email,
        },
        theme: { color: "#3399cc" },
      };

      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (err) {
      console.error("Payment init failed", err);
      alert("Payment setup failed");
    }
  };

  return (
    <Container>
      <Row className="mt-5">
        <Col md={12} className="text-center">
          <h2 className="mb-4">Checkout</h2>
        </Col>
      </Row>
      <Form onSubmit={handleSubmit} className="p-5 shadow bg-white rounded">
        <Row>
          <Col md={7}>
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
          </Col>

          <Col md={5}>
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
                <option value="cod">Cash on Delivery</option>
                <option value="razorpay">Pay Online (Razorpay)</option>
                <option value="upi">UPI at Delivery</option>
                <option value="qr">Pay with QR at Delivery</option>
              </Input>
            </FormGroup>
            <Button color="primary" type="submit" className="mt-4 w-100">
              Confirm Order (₹{getTotalPrice().toFixed(2)})
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default CheckoutForm;
