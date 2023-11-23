import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navigator from '../components/Navigator';
import { move } from '../store/actions';

const mockStore = configureStore([]);

test('renders navigator component', () => {
  const store = mockStore({
    robotPosition: { x: 1, y: 1 },
  });

  const { getByText } = render(
    <Provider store={store}>
      <Navigator />
    </Provider>
  );

  const northButton = getByText(/North/i);
  expect(northButton).toBeInTheDocument();
});

// test('clicking on navigator button dispatches move action', () => {
//   const store = mockStore({
//     robotPosition: { x: 1, y: 1 },
//   });

//   const { getByText } = render(
//     <Provider store={store}>
//       <Navigator />
//     </Provider>
//   );

//   const northButton = getByText(/North/i);
//   fireEvent.click(northButton);

//   const actions = store.getActions();
//   expect(actions).toEqual([{ type: 'MOVE', payload: { x: 0, y: -1 } }]);
// });
