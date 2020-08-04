import React from 'react';

import InputField from './';

const inputId = 'customId';

export default {
  title: 'Atoms/Input field',
  component: InputField,
};

export const TextInput = () => <InputField inputId={inputId} />
TextInput.story = {
  name: 'of type text',
};

export const PasswordInput = () => <InputField inputId={inputId} type="password" />
PasswordInput.story = {
  name: 'of type password',
};

export const EmailInput = () => <InputField inputId={inputId} type="email" />
EmailInput.story = {
  name: 'of type email',
};

export const NumberInput = () => <InputField inputId={inputId} type="number" />
NumberInput.story = {
  name: 'of type number',
};

export const TelInput = () => <InputField inputId={inputId} type="tel" />
TelInput.story = {
  name: 'of type tel',
};

export const SearchInput = () => <InputField inputId={inputId} type="search" />
SearchInput.story = {
  name: 'of type search',
};

export const URLInput = () => <InputField inputId={inputId} type="url" />
URLInput.story = {
  name: 'of type URL',
};
