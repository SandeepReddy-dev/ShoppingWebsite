import React from "react";
import "./brands.css"; // Ensure to create this CSS file

const Brands = ({ brandsList, isDark }) => {
  return (
    <div className="brands-container">
      <h1 className="mb-4">BRANDS AVAILABLE</h1>
      <div className="brands-slider overflow-hidden w-100">
        <div className="brands-track ">
          {brandsList.concat(brandsList.concat(brandsList)).map((brand, index) => ( // Duplicate for smooth loop
            <div className="brand-card" key={index}>
              <img src={brand.image_url} alt={brand.name} className="brand-image" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;
