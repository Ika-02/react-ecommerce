import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import ProductItem from '../src/Components/Product/ProductItem';
import { CartContextProvider } from '../src/Components/Cart/Cart';


describe('ProductItem', () => {
    it('renders a product item', () => {
        const item = {
            id: 1,
            name: 'Product 1',
            mainImage: 'https://via.placeholder.com/150',
            price: 10
        };
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <ProductItem item={item} />
                </CartContextProvider>
            </BrowserRouter>
        );
        expect(screen.getByText('Product 1')).toBeInTheDocument();
        expect(screen.getByText('Prix unitaire : 10€')).toBeInTheDocument();
    });
});

describe('ProductItem', () => {
    it('renders a product item', () => {
        const item = {
            id: 2,
            name: 'Product 2',
            mainImage: 'https://via.placeholder.com/250',
            price: 11
        };
        render(
            <BrowserRouter>
                <CartContextProvider>
                    <ProductItem item={item} />
                </CartContextProvider>
            </BrowserRouter>
        );
        expect(screen.getByText('Product 2')).toBeInTheDocument();
        expect(screen.getByText('Prix unitaire : 11€')).toBeInTheDocument();
    });
});