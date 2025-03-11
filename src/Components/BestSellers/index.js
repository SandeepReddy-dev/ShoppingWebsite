import React from "react";
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import './bestseller.css';

const bestsellersList = [
  {
    id: "SHOE001",
    title: "Puma Running Shoes",
    gender: "male",
    image_url:
      "https://i.pinimg.com/736x/61/4c/ea/614ceab5b1233572297d79937f032c21.jpg",
    ratings: 4.7,
    price: 4000,
    brand: "Puma",
    category: "shoe",
    type: "sports",
  },
  {
    id: "SHOE002",
    title: "Adidas Sneakers",
    gender: "female",
    image_url:
      "https://i.pinimg.com/474x/5c/b0/77/5cb0778ed1f54b6a5113dd9fb4d7ca77.jpg",
    ratings: 4.5,
    price: 3500,
    brand: "Adidas",
    category: "shoe",
    type: "sneakers",
  },
  {
    id: "SHOE003",
    title: "puma Casual Shoes",
    gender: "male",
    image_url:
      "https://i.pinimg.com/474x/d2/ed/bb/d2edbb4dfc1c527150744e2f22580f09.jpg",
    ratings: 4.6,
    price: 1500,
    brand: "puma",
    category: "shoe",
    type: "casuals",
  },
  {
    id: "SHIRT001",
    title: "H&M Casual Shirt",
    gender: "male",
    image_url:
      "https://i.pinimg.com/474x/fe/f6/d4/fef6d4f29bf7a8d0c44c1d2a7e1e3aa0.jpg",
    ratings: 4.7,
    price: 1200,
    brand: "H&M",
    category: "shirt",
    type: "solid",
  },
  {
    id: "SHIRT002",
    title: "Allen Solly Slim Fit Shirt",
    gender: "female",
    image_url:
      "https://i.pinimg.com/474x/f7/5d/3c/f75d3c779a7efd2fe0ba099d59fe4578.jpg",
    ratings: 4.5,
    price: 1500,
    brand: "Allen Solly",
    category: "shirt",
    type: "checks",
  },
  {
    id: "SHIRT003",
    title: "H&M Casual Shirt",
    gender: "male",
    image_url:
      "https://i.pinimg.com/474x/d5/11/1d/d5111dbda9fae30f12f541a17ecf6c36.jpg",
    ratings: 4.6,
    price: 1000,
    brand: "H&M",
    category: "shirt",
    type: "printed",
  },
  {
    id: "TROUSER001",
    category: "trouser",
    title: "Wrogn Slim Fit Chinos",
    gender: "male",
    image_url:
      "https://i.pinimg.com/474x/53/4e/06/534e0652ef42b9669fc33b13d1c29d96.jpg",
    ratings: 4.5,
    brand: "Wrogn",
    price: 899,
    type: "Chinos",
  },
  {
    id: "TROUSER002",
    category: "trouser",
    title: "H&M Casual Chinos",
    gender: "female",
    image_url:
      " https://i.pinimg.com/474x/f5/2e/b0/f52eb093c6898ed474f83722fffacf24.jpg",
    ratings: 4.6,
    brand: "H&M",
    price: 799,
    type: "Chinos",
  },
 
 
];
const BestSellers = ({ isDark }) => {
 

  return (
    <div className="bestsellers-c">
      <h1 className="text-center mb-4" style={{ color: isDark ? "white" : "black" }}>
        BEST SELLERS
      </h1>
      <div className="products-container">
        {bestsellersList.map((item) => (
          <div key={item.id} className="b-product-card shadow">
            <div className="b-image-container bg-transparent">
              <img 
                src={item.image_url} 
                alt={item.title}
                className="b-product-image"
              />
            </div>
            <div className="product-info">
              <h3 className="product-title" style={{color: isDark ? "Whitesmoke" : "black"}}>{item.title}</h3>
              <Link to={`/product/${item.id}`} className="text-decoration-none">
              <button className="add-to-cart-btn p-auto">
                View
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;