import React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './';

export default {
  title: 'Atoms/Button',
  component: Button,
};

export const SubmitButton = () => <Button onClick={action('Clicked')}>Button</Button>;
SubmitButton.story = {
  name: 'of type submit',
}

export const WithLoadingState = () => <Button isLoading={true} onClick={action('Clicked')}>Button</Button>;
WithLoadingState.story = {
  name: 'with loading state',
}

export const WithDisabledState = () => <Button isDisabled={true} onClick={action('Clicked')}>Button</Button>;
WithDisabledState.story = {
  name: 'with disabled state',
}
