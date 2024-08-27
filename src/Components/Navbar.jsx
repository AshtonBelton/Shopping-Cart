import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mdiHome, mdiCart, mdiStore } from "@mdi/js";
import Icon from "@mdi/react";
import "../Styles/styles.css";

function Navbar({ cart }) {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <nav className="navbar">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/cart">
                    Cart ({totalItems})
                    <div className="cart-preview">
                        {cart.map((item) => (
                            <div key={item.id} className="cart-preview-item">
                                <p>{item.title}</p>
                                <p>Qty: {item.quantity}</p>
                            </div>
                        ))}
                    </div>
            </Link>
        </nav>
    );
}
  
export default Navbar;