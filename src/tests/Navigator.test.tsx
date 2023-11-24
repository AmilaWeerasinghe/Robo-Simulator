import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navigator from '../components/Navigator';

const mockStore = configureStore();
const initialState = {
  robotPosition: { x: 1, y: 1 },
};
const store = mockStore(initialState);

test('Navigator renders correctly and handles clicks', () => {
 
  const { getByTestId } = render(
    <Provider store={store}>
      <Navigator />
    </Provider>
  );

  // Check if the component renders correctly
  expect(getByTestId('navigator-container')).toBeInTheDocument();

  // Simulate clicks on the navigator buttons
  fireEvent.click(getByTestId('navigator-up'));    // Up button
  fireEvent.click(getByTestId('navigator-left'));  // Left button
  fireEvent.click(getByTestId('navigator-right')); // Right button
  fireEvent.click(getByTestId('navigator-down'));  // Down button

});
