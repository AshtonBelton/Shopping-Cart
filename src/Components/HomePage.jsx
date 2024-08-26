import React from "react";
import "../Styles/home.css";

function HomePage() {
    return (
        <div className="home-page">
            <h1>Welcome to Our Store</h1>
            <p>Explore the best products at unbeatable prices!</p>
            <div className="preview-section">
                <div className="preview-card">Product 1</div>
                <div className="preview-card">Product 2</div>
                <div className="preview-card">Product 3</div>
            </div>
        </div>
    );
}

export default HomePage;