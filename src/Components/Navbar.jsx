import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mdiHome, mdiCart, mdiStore } from "@mdi/js";
import Icon from "@mdi/react";
import "../Styles/styles.css";

function Navbar() {
    const [isCartHovered, setIsCartHovered] = useState(false);

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/" >
                        <Icon path={mdiHome} size={1} />
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shop">
                        <Icon path={mdiStore} size={1} />
                        Shop
                    </Link>
                </li>
                <li
                    onMouseEnter={() => setIsCartHovered(true)}
                    onMouseLeave={() => setIsCartHovered(false)}
                >
                    <Link to="/cart">  
                        <Icon path={mdiCart} size={1} />
                        Cart
                    </Link>
                    {isCartHovered && (
                        <div className="cart-preview">
                            <p>Your cart is empty</p>
                        </div>
                    )}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;