import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./iteminfo.css";
import { GiReturnArrow } from "react-icons/gi";
import { Star, StarHalf } from 'lucide-react';

const SimilarProductcard = ({ product, isDark }) => {
    // Function to render rating stars
    const renderRating = (rating) => {
      const stars = [];
      const fullStars = Math.floor(rating);
      const hasHalfStar = rating % 1 !== 0;
  
      for (let i = 0; i < fullStars; i++) {
        stars.push(
          <Star
            key={i}
            size={16}
            fill="#FFD700"
            color="#FFD700"
          />
        );
      }
  
      if (hasHalfStar) {
        stars.push(
          <StarHalf
            key="half"
            size={16}
            fill="#FFD700"
            color="#FFD700"
          />
        );
      }
  
      return stars;
    };
  
    return (
      <div
        className="card border-0 rounded-1 shadow-lg m-2 similar-item-card"
        style={{
          backgroundColor: isDark ? "#1a1a1a" : "white",
          color: isDark ? "white" : "black",
          maxWidth: "280px",
        }}
      >
        <div className="p-3">
          <div
            className="rounded-4 overflow-hidden mb-2"
            style={{ height: "200px" }}
          >
            <img
              src={product.image_url}
              alt={product.title}
              className="w-100 h-100 object-fit-cover"
            />
          </div>
          
          <div className="d-flex flex-column">
            <h6 className="text-truncate mb-1" style={{ fontSize: "0.9rem" }}>
              {product.title}
            </h6>
            
            <div className="d-flex mb-2 rating-price">
              {renderRating(4)}
            </div>
  
            <div className="d-flex justify-content-between align-items-center mb-2 rating-price">
              <span className="fw-bold" style={{ fontSize: "1.2rem" }}>
                ${product.price}
              </span>
            </div>
  
            <Link
              to={`/product/${product.id}`}
              className="btn fw-bold  view-btn text-center rounded-3 "
              style={{  
                backgroundColor: "#34d399",
                border: "none",     
                color:isDark?"black":"white"           
              }}
            >
              View
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  

const ItemInfo = ({ productsList, isDark ,cartList ,setCartList}) => {
  const { id } = useParams();
  const [itemDetails, setItemDetails] = useState({});
  const [similarproducts, setSimilarProducts] = useState([]);
  const [isLoading, setIsloading] = useState(true);
 
  useEffect(() => {
    let Item = productsList.filter((product) => id === product.id);
    setItemDetails(Item);
    let similarItemDetails = productsList.filter(
      (product) => Item[0].category === product.category
    );
    setSimilarProducts(similarItemDetails);
    setIsloading(false);
  }, [id]);

  const handleAddToCart = (product) => {
    setCartList([...cartList, product]);
  
  };
  return (
    <div
      className="min-vh-100 py-4"   
      style={{
        backgroundColor: isDark ? "#1a1a1a" : "white",
        color: isDark ? "#85d5c8" : "#8D7705",
      }}
    >
      {isLoading ? (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="itemdetails-c row g-4 mb-5">
            <div className="overflow-hidden col-md-4">
              <img
                src={itemDetails[0].image_url}
                className="item-image object-fit-cover slide-left"
                style={{ height: "500px", width: "400px" }}
                alt={itemDetails[0].title}
              />
            </div>
            <div className="col-md-6">
              <div className="details-c p-4 slide-right" style={{color: isDark ? "whitesmoke" : "black"}}>
                <h1 className="display-5 fs-1 fw-bold mb-3" style={{width: "200%"}}>
                  {itemDetails[0].title}
                </h1>
                <h2 className="h4 text-muted mb-3">{itemDetails[0].brand}</h2>
                <h2 className="h3 mb-4">Price : ${itemDetails[0].price}</h2>
                <div className="mb-4">
                  <h3 className="h5 mb-3">Select Size</h3>
                  <div className="btn-group" role="group">
                    {["S", "M", "L", "XL"].map((size) => (
                      <button
                        key={size}
                        type="button"
                        className={`btn ${
                          isDark ? "btn-outline-light" : "btn-outline-dark"
                        } mx-1`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
                <p className="mb-4">
                  <i className="bi bi-arrow-return-left me-2 "></i>
                  <span className="fs-5">
                    <GiReturnArrow />
                  </span>
                  10 days return available
                </p>
                  { cartList.some((item) => item.id === itemDetails[0].id)?
                  <Link to="/bag">
                  <button
                  className="bg-primary p-2 fs-6 i-add-to-cart-btn btn btn-lg  fw-bold"
                  style={{
                    backgroundColor:"",
                    color: isDark ? "#1a1a1a" : "white",
                  }}
                >
                  Go to Bag
                </button></Link>:<button
                  className="btn p-2 fw-bold  i-add-to-cart-btn"
                  onClick={() => handleAddToCart(itemDetails[0])} 
                  style={{
                    backgroundColor:"#34d399",
                    color: isDark ? "#1a1a1a" : "white",
                  }}
                >
                  Add to Bag
                </button>}
                
              </div>
            </div>
          </div>

          <section className="mt-1 " style={{color:isDark?"whitesmoke":"black"}}>
            <h2 className="display-6 mb-4 fw-bold  " style={{color:isDark?"whitesmoke":"black"}}>Similar Products</h2>
            <div className="similar-items-c row flex-nowrap overflow-auto pb-4">
              {similarproducts.map((product) => (
                <div className="col-auto" key={product.id}>
                  <SimilarProductcard isDark={isDark} product={product} />
                </div>
              ))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default ItemInfo;
