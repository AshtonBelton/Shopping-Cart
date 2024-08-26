import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/shop.css";

function ShopPage() {
    return (
        <div className="shop-page">
            <h1>Shop Our Products</h1>
            <div className="product-grid">
                <div className="product-card">
                    <h2>T-Shirt</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum deserunt error veritatis suscipit saepe, 
                        molestias ea porro provident laudantium nihil totam iste eligendi eos quis ipsa culpa minima delectus.
                    </p>
                    <input type="number" min="1" defaultValue="1" />
                    <button>Add To Cart</button>
                </div>
                <div className="product-card">
                    <h2>Pants</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum deserunt error veritatis suscipit saepe, 
                        molestias ea porro provident laudantium nihil totam iste eligendi eos quis ipsa culpa minima delectus.
                    </p>
                    <input type="number" min="1" defaultValue="1" />
                    <button>Add To Cart</button>
                </div>
                <div className="product-card">
                    <h2>Hat</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum deserunt error veritatis suscipit saepe, 
                        molestias ea porro provident laudantium nihil totam iste eligendi eos quis ipsa culpa minima delectus.
                    </p>
                    <input type="number" min="1" defaultValue="1" />
                    <button>Add To Cart</button>
                </div>
                <div className="product-card">
                    <h2>Backpack</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed earum deserunt error veritatis suscipit saepe, 
                        molestias ea porro provident laudantium nihil totam iste eligendi eos quis ipsa culpa minima delectus.
                    </p>
                    <input type="number" min="1" defaultValue="1" />
                    <button>Add To Cart</button>
                </div>
            </div>
        </div>
    );
}

export default ShopPage;