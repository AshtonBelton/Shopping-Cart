import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../Components/Navbar";

describe('Navbar', () => {
    it('renders the Home link', () => {
        render(
            <MemoryRouter>
                <Navbar cart={[]} />
            </MemoryRouter>
        );
        const homeLink = screen.getByText(/home/i);
        expect(homeLink).toBeInTheDocument();
    });
  
    it('renders the Shop link', () => {
        render(
            <MemoryRouter>
                <Navbar cart={[]} />
            </MemoryRouter>
        );
        const shopLink = screen.getByText(/shop/i);
        expect(shopLink).toBeInTheDocument();
    });
  
    it('displays the correct number of items in the cart', () => {
        const cart = [{ id: 1, quantity: 2 }, { id: 2, quantity: 3 }];
        render(
            <MemoryRouter>
                <Navbar cart={cart} />
            </MemoryRouter>
        );
        const cartLink = screen.getByText(/cart \(5\)/i);
        expect(cartLink).toBeInTheDocument();
    });
});