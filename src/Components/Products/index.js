import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { BsFillBagFill } from "react-icons/bs";

import "./products.css";

const Products = ({ productsList, cartList, setCartList, isDark }) => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [filteredProducts, setFilteredProducts] = useState([]);
  // Initialize filtered products with all products
  useEffect(() => {
    setFilteredProducts(productsList);
  }, [productsList]);

  // Handles category filtering
  const handleFilterChange = (e) => {
    const selectedFilter = e.target.value;
    setFilter(selectedFilter);
    filterProducts(selectedFilter, search);
  };

  // Handles search input change
  const handleSearchChange = (e) => {
    const searchTerm = e.target.value;
    setSearch(searchTerm);
    filterProducts(filter, searchTerm);
  };

  // Combined filter function for both category and search
  const filterProducts = (categoryFilter, searchTerm) => {
    let results = [...productsList];

    // Apply category filter
    if (categoryFilter !== "all") {
      results = results.filter(
        (product) => product.category === categoryFilter
      );
    }

    // Apply search filter
    if (searchTerm.trim() !== "") {
      results = results.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(results);
  };

  // Add/remove product from cart
  const handleAddToCart = (product) => {
    const isProductInCart = cartList.some((item) => item.id === product.id);

    if (isProductInCart) {
      setCartList(cartList.filter((item) => item.id !== product.id));
    } else {
      setCartList([...cartList, product]);
    }
  };

  // Render star rating
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FaStar
        key={index}
        className={index < rating ? "star-filled" : "star-empty"}
      />
    ));
  };

  return (
    <div
      className="container-fluid products-c"
      style={{
        backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
        color: isDark ? "#34d399" : "black",
      }}
    >
      <div
        className="d-flex justify-content-center align-items-center search-filter-c w-100 py-3"
        style={{
          backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
          color: isDark ? "#34d399" : "black",
        }}
      >
        <div className="d-flex gap-4 align-items-center m-2">
          <label
            htmlFor="filter"
            className="fw-bold me-2 "
            style={{ color: isDark ? "whitesmoke" : "black" }}
          >
            Category:
          </label>
          <select
            className="form-select w-auto border-2 rounded-2 border-1"
            style={{
              backgroundColor: "whitesmoke",
              color: isDark ? "Whitesnoke" : "black",
            }}
            id="filter"
            onChange={handleFilterChange}
            value={filter}
          >
            <option value="all">All</option>
            <option value="shirt">Shirt</option>
            <option value="trouser">Trouser</option>
            <option value="shoe">Shoe</option>
          </select>
        </div>
        <div
          className="search-c d-flex align-items-center border rounded-2 ps-2"
          style={{ width: "250px", backgroundColor: "#fff" }}
        >
          <input
            className="form-control border-0 text-dark"
            style={{
              backgroundColor: "transparent",
              color: isDark ? "#85d5c8" : "#8D7705",
            }}
            placeholder="Search..."
            type="text"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className=" products mt-3 d-flex flex-row justify-content-center align-items-center flex-wrap">
        {filteredProducts.length === 0 ? (
          <div className="text-center nr-c">
            <p className={`fs-4 fw-bold ${isDark?"text-white":"text-dark"}`}>Oops No Results found :(</p>
            <img src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png " alt="No products" className="nr-img" />
            
          </div>
        ) : (
          filteredProducts.map((product) => {
            const isInCart = cartList.some((item) => item.id === product.id);

            return (
              <div key={product.id} className="m-2 mb-4 ">
                <div
                  className="product-card shadow position-relative"
                  style={{
                    backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
                    color: isDark ? "Whitesmoke" : "black",
                  }}
                >
                  <div className="p-image-container align-self-center align-content-center">
                    <img
                      src={product.image_url}
                      alt={product.title}
                      className="product-image"
                    />
                  </div>
                  <div className="product-info">
                    <h3
                      className="p-product-title"
                      style={{ color: isDark ? "white" : "black" }}
                    >
                      {product.title}
                    </h3>
                    <div className="rating d-flex flex-row align-items-center justify-content-between">
                      <div className="d-flex justify-content-center align-content-center">
                        {renderStars(product.rating || 4)}
                      </div>
                      <p
                        className="fs-5 fw-bold price"
                        style={{ color: isDark ? "white" : "black" }}
                      >
                        ${product.price}
                      </p>
                    </div>

                    <div className="d-flex flex-row justify-content-center align-items-center">
                      <Link
                        to={`/product/${product.id}`}
                        className="text-decoration-none"
                      >
                        <button
                          className=" view-btn p-add-to-cart-btn mb-1 "
                          style={{ color: isDark ? "black" : "white" }}
                        >
                          View
                        </button>
                      </Link>
                      {isInCart ? (
                        <div className="cart-btn">
                          <Link to="/bag">
                            <button
                              className="bg-primary bag bag-dlte-icon"
                              style={{
                                color: isDark ? "black" : "white",
                                
                              }}
                            >
                              <BsFillBagFill />
                            </button>                           
                          </Link>
                          <button
                          className="bg-danger bag-dlte-icon dlte"
                              onClick={() => handleAddToCart(product)}
                              style={{ color: isDark ? "black" : "white" }}
                            >
                              <RiDeleteBin5Fill />
                            </button>
                        </div>
                      ) : (
                        <button
                          className="p-add-to-cart-btn cart-btn"
                          style={{ color: isDark ? "black" : "white" }}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to Bag
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Products;
