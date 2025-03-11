import React, { useState } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover, FaCcPaypal ,FaCcAmazonPay,FaCcApplePay ,FaGooglePay  } from "react-icons/fa";


const PaymentOptions = ({ totalPrice, isDark }) => {
  const [selectedPayment, setSelectedPayment] = useState("");
  const [cardDetails, setCardDetails] = useState({
    name: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvv: "",
    termsAccepted: false,
  });

  const handlePaymentChange = (event) => {
    setSelectedPayment(event.target.value);
  };

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setCardDetails({
      ...cardDetails,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <Card className="p-3" style={{ backgroundColor: isDark ? "#1a1a1a" : "white", color: isDark ? "white" : "black" }}>
      <strong className="fs-4">Total Price: ${totalPrice}</strong>
      <p>How would you like to pay?</p>

      <Form>
        {/* Wallet */}
        <Form.Check 
          type="radio" 
          label="Wallet" 
          value="wallet" 
          checked={selectedPayment === "wallet"}
          onChange={handlePaymentChange}
          className="mt-2"
        />

        {/* Credit or Debit Card */}
        <Form.Check 
          type="radio" 
          label={
            <>
              Credit & Debit Cards &nbsp;
              <FaCcVisa /> <FaCcMastercard /> <FaCcAmex /> <FaCcDiscover />
            </>
          }
          value="credit"
          checked={selectedPayment === "credit"}
          onChange={handlePaymentChange}
          className="mt-2"
        />

        {/* Show Card Details Form If Selected */}
        {selectedPayment === "credit" && (
          <div className="mt-3 p-3 border rounded">
            <Form.Group className="mb-2">
              <Form.Label>Cardholder Name</Form.Label>
              <Form.Control type="text" name="name" value={cardDetails.name} onChange={handleInputChange} required />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Card Number</Form.Label>
              <Form.Control type="text" name="cardNumber" value={cardDetails.cardNumber} onChange={handleInputChange} required />
            </Form.Group>

            <div className="d-flex gap-2">
              <Form.Group className="mb-2">
                <Form.Label>End Date</Form.Label>
                <div className="d-flex gap-2">
                  <Form.Select name="expiryMonth" value={cardDetails.expiryMonth} onChange={handleInputChange} required>
                    <option value="">MM</option>
                    {[...Array(12).keys()].map((m) => (
                      <option key={m + 1} value={m + 1}>{m + 1}</option>
                    ))}
                  </Form.Select>

                  <Form.Select name="expiryYear" value={cardDetails.expiryYear} onChange={handleInputChange} required>
                    <option value="">YYYY</option>
                    {[...Array(10).keys()].map((y) => (
                      <option key={y} value={2024 + y}>{2024 + y}</option>
                    ))}
                  </Form.Select>
                </div>
              </Form.Group>

              <Form.Group className="mb-2">
                <Form.Label>CVV</Form.Label>
                <Form.Control type="text" name="cvv" maxLength="3" value={cardDetails.cvv} onChange={handleInputChange} required />
              </Form.Group>
            </div>

            <Form.Check 
              type="checkbox" 
              label="I accept the terms of use and privacy policy" 
              name="termsAccepted"
              checked={cardDetails.termsAccepted}
              onChange={handleInputChange}
              className="mb-2"
            />
          </div>
        )}

        {/* Cash on Delivery */}
        <Form.Check 
          type="radio" 
          label="Cash on Delivery" 
          value="cod" 
          checked={selectedPayment === "cod"}
          onChange={handlePaymentChange}
          className="mt-2"
        />

        {/* PayPal */}
        <Form.Check 
          type="radio" 
          label={
            <>
             UPI <FaCcPaypal  /> <FaCcApplePay /> < FaGooglePay /> <FaCcAmazonPay />

            </>
          }
          value="paypal"
          checked={selectedPayment === "paypal"}
          onChange={handlePaymentChange}
          className="mt-2"
        />

        {/* Confirm Button */}
        <Button 
          variant="success" 
          className="w-100 mt-3" 
          disabled={!selectedPayment || (selectedPayment === "credit" && (!cardDetails.name || !cardDetails.cardNumber || !cardDetails.expiryMonth || !cardDetails.expiryYear || !cardDetails.cvv || !cardDetails.termsAccepted))}
        >
          Pay Now »
        </Button>
      </Form>
    </Card>
  );
};

export default PaymentOptions;
