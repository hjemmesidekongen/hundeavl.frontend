import React from 'react';
import { render } from '@testing-library/react';

import Header from '../components/Header';

it('renders without errors', () => {
  const component = () => render(<Header />);

  expect(component).not.toThrowError();
});
