import React, { useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";
import PaymentOptions from "../PaymentOptions"; // Import Payment Options Component

const AddressForm = ({ totalPrice, isDark }) => {
  const [showAddressForm, setShowAddressForm] = useState(true);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    pincode: "",
    address: "",
    addressType: "Home",
  });
  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); // Clear error when user starts typing
  };

  // Validate Form Fields
  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.mobile.match(/^\d{10}$/)) newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!formData.pincode.match(/^\d{6}$/)) newErrors.pincode = "Enter a valid 6-digit pincode";
    if (!formData.address.trim()) newErrors.address = "Address is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Returns true if no errors
  };

  // Handle Form Submission
  const handleSaveAndDeliver = () => {
    if (validateForm()) {
      setShowAddressForm(false); // Hide Address Form
      setShowPaymentModal(true); // Show Payment Popup
    }
  };

  return (
    <div className="container mt-4" style={{ backgroundColor: isDark ? "#1a1a1a" : "white", color: isDark ? "white" : "black" }}>
      {showAddressForm ? (
        <div>
          <h4>Add a New Address</h4>
          <Form style={{ backgroundColor: isDark ? "#1a1a1a" : "white", color: isDark ? "white" : "black" }}>
            {/* Name Field */}
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
              {errors.name && <Alert variant="danger" className="mt-1">{errors.name}</Alert>}
            </Form.Group>

            {/* Mobile Number */}
            <Form.Group controlId="mobile">
              <Form.Label>10-digit Mobile Number</Form.Label>
              <Form.Control type="text" name="mobile" placeholder="Enter mobile number" value={formData.mobile} onChange={handleChange} />
              {errors.mobile && <Alert variant="danger" className="mt-1">{errors.mobile}</Alert>}
            </Form.Group>

            {/* Pincode */}
            <Form.Group controlId="pincode">
              <Form.Label>Pincode</Form.Label>
              <Form.Control type="text" name="pincode" placeholder="Enter pincode" value={formData.pincode} onChange={handleChange} />
              {errors.pincode && <Alert variant="danger" className="mt-1">{errors.pincode}</Alert>}
            </Form.Group>

            {/* Address */}
            <Form.Group controlId="address">
              <Form.Label>Address (Area and Street)</Form.Label>
              <Form.Control as="textarea" rows={3} name="address" value={formData.address} onChange={handleChange} />
              {errors.address && <Alert variant="danger" className="mt-1">{errors.address}</Alert>}
            </Form.Group>

            {/* Address Type */}
            <Form.Group controlId="addressType">
              <Form.Label>Address Type</Form.Label>
              <Form.Check
                type="radio"
                label="Home (All day delivery)"
                name="addressType"
                value="Home"
                checked={formData.addressType === "Home"}
                onChange={handleChange}
              />
              <Form.Check
                type="radio"
                label="Work (Delivery between 10 AM - 5 PM)"
                name="addressType"
                value="Work"
                checked={formData.addressType === "Work"}
                onChange={handleChange}
              />
            </Form.Group>

            {/* Save and Deliver Button */}
            <Button variant="danger" className="w-100 mt-3" onClick={handleSaveAndDeliver}>
              Save and Deliver Here
            </Button>
          </Form>
        </div>
      ) : null}

      {/* Payment Modal */}
      <Modal show={showPaymentModal} onHide={() => setShowPaymentModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Payment Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PaymentOptions totalPrice={totalPrice} isDark={isDark} />
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AddressForm;
