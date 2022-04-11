import React from "react";
import { Link } from "react-router-dom";
import FeaturedProduct from "../../components/FeaturedProducts/FeaturedProduct";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import TopPicks from "../../components/TopPicks/TopPicks";
import "./Home.css";

const Home = () => {
  return (
    <main className="home-main">
      {/* <div className="nav-wrap">
        <Navbar />
      </div> */}
      <div className="landing-screen">
        <h3 className="intro-text">
          Woodwork that's more <br />
          than just souvenir.
        </h3>

        <Link to="/products">
          <button className="sq-btn">Shop Now</button>
        </Link>
      </div>
      <div className="product-intro">
        <h3 className="intro-text">
          CREATING GIFTS WITH <br />A LONG AND RICH <br />
          HISTORY.
        </h3>
        <p className="intro-para">
          Developed the concept of exclusivity, a Woodsyshoppe features timeless
          handicraft, with natural fabrics, curved lines, plenty of mirrors and
          classic design, which can be incorporated into any decor project. The
          pieces enchant for their sobriety, to last for generations, faithful
          to the shapes of each period, with a touch of the present.
        </p>
        <Link to="/our-products"><button className="sq-btn">View</button></Link>
        <ul className="scatered-imgs">
          <li className="scatered-img" id="sct-img1">
            <img
              src={require("../../asserts/media/scatered-img (1).jpg")}
              alt=""
            />
          </li>
          <li className="scatered-img" id="sct-img2">
            <img
              src={require("../../asserts/media/scatered-img (2).jpg")}
              alt=""
            />
          </li>
          <li className="scatered-img" id="sct-img3">
            <img
              src={require("../../asserts/media/scatered-img (3).jpg")}
              alt=""
            />
          </li>
          <li className="scatered-img" id="sct-img4">
            <img
              src={require("../../asserts/media/scatered-img (4).jpg")}
              alt=""
            />
          </li>
        </ul>
      </div>
      <div className="featured-products">
        <h4 className="sect-title">Buy our featured products</h4>
        <div className="feat-prod-wrap">
          <FeaturedProduct />
        </div>
        <Link to="/products" className="show-link">Shop All</Link>
      </div>
      <div className="spotlight">
        <div className="spotlight-text">
          <h4 className="sect-title">Indian Wooden Elephant</h4>
          <p className="intro-para">
            An Exquisitely Hand Carved Royal Indian Elephant also known as
            Ambabari Elephant,this artistic wooden sculpture is completely hand
            crafted by skilled artisans from the rural areas of India,this
            Wooden Masterpiece is a great item for gifting purpose,a unique
            Artifact for Art Lovers,& can be a great marvel of attraction for
            your living rooms. wooden elephant sculptures, wooden elephant.
          </p>
          <Link to="/products" className="spotlight-link">View Products</Link>
        </div>
        <img src={require("../../asserts/media/spotlight.png")} alt="" />
      </div>
      <TopPicks />
      <Footer />
    </main>
  );
};

export default Home;
