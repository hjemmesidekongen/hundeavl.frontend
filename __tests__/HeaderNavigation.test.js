import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import HeaderNavigation from '../components/HeaderNavigation';

it('renders without error', () => {
  const component = () => render(<HeaderNavigation links={[]} />);

  expect(component).not.toThrowError();
});

it('doesnt render navigation if no links are provided', () => {
  const { queryByTestId } = render(<HeaderNavigation links={[]} />);

  expect(queryByTestId('navigation')).not.toBeInTheDocument();
});

it('renders links that are passed via props', () => {
  const linkProps = [
    { title: 'Link 1', path: '/1' },
    { title: 'Link 2', path: '/2' },
    { title: 'Link 3', path: '/3' },
  ];
  const { getByTestId, getAllByTestId } = render(
    <HeaderNavigation links={linkProps} />
  );
  const linkElements = getAllByTestId('link');
  const navigation = getByTestId('navigation');

  expect(linkElements).toHaveLength(linkProps.length);
  expect(navigation).toBeInTheDocument();
});

it('throws an error if passed props have the wrong shape', () => {
  const linkProps = [{ wrongKey: 'me' }];
  const component = () => render(<HeaderNavigation links={linkProps} />);

  expect(component).toThrowError();
});
