import type { Attribute, Schema } from '@strapi/strapi';

export interface BannerBanner extends Schema.Component {
  collectionName: 'components_banner_banners';
  info: {
    description: '';
    displayName: 'BannerSection';
  };
  attributes: {
    image: Attribute.Media<'images', true> & Attribute.Required;
    Title: Attribute.Text & Attribute.Required;
  };
}

export interface CardsCards extends Schema.Component {
  collectionName: 'components_cards_cards';
  info: {
    description: '';
    displayName: 'Cards';
  };
  attributes: {
    heading: Attribute.Text;
    image: Attribute.Media<'images'> & Attribute.Required;
    paragraph: Attribute.Text;
  };
}

export interface DoctorsInformationDoctorsInformation extends Schema.Component {
  collectionName: 'components_doctors_information_doctors_informations';
  info: {
    description: '';
    displayName: 'DoctorsInformation';
  };
  attributes: {
    AvailableHrs1: Attribute.Text & Attribute.Required;
    AvailableHrs2: Attribute.Text & Attribute.Required;
    Email: Attribute.Email & Attribute.Required;
    Heading: Attribute.Text & Attribute.Required;
    Image: Attribute.Media<'images', true> & Attribute.Required;
    Number1: Attribute.String & Attribute.Required;
    Number2: Attribute.String & Attribute.Required;
    Paragraph: Attribute.Text & Attribute.Required;
  };
}

export interface MessageMessage extends Schema.Component {
  collectionName: 'components_message_messages';
  info: {
    description: '';
    displayName: 'Message';
  };
  attributes: {
    heading: Attribute.String;
    paragraph: Attribute.String;
    subheading: Attribute.String;
  };
}

export interface QuerySectionQuerySection extends Schema.Component {
  collectionName: 'components_query_section_query_sections';
  info: {
    description: '';
    displayName: 'QuerySection';
  };
  attributes: {
    BgImage: Attribute.Media<'images', true>;
    Button: Attribute.String & Attribute.Required;
    CallusNum1: Attribute.Text & Attribute.Required;
    CallusNum2: Attribute.Text & Attribute.Required;
    Title: Attribute.Text & Attribute.Required;
  };
}

export interface WelcomeNotesWelcomeNotes extends Schema.Component {
  collectionName: 'components_welcome_notes_welcome_notes';
  info: {
    description: '';
    displayName: 'WelcomeNotes';
  };
  attributes: {
    Button: Attribute.String & Attribute.Required;
    Heading: Attribute.Text & Attribute.Required;
    Paragraph: Attribute.Text & Attribute.Required;
    Title: Attribute.Text & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'banner.banner': BannerBanner;
      'cards.cards': CardsCards;
      'doctors-information.doctors-information': DoctorsInformationDoctorsInformation;
      'message.message': MessageMessage;
      'query-section.query-section': QuerySectionQuerySection;
      'welcome-notes.welcome-notes': WelcomeNotesWelcomeNotes;
    }
  }
}
