import { React } from "react";
import "./about.css";
import ContactSection from "../ContactSection";
import Subscribe from "../SubscribeSection";
const whyus = [
  {
    id: 1,
    title: "Quick Delivery",
    description: "We believe in offering the best qualityg.",
    image_url:
      "https://i.pinimg.com/736x/2e/61/37/2e613797023fde004c41cddee43e9286.jpg",
  },
  {
    id: 2,
    title: "Affordable Prices",
    description: "We offer trendy and stylishe for your money.",
    image_url:
      "https://i.pinimg.com/736x/b0/85/b8/b085b87d1168b94409e1b46699065f5e.jpg",
  },
  {
    id: 3,
    title: "Trendy Styles",
    description: "Our collection is curated by r every occasion.",
    image_url:
      "https://i.pinimg.com/736x/fb/66/00/fb66001cfab6d6e6420406767ce75ad8.jpg",
  },
  {
    id: 4,
    title: "Customer Satisfaction",
    description: "We prioritize customer satisferies or concerns.",
    image_url:
      "https://i.pinimg.com/736x/e7/83/ca/e783caf97abc71925e74c99c3fe0e9f7.jpg",
  },
];

const About = ({ isDark }) => {
  return (
    <div
      id="about"
      className="d-flex justify-content-start align-items-center w-100 flex-wrap overflow-hidden"
      style={{ backgroundColor: isDark ? "#1a1a1a" : "#f5f5f5" }}
    >
      <div className="logo-c  mt-4">
        <h1 className={isDark ? "logo-dark" : "logo-light"}>#Style.In</h1>
      </div>
      <div className="m-auto d-flex flex-row justify-content-center top-c">
        <br />
        <div
          className="about-us  p-3"
          style={{
            backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
            color: isDark ? "whitesmoke" : "black",
          }}
        >
          <h1>#About Us</h1>
          <p>
            Welcome to Style.In, your go-to destination for trendy and stylish
            fashion. We offer a curated collection of men’s and women’s clothing
            along with elegant jewelry, ensuring you always stay ahead in the
            fashion game.{" "}
          </p>
        </div>
        <div
          className="about-us p-3 our-journey"
          style={{
            backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
            color: isDark ? "whitesmoke" : "black",
          }}
        >
          <h1>#Our Journey</h1>
          <p>
            Style.In was founded with a passion for blending quality,
            affordability, and modern trends. We started with a vision to make
            fashion accessible for everyone, offering styles that empower
            confidence and self-expression.
          </p>
        </div>
      </div>

      <div
        className="about-us p-3 unique-c "
        style={{
          backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
          color: isDark ? "whitesmoke" : "black",
        }}
      >
        <h1 className="text-center">#What makes us Unique</h1>
        <div className="why-us-card-c">
          {whyus.map((item) => (
            <div
              key={item.id}
              className="why-us-card"
              style={{
                backgroundImage: `linear-gradient(to bottom, transparent, black), url(${item.image_url})`,
                backgroundSize: "contain",
              }}
            >
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div
        className="contact about-us m-auto mt-4 "
        style={{
          backgroundColor: isDark ? "#1a1a1a" : "whitesmoke",
          color: isDark ? "whitesmoke" : "black",
        }}
      >
        <ContactSection isDark={isDark} />
      </div>
      <div className="d-flex flex-row justify-content-center align-items-center w-100" style={{color: isDark ? "whitesmoke" : "black",}}>
     
        <Subscribe />
      </div>
    </div>
  );
};

export default About;
