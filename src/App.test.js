import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from './store';
import App from './App';

test('renders learn react link', () => {
  const store = configureStore();
  const { getByText } = render(<Provider store={store}><App /></Provider>);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
