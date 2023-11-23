import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Table from '../components/Table';

test('teleports the robot when a cell is clicked', () => {
  const handleTeleport = jest.fn();
  const { getByText } = render(<Table robotPosition={{ x: 1, y: 1 }} handleTeleport={handleTeleport} />);
  
  // Click a cell
  fireEvent.click(getByText('🤖'));

  // Expect the teleport function to be called with the correct coordinates
  expect(handleTeleport).toHaveBeenCalledWith({ x: 1, y: 1 });
});
