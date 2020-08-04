import React from 'react';

import Label from './';

const labelText = 'A label text';

export default {
  title: 'Atoms/Label',
  component: Label,
};

export const DefaultLabel = () => <Label inputId='someid'>{labelText}</Label>;
DefaultLabel.story = {
  name: 'default',
};

export const RequiredLabel = () => <Label inputId='someid1' isRequired={true}>{labelText}</Label>;
RequiredLabel.story = {
  name: 'with required',
};
