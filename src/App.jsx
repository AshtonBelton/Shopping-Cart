import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import HomePage from "./Components/HomePage";
import ShopPage from "./Components/ShopPage";
import CartPage from "./Components/CartPage";
import Navbar from "./Components/Navbar";

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data);
            } catch (error) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };
    
        fetchProducts();
    }, []);

    const addToCart = (product, quantity) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
            setCart(cart.map(item =>
                item.id === product.id
                ? { ...item, quantity: item.quantity + quantity }
                : item
            ));
            } else {
            setCart([...cart, { ...product, quantity }]);
        }
    };

    const incrementQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId
                ? { ...item, quantity: item.quantity + 1 }
                : item
        ));
    };
    
      const decrementQuantity = (productId) => {
        setCart(cart.map(item =>
            item.id === productId && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        ));
    };

    function removeFromCart(productId) {
        setCart(cart.filter(item => item.id !== productId));
    }

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    return (
        <Router>
            <Navbar cart={cart} />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route 
                        path="/shop" 
                        element={
                            <ShopPage
                                products={products} 
                                addToCart={addToCart}
                                loading={loading}
                                error={error}
                            />
                        } 
                    />
                    <Route 
                        path="/cart" 
                        element={
                            <CartPage
                                cart={cart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                calculateTotal={calculateTotal} 
                                removeFromCart={removeFromCart}
                            />
                        } 
                    />
                </Routes>
        </Router>
    );
}

export default App;