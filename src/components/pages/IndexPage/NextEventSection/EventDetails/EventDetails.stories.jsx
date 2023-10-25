import React from 'react';
import EventDetails from './EventDetails';

const MAP =
  'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2648.3839459486885!2d-71.0561580843414!3d48.410772779246145!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cb89228a5876e8b%3A0x93cac562dd8cb02b!2sH%C3%B4tel+le+Montagnais!5e0!3m2!1sen!2sca!4v1560892250568!5m2!1sen!2sca';

const DEFAULTS = {
  locationName: 'Hotel le Montagnais',
  mapSrc: MAP,
  description:
    'L’Hôtel Le Montagnais est l’un des plus grands hôtels au Québec avec un centre de congrès intégré. Le service attentionné à tous les instants et la qualité de la nourriture est leur priorité et leur renommé.',
  eventUrl: 'https://example.com/',
  title: "Titre de l'évènement!",
};

export default {
  title: 'Shared/EventDetails',
  component: EventDetails,
  argTypes: {
    location: {
      name: { control: 'text', defaultValue: DEFAULTS.locationName },
      map: { control: 'text', defaultValue: DEFAULTS.mapSrc },
      description: { control: 'text' },
      facebook: { control: 'text' },
      url: { control: 'text' },
    },
    name: { control: 'text', defaultValue: DEFAULTS.locationName },
    description: { control: 'text', defaultValue: DEFAULTS.description },
    eventUrl: { control: 'text', defaultValue: DEFAULTS.eventUrl },
    title: { control: 'text', defaultValue: DEFAULTS.title },
  },
};

const Template = (args) => <EventDetails {...args} />;

export const DefaultLocationInfo = Template.bind({});
DefaultLocationInfo.args = {
  mapSrc: DEFAULTS.mapSrc,
  location: {
    name: DEFAULTS.locationName,
    map: DEFAULTS.mapSrc,
    description: '',
    facebook: '',
    url: '',
  },
  name: DEFAULTS.locationName,
  description: DEFAULTS.description,
  eventUrl: DEFAULTS.eventUrl,
  title: DEFAULTS.title,
};
