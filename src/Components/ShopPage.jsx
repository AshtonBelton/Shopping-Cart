import React, { useState, useEffect } from "react";
import axios from "axios";
import "../Styles/shop.css";

function ShopPage() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                setProducts(response.data)
            } catch (error) {
                setError('Failed to fetch products');
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, []);

    if (loading) return <p>Loading products...</p>
    if (error) return <p>{error}</p>

    return (
        <div className="shop-page">
            <h1>Shop Our Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <h2>{product.title}</h2>
                        <img src={product.image} alt={product.title} className="product-image" />
                        <p>{product.description}</p>
                        <p>{product.price}</p>
                        <input type="number" min="1" defaultValue="1" />
                        <button>Add To Cart</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ShopPage;