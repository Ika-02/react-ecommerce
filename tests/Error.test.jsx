import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import Error from '../src/Components/Layout/Error';


describe('Error', () => {
    it('renders an error message', () => {
        render(<Error error={'404 Page Introuvable'} />);
        expect(screen.getByText('404 Page Introuvable')).toBeInTheDocument();
    });
});

describe('Error', () => {
    it('renders an error message', () => {
        render(<Error error={'Network error'} />);
        expect(screen.getByText('Network error')).toBeInTheDocument();
    });
});