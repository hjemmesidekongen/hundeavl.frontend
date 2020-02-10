import React from 'react';
import { render } from '@testing-library/react';

import Footer from '../components/Footer';

it('renders without errors', () => {
  const component = () => render(<Footer />);

  expect(component).not.toThrowError();
});
