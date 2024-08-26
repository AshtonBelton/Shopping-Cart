import React from "react";
import "../Styles/cart.css";

function CartPage() {
    return (
        <div className="cart-page">
            <h1>Cart Page</h1>
            <div className="cart-items">
                <div className="cart-item">Product in Cart</div>
                <div className="cart-item">Product in Cart</div>
                <div className="cart-item">Product in Cart</div>
            </div>
        </div>
    );
}

export default CartPage;