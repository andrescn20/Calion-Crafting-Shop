import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // optional
// import userEvent from '@testing-library/user-event';
import Shop from './Components/Shop';

//setup props
const sword = [
  {
    name: 'Glamdring',
    price: '$1200',
    image: 'Image Link',
  },
];

describe('Shop Component', () => {
  it('Displays Product Correctly', () => {
    render(<Shop sword={sword} />);
    expect(screen.getByRole('heading').textContent).toMatch(/glamdring/i);
  });
});
