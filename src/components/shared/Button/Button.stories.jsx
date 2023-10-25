import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import Button from './Button';

export default {
  title: 'Shared/Button',
  component: Button,
  argTypes: {
    children: { control: 'text', defaultValue: 'Click me' },
    size: {
      control: { type: 'select', options: ['sm', null, 'lg'] },
      defaultValue: null,
    },
    disabled: { control: 'boolean', defaultValue: false },
    icon: { control: 'boolean', defaultValue: false },
    color: { control: 'text', defaultValue: 'default' },
  },
};

const Template = (args) => <Button {...args} />;

export const DefaultButtons = Template.bind({});
DefaultButtons.args = {
  color: 'conference',
  // If there are other default props, list them here.
};

export const IconButtons = Template.bind({});
IconButtons.args = {
  icon: <FontAwesomeIcon icon={faFacebookF} />,
  color: 'primary',
  // If there are other icon button props, list them here.
};

const IconStory = (args) => (
  <div className="mb-4">
    <Button icon={<FontAwesomeIcon icon={faFacebookF} />} {...args} />
    <Button icon={<FontAwesomeIcon icon={faLinkedin} />} {...args} />
    <Button icon={<FontAwesomeIcon icon={faTwitter} />} {...args} />
  </div>
);

export const SmallIconButtons = IconStory.bind({});
SmallIconButtons.args = {
  size: 'sm',
};

export const MediumIconButtons = IconStory.bind({});
MediumIconButtons.args = {
  size: 'md',
};

export const LargeIconButtons = IconStory.bind({});
LargeIconButtons.args = {
  size: 'lg',
};
