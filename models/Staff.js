const keystone = require('keystone');
const transform = require('model-transform');
const imageStorage = require('../lib/image-storage');

const {Types} = keystone.Field;

const Staff = new keystone.List('Staff', {
  label: 'Staff',
  plural: 'Staff',
  track: true
});

Staff.add({
  name: {type: Types.Name, required: true, index: true},
  bio: {type: Types.Text},
  image: {
    type: Types.File,
    storage: imageStorage,
    initial: false
  }
});

transform.toJSON(Staff);
Staff.defaultColumns = 'name, bio, image';
Staff.register();
