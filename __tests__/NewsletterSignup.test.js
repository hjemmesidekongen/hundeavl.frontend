import React from 'react';
import { render } from '@testing-library/react';

import NewsletterSignup from '../components/NewsletterSignup';

it('renders without error', () => {
  const component = () => render(<NewsletterSignup />);

  expect(component).not.toThrowError();
});
