import React from "react";
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa6";
import './index.css';

const newarrivals=[
    {
       "id": "SHOE007",
       "title": "Redtape Sneakers",
       "gender": "male",
       "image_url": "https://i.pinimg.com/474x/a2/49/b1/a249b1c4c192fe61ea84a04d809c867b.jpg",
       "ratings": 4.7,
       "price": 2900,
       "brand": "Redtape",
       "category": "shoe",
       "type": "sneakers"
     },
   {
       "id": "SHOE009",
       "title": "Nike Running Shoes",
       "gender": "male",
       "image_url": "https://i.pinimg.com/474x/22/c1/8d/22c18d4159c3bc41597fd9b09e83d6b4.jpg",
       "ratings": 4.8,
       "price": 3800,
       "brand": "Nike",
       "category": "shoe",
       "type": "sports"
     },{
       "id": "SHOE010",
       "title": "US polo Sports Shoes",
       "gender": "female",
       "image_url": "https://i.pinimg.com/736x/ab/a9/2e/aba92ea747c6b5d3d21783beb3675384.jpg",
       "ratings": 4.6,
       "price": 1600,
       "brand": "US polo",
       "category": "shoe",
       "type": "sports"
     },
   {
       "id": "SHIRT005",
       "title": "US polo Slim Fit Shirt",
       "gender": "male",
       "image_url": "https://i.pinimg.com/474x/dd/b6/b4/ddb6b4415c5311fc482a0962f0451537.jpg",
       "ratings": 4.5,
       "price": 1300,
       "brand": "US polo",
       "category": "shirt",
       "type": "checks"
     },
   {
       "id": "SHIRT008",
       "title": "Wrogn Formal Shirt",
       "gender": "female",
       "image_url": "https://i.pinimg.com/474x/bf/3f/89/bf3f8911865d64c2216f104e59797d8e.jpg",
       "ratings": 4.8,
       "price": 1600,
       "brand": "Wrogn",
       "category": "shirt",
       "type": "solid"
     },
   {
       "id": "SHIRT012",
       "title": "US polo Plaid Shirt",
       "gender": "female",
       "image_url": "https://i.pinimg.com/474x/fa/cd/90/facd909c9d1b0654bd8fc386675e6caa.jpg",
       "ratings": 4.6,
       "price": 1450,
       "brand": "US polo",
       "category": "shirt",
       "type": "checks"
     },
   {
       "id": "TROUSER003",
   "category":"trouser",
       "title": "Allen Solly Formal Trousers",
       "gender": "male",
       "image_url": "https://i.pinimg.com/474x/6d/3e/9f/6d3e9f2f17a03d803cfa311f64b2540a.jpg ",
       "ratings": 4.4,
       "brand": "Allen Solly",
       "price": 1200,
       "type": "Formal Pant"
     },  
    {
       "id": "TROUSER010",
   "category":"trouser",
       "title": "H&M Track Pants",
       "gender": "female",
       "image_url": " https://i.pinimg.com/474x/f8/c1/33/f8c1333d821159a8d957af371a0a81ed.jpg",
       "ratings": 4.7,
       "brand": "H&M",
       "price": 799,
       "type": "Jogger"
     },]
const NewArrivals = ({ isDark }) => {
 

  return (
    <div className="bestsellers-c">
      <h1 className="text-center mb-4" style={{ color: isDark ? "white" : "black" }}>
     NEW ARRIVALS
      </h1>
      <div className="products-container">
        {newarrivals.map((item) => (
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
              <button className="add-to-cart-btn">
                VIEW
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;