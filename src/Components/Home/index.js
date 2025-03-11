import "./home.css"; //importing the css file for styling
import BestSellers from '../BestSellers'
import CorouselContainer from '../CouroselContainer'
import Brands from '../Brands'
import NewArrivals from '../NewArrivals'
import Subscribe from '../SubscribeSection'

const Home = ({ brandsList, isDark }) => {
  return (
    <div className={`home-c ${isDark ? "home-c-dark" : "home-c-light"}`}>
      
      <div>
        <marquee direction="left" scrollamount="15" className="mt -3"
        style={{color:isDark?" white":"black "}}>
          "Welcome to StyleIn...! Where fashion meets attitude! Elevate your
          wardrobe with trendy, stylish, and high-quality apparel for every
          occasion. Step into confidence, because true style is effortless."
        </marquee>
      </div>
      <div className="content-c"><CorouselContainer/></div>    
     
      <div className="d-flex flex-column justify-content-center align-items-center "
      style={{fontFamily:"'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"}}>
        <Brands isDark={isDark}  brandsList={brandsList}/>
        <BestSellers isDark={isDark}/>
        <NewArrivals isDark={isDark}/>
        <Subscribe/>
      </div>
      
    </div>
  );
};

export default Home; //exporting the Home component
