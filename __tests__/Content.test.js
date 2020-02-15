import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Content from '../components/Content';

it('renders without errors', () => {
  const component = () => render(<Content />);

  expect(component).not.toThrowError();
});

it('renders heading if passed via props', () => {
  const { getByTestId } = render(<Content heading="My heading" />);
  const pageHeader = getByTestId('page-heading');

  expect(pageHeader).toBeInTheDocument();
});

it('doesnt render heading if not passed via props', () => {
  const { queryByTestId } = render(<Content heading="" />);

  expect(queryByTestId('page-heading')).not.toBeInTheDocument();
});

it('throws an error if passed heading have the wrong shape', () => {
  const component = () => render(<Content heading={[]} />);

  expect(component).toThrowError();
});
