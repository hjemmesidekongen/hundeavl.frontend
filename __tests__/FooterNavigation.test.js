import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import FooterNavigation from '../components/FooterNavigation';

it('renders without error', () => {
  const component = () => render(<FooterNavigation links={[]} />);

  expect(component).not.toThrowError();
});

it('doesnt render navigation if no links are provided', () => {
  const { queryByTestId } = render(<FooterNavigation links={[]} />);

  expect(queryByTestId('navigation')).not.toBeInTheDocument();
});

it('renders links that are passed via props', () => {
  const linkProps = [
    { title: 'Link 1', path: '/1' },
    { title: 'Link 2', path: '/2' },
    { title: 'Link 3', path: '/3' },
  ];
  const { getByTestId, getAllByTestId } = render(
    <FooterNavigation links={linkProps} />
  );
  const linkElements = getAllByTestId('link');
  const navigation = getByTestId('navigation');

  expect(linkElements).toHaveLength(linkProps.length);
  expect(navigation).toBeInTheDocument();
});

it('throws an error if passed props have the wrong shape', () => {
  const linkProps = [{ wrongKey: 'me' }];
  const component = () => render(<FooterNavigation links={linkProps} />);

  expect(component).toThrowError();
});
