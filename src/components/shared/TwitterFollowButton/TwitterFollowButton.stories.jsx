import React from 'react';
import config from '~/SiteConfig';
import TwitterFollowButton from './TwitterFollowButton';

export default {
  title: 'Shared/Twitter',
  component: TwitterFollowButton,
  argTypes: {
    expanded: { control: 'boolean', description: 'Include the count?' },
    username: { control: 'text' },
  },
};

const Template = (args) => <TwitterFollowButton {...args} />;

export const FollowButton = Template.bind({});
FollowButton.args = {
  expanded: false,
  username: config.twitter,
};
