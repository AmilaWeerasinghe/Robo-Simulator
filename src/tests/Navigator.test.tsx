import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Navigator from '../components/Navigator';

test('handles movement when a navigation button is clicked', () => {
  const handleMove = jest.fn();
  const { getByText } = render(<Navigator handleMove={handleMove} />);
  
  // Click a navigation button
  fireEvent.click(getByText('North'));

  // Expect the handleMove function to be called with the correct direction
  expect(handleMove).toHaveBeenCalledWith('N');
});
