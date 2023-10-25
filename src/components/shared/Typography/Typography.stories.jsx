import React from 'react';
import Typography from './Typography';

export default {
  title: 'Shared/Typography',
  component: Typography,
  argTypes: {
    uppercase: {
      control: 'boolean',
      defaultValue: false,
      description: 'Uppercase text?',
    },
    light: {
      control: 'boolean',
      defaultValue: false,
      description: 'Lighter text?',
    },
    content: {
      control: 'text',
      defaultValue: 'À propos du Saglac IO',
      description: 'Text content',
    },
  },
};

const TemplateTitles = ({ content, ...args }) =>
  ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].map((variant) => (
    <>
      <span>{variant}</span>
      <Typography variant={variant} {...args}>
        {content}
      </Typography>
    </>
  ));

export const Titles = TemplateTitles.bind({});
Titles.args = {
  uppercase: false,
  light: false,
  content: 'À propos du Saglac IO',
};

const TemplateOtherTexts = ({ content, ...args }) => (
  <>
    <span>Paragraph</span>
    <Typography {...args}>{content}</Typography>
    <span>Span</span>
    <br />
    <Typography tag="span" {...args}>
      {content}
    </Typography>
    <br />
    <span>Lead</span>
    <br />
    <Typography lead {...args}>
      {content}
    </Typography>
  </>
);

export const OtherTexts = TemplateOtherTexts.bind({});
OtherTexts.args = {
  uppercase: false,
  light: false,
  content: 'À propos du Saglac IO',
};
