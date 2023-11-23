import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Table from '../components/Table';

const mockStore = configureStore([]);

test('renders table component', () => {
  const store = mockStore({
    robotPosition: { x: 1, y: 1 },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Table />
    </Provider>
  );

  const robotElement = getByText(/🤖/i);
  expect(robotElement).toBeInTheDocument();
});
