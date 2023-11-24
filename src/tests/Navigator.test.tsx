import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import Navigator from '../components/Navigator';

const mockStore = configureStore();

describe('Navigator Component', () => {
  let store:any;

  beforeEach(() => {
    store = mockStore({
      robotPosition: { x: 3, y: 3 }, 
    });
  });

  test('renders Navigator component', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );

    const navigatorContainer = getByTestId('navigator-container');
    expect(navigatorContainer).toBeInTheDocument();
  });

  test('dispatches MOVE action when clicking on "Up" button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );

    fireEvent.click(getByTestId('navigator-up'));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'MOVE', payload: { x: 0, y: -1 } }]);
  });

  test('dispatches MOVE action when clicking on "Left" button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );

    fireEvent.click(getByTestId('navigator-left'));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'MOVE', payload: { x: -1, y: 0 } }]);
  });

  test('dispatches MOVE action when clicking on "Right" button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );

    fireEvent.click(getByTestId('navigator-right'));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'MOVE', payload: { x: 1, y: 0 } }]);
  });

  test('dispatches MOVE action when clicking on "Down" button', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Navigator />
      </Provider>
    );

    fireEvent.click(getByTestId('navigator-down'));
    const actions = store.getActions();
    expect(actions).toEqual([{ type: 'MOVE', payload: { x: 0, y: 1 } }]);
  });
});
