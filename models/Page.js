const keystone = require('keystone');
const transform = require('model-transform');
const imageStorage = require('../lib/image-storage');

const {Types} = keystone.Field;

const Page = new keystone.List('Page', {
  autokey: {path: 'slug', from: 'name', unique: true},
  track: true
});

Page.add({
  name: {type: String, required: true},
  description: {type: Types.Html, wysiwyg: true, height: 150},
  heroImage: {
    type: Types.File,
    storage: imageStorage,
    initial: false
  },
  events: {type: Types.Relationship, ref: 'Event', many: true},
  eventsImage: {
    type: Types.File,
    storage: imageStorage,
    initial: false
  },
  getInvolved: {type: Types.Html, wysiwyg: true, height: 150},
  getInvolvedImage: {
    type: Types.File,
    storage: imageStorage,
    initial: false
  },
  aboutUs: {type: Types.Html, wysiwyg: true, height: 150},
  contactUs: {type: Types.Html, wysiwyg: true, height: 150}
});

Page.defaultColumns = 'name, description';

transform.toJSON(Page);
Page.register();
