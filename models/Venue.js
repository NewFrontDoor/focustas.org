const keystone = require('keystone');
const transform = require('model-transform');

const Types = keystone.Field.Types;

const Venue = new keystone.List('Venue');

Venue.add({
  name: {type: String, required: true},
  description: {type: Types.Html, wysiwyg: true, height: 150},
  location: {type: Types.Location, defaults: {country: 'Australia'}}
});

Venue.defaultColumns =
  'name';

transform.toJSON(Venue);
Venue.register();
