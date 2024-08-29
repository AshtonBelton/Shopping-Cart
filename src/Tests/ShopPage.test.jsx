import { render, screen, fireEvent } from '@testing-library/react';
import ShopPage from '../Components/ShopPage';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';

describe('ShopPage', () => {
    it('adds an item to the cart', () => {
        const products = [
            { id: 1, title: 'Product 1', price: 100, image: 'image1.jpg' },
            { id: 2, title: 'Product 2', price: 200, image: 'image2.jpg' },
        ];
        const addToCart = vi.fn();

        render(
            <MemoryRouter>
                <ShopPage products={products} addToCart={addToCart} />
            </MemoryRouter>
        );

        const addButton = screen.getAllByText(/add to cart/i)[0];
        fireEvent.click(addButton);

        expect(addToCart).toHaveBeenCalledWith(products[0], 1);
    });
});