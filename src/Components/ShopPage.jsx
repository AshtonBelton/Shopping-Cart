import React, { useState } from 'react';
import "../Styles/shop.css";

function ShopPage({ products, addToCart, loading, error }) {
    const [inputValue, setInputValue] = useState(1);
    if (loading) return <p>Loading products...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="shop-page">
            <h1>Shop Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <p>${product.price}</p>
                        <p>{product.description}</p>
                        <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        onChange={(e) => setInputValue(parseInt(e.target.value))}
                        />
                        <button onClick={() => addToCart(product, inputValue)}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopPage;