const keystone = require('keystone');
const {GraphQLString, GraphQLBoolean} = require('graphql');
const {GQC} = require('graphql-compose');
const {composeWithMongoose} = require('graphql-compose-mongoose');

const UserTC = composeWithMongoose(keystone.list('User').model);
const PageTC = composeWithMongoose(keystone.list('Page').model);
const EventTC = composeWithMongoose(keystone.list('Event').model);
const VenueTC = composeWithMongoose(keystone.list('Venue').model);
const StaffTC = composeWithMongoose(keystone.list('Staff').model);

const API_KEY = 'AIzaSyAKlXmkxql5J_iKGqRwReGSn1jUGnA1DHU';

UserTC.removeField(['email', 'password']);

VenueTC.addFields({
  hasLocation: {
    type: GraphQLBoolean,
    resolve: source => source.location.street1 !== null,
    projection: {location: true}
  },
  mapUrl: {
    type: GraphQLString,
    resolve: ({location}) => {
      const query = [
        location.number,
        location.name,
        location.street1,
        location.street2,
        location.street3,
        location.suburb,
        location.state,
        location.postcode,
        location.country
      ]
        .filter(Boolean)
        .join('')
        .replace(/\s/, '+');

      return `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${
        query
      }`;
    },
    projection: {location: true}
  }
});

PageTC.addRelation('events', {
  resolver: () => EventTC.getResolver('findByIds'),
  prepareArgs: {
    _ids: source => source.events || []
  },
  projection: {events: true}
});

EventTC.addRelation('venue', {
  resolver: () => VenueTC.getResolver('findById'),
  prepareArgs: {
    _id: source => source.venue
  },
  projection: {venue: true}
});

GQC.rootQuery().addFields({
  hello: {
    type: GraphQLString,
    resolve: () => 'Hi! How are you?'
  },

  userById: UserTC.getResolver('findById'),
  userByIds: UserTC.getResolver('findByIds'),
  userOne: UserTC.getResolver('findOne'),
  userMany: UserTC.getResolver('findMany'),
  userTotal: UserTC.getResolver('count'),
  userConnection: UserTC.getResolver('connection'),

  pageById: PageTC.getResolver('findById'),
  pageByIds: PageTC.getResolver('findByIds'),
  pageOne: PageTC.getResolver('findOne'),
  pageMany: PageTC.getResolver('findMany'),
  pageTotal: PageTC.getResolver('count'),
  pageConnection: PageTC.getResolver('connection'),

  eventById: EventTC.getResolver('findById'),
  eventByIds: EventTC.getResolver('findByIds'),
  eventOne: EventTC.getResolver('findOne'),
  eventMany: EventTC.getResolver('findMany'),
  eventTotal: EventTC.getResolver('count'),
  eventConnection: EventTC.getResolver('connection'),

  venueById: VenueTC.getResolver('findById'),
  venueByIds: VenueTC.getResolver('findByIds'),
  venueOne: VenueTC.getResolver('findOne'),
  venueMany: VenueTC.getResolver('findMany'),
  venueTotal: VenueTC.getResolver('count'),
  venueConnection: VenueTC.getResolver('connection'),

  staffById: StaffTC.getResolver('findById'),
  staffByIDs: StaffTC.getResolver('findByIds'),
  staffOne: StaffTC.getResolver('findOne'),
  staffMany: StaffTC.getResolver('findMany'),
  stafftotal: StaffTC.getResolver('count'),
  staffConnection: StaffTC.getResolver('connection')
});

const schema = GQC.buildSchema();

module.exports = schema;
