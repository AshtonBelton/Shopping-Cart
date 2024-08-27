import React from 'react';
import "../Styles/shop.css";

function ShopPage({ products, addToCart, loading, error }) {
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
                        <input
                        type="number"
                        min="1"
                        defaultValue="1"
                        onChange={(e) => addToCart(product, parseInt(e.target.value))}
                        />
                        <button onClick={() => addToCart(product, 1)}>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopPage;