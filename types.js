// @flow

export type Event = {
  name: string,
  description: string,
  what: string,
  when: string,
  where: string,
  venue: Venue,
};

export type Venue = {
  _id: string,
  description: string,
  hasLocation: boolean,
  mapUrl: string,
  location: {
    street1: string,
  },
};
