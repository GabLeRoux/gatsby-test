import React from 'react';
import Section from './Section';

const SUBTITLE = `
Nous offrons des billets à prix unique. Par contre, sur une base de premier arrivé, premier servi,
des billets achetés plus tôt sont disponibles à prix plus bas. Des billets étudiants sont également disponibles,
mais une preuve d'identité sera requise à l'entrée. Aucune vente à la porte.
`;

export default {
  title: 'Shared/Section',
  component: Section,
  argTypes: {
    fluid: { control: 'boolean' },
    dark: { control: 'boolean' },
    secondary: { control: 'boolean' },
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};

const Template = (args) => <Section {...args} />;

export const DefaultSection = Template.bind({});
DefaultSection.args = {
  fluid: false,
  dark: false,
  secondary: false,
  title: 'Welcome to this section',
  subtitle: SUBTITLE,
};
