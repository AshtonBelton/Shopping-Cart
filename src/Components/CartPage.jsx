import React from "react";
import "../Styles/cart.css";

function CartPage({ cart, incrementQuantity, decrementQuantity, calculateTotal, removeFromCart }) {
    return (
        <div className="cart-page">
            <h1>Your Cart</h1>
            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        <p>{item.title}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => incrementQuantity(item.id)}>+</button>
                        <button onClick={() => decrementQuantity(item.id)}>-</button>
                        <p>Price: ${(item.price * item.quantity).toFixed(2)}</p>
                        <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <h2>Total: ${calculateTotal()}</h2>
        </div>
    );
}

export default CartPage;