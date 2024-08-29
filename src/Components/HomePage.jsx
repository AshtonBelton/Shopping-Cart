import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/shopping.svg";
import backpack from "../assets/backpack.jpg";
import shirt from "../assets/shirt.jpg";
import "../Styles/home.css";

function HomePage() {
    return (
        <div className="home-page">
            <section className="hero-section">
                <img src={heroImage} alt="Hero" className="hero-image" />
                <div className="hero-content">
                    <h1>Welcome to Our Store</h1>
                    <p>Explore the best products at unbeatable prices!</p>
                    <Link to="/shop" className="cta-button">Shop Now</Link>
                </div>
            </section>

            <section className="featured-products">
                <h2>Featured Products</h2>
                <div className="product-list">
                    <div className="product-item">
                        <img src={backpack} alt="Product 1" />
                        <h3>Backpack</h3>
                        <p>A backpack for all your needs!</p>
                        <Link to="/shop" className="view-button">View Product</Link>
                    </div>
                    <div className="product-item">
                        <img src={shirt} alt="Product 2" />
                        <h3>Shirts</h3>
                        <p>Look classy with our huge collection of shirts!</p>
                        <Link to="/shop" className="view-button">View Product</Link>
                    </div>
                </div>
            </section>
            <section className="promo-banner">
                <h2>Special Offer!</h2>
                <p>Get 20% off on your first purchase!</p>
                <Link to="/shop" className="promo-button">Start Shopping</Link>
            </section>
        </div>
    );
};

export default HomePage;