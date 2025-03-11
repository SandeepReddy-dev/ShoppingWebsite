import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import {  Modal } from "react-bootstrap";
import { RiDeleteBinFill } from "react-icons/ri";
import AddressForm from '../AddressForm'

import { FaStar } from "react-icons/fa6";

import "bootstrap/dist/css/bootstrap.min.css";

const CartItem = ({ product, onClickDelete, handleItemTotalPrice,isDark}) => {
  const [quantity, setQuantity] = useState(1);
  const itemTotalPrice = product.price * quantity;

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => Math.max(1, prev - 1));
  };
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "star-filled" : "star-empty"}
      />
    ));
  };
  useEffect(() => {
    handleItemTotalPrice(product.id, itemTotalPrice);
  }, [quantity]);

  return (
    <div
      className="d-flex align-items-center justify-content-between py-3 shadow border-bottom"
      style={{
        width: "100%",
        padding: "15px",
        height: "150px",
        objectFit: "contain",
      }}
    >
      <div className="d-flex align-items-center gap-3">
        <img
          src={product.image_url}
          alt={product.title}
          style={{ width: "80px", height: "100px", objectFit: "contain" }}
        />
        <div>
          <div className="d-flex flex-column align-items-start gap-2">
            <h5 className="mb-0 fw-bold cart-item-title">{product.title}</h5>
            <p>{product.brand}</p>
            <div className="rating stars">
              {renderStars(product.rating || 4)}
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex align-items-center gap-4">
        <div className="d-flex align-items-center">
          <button
            className="btn d-flex align-items-center justify-content-center rounded-1 p-1"
            style={{backgroundColor:"#34d399",color:isDark?"white":"black",height:"20px",width:"15px"}}
            onClick={handleDecrement}
          >
            -
          </button>
          <span className="mx-3">{quantity}</span>
          <button
            className="btn d-flex align-items-center justify-content-center rounded-1 p-1"
            style={{backgroundColor:"#34d399",color:isDark?"white":"black",height:"20px",width:"15px"}}
            onClick={handleIncrement}
          >
            +
          </button>
        </div>

        <div
          className="d-flex flex-column align-items-end"
          style={{ minWidth: "100px" }}
        >
          <span className="fw-bold price">${product.price.toFixed(2)}</span>
          <div>
            <button
              className="btn btn-danger mt-1 text-decoration-none"
              onClick={() => onClickDelete(product.id)}
              style={{ fontSize: "0.875rem" }}
            >
              <RiDeleteBinFill />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const DonationForm = () => {
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const amounts = [
    { value: 10, label: "$50" },
    { value: 20, label: "$30" },
    { value: 50, label: "$20" },
    { value: 100, label: "$10" },
  ];

  return (
    <div className="container shadow">
      <p className="fw-bold">Support Transformative social wok in India</p>
      <div className="form-check mb-2">
        <input
          type="checkbox"
          className="form-check-input"
          id="donateCheck"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        <label className="form-check-label " htmlFor="donateCheck">
          Donate and make a difference
        </label>
      </div>

      <div className="mb-1">
        {amounts.map((amount) => (
          <button
            key={amount.value}
            onClick={() => setSelectedAmount(amount.value)}
            className={`
              btn rounded-pill me-2 mb-2 fs-6
              ${
                selectedAmount === amount.value
                  ? "btn-primary"
                  : "btn-outline-secondary"
              }
            `}
          >
            {amount.label}
          </button>
        ))}
      </div>

      <a href="#" className="text-danger text-decoration-none mb-3">
        Know More
      </a>
    </div>
  );
};

const OrderSummary = ({ totalMRP, isDark,showModal,setShowModal }) => {
  const discount = totalMRP * 0.1;

  return (
    <div
      className="card p-3"
      style={{
        width: "400px",
        backgroundColor: isDark ? "#1a1a1a" : "Whitesmoke",
        color: isDark ? "whitesmoke" : "black",
        borderColor: isDark ? "#1a1a1a" : "Whitesmoke",
      }}
    >
      <DonationForm />
      <div className="mt-4 shadow p-2">
        <h5 className="mb-4">Apply Coupon</h5>
        <div className="mb-3">
          <input
            type="text"
            className="form-control mb-2"
            placeholder="Enter Promo Code"
          />
          <button
            className="btn btn-dark   w-100 border-0  fw-bold submit-btn"
            style={{
              color: isDark ? "white" : "black",
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div className="mt-4 shadow p-2">
        <div className="d-flex justify-content-between mb-2">
          <span>Total MRP</span>
          <span>${totalMRP.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Shipping cost</span>
          <span className="text-success">Free</span>
        </div>
        <div className="d-flex justify-content-between mb-2">
          <span>Discount (10%)</span>
          <span>-${discount.toFixed(2)}</span>
        </div>
        <div className="d-flex justify-content-between fw-bold mt-3">
          <span>Estimated Total</span>
          <span>${(totalMRP - discount).toFixed(2)}</span>
        </div>
        <button
          className="btn checkout-btn border-0 fw-bold w-100 mt-3"
          style={{ color: isDark ? "white" : "black" }}
          variant="primary" onClick={() => setShowModal(true)}
        >
          Checkout
        </button>
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add New Address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddressForm totalPrice={(totalMRP - discount)} isDark={isDark}/>
        </Modal.Body>
      </Modal>
      </div>
    </div>
  );
};

const Cart = ({ cartList, setCartList, isDark }) => {
  const [itemTotalPrices, setItemTotalPrices] = useState({});
  const [showModal, setShowModal] = useState(false);
  const onClickDelete = (id) => {
    setCartList(cartList.filter((item) => item.id !== id));
    setItemTotalPrices((prev) => {
      const newPrices = { ...prev };
      delete newPrices[id];
      return newPrices;
    });
  };

  const handleItemTotalPrice = (id, totalPrice) => {
    setItemTotalPrices((prev) => ({ ...prev, [id]: totalPrice }));
  };

  const totalMRP = Object.values(itemTotalPrices).reduce(
    (acc, price) => acc + price,
    0
  );

  return (
    <div className="d-flex justify-content-center align-content-center"
      style={{
        backgroundColor: isDark ? "#1a1a1a" : "whiteSmoke",
        height: "100vh",
      }}
    >
      <div className="row d-flex flex-wrap">
        {cartList.length === 0 ? (
          <div className="empty-cart">
            <h3 style={{ color: isDark ? "whitesmoke" : "black" }}>
              Oops..Your Bag is Empty..!
            </h3>
            <img src="https://cdni.iconscout.com/illustration/premium/thumb/emptybag-illustration-download-in-svg-png-gif-file-formats--empty-shopping-bag-cart-is-no-items-zero-added-ecommerce-pack-e-commerce-illustrations-6632280.png?f=webp" className="mt-img" alt="cart-empty" />
            <Link to="/Shop">
              <button className="shop-now mt-3">Continue Shopping..!</button>
            </Link>
          </div>
        ) : (
          <div className="d-flex flex-wrap w-100" style={{ gap: "20px" }}>
            <div
              className="card flex-grow-1"
              style={{ minWidth: "300px", flexBasis: "60%" }}
            >
              <div
                className="card-body cartitems-container"
                style={{
                  backgroundColor: isDark ? "#1a1a1a" : "whiteSmoke",
                  color: isDark ? "whitesmoke" : "black",
                }}
              >
                {cartList.map((product) => (
                  <CartItem
                    key={product.id}
                    product={product}
                    isDark={isDark}
                    onClickDelete={onClickDelete}
                    handleItemTotalPrice={handleItemTotalPrice}
                  />
                ))}
              </div>
            </div>
            <div
              className="card flex-grow-1 border-0"
              style={{
                minWidth: "250px",
                flexBasis: "35%",
                backgroundColor: isDark ? "#1a1a1a" : "whiteSmoke",
                color: isDark ? "whitesmoke" : "black",
              }}
            >
              <OrderSummary totalMRP={totalMRP} isDark={isDark} setShowModal={setShowModal} showModal={showModal} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
