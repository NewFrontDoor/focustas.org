const keystone = require('keystone');
const transform = require('model-transform');

const Types = keystone.Field.Types;

const Staff = new keystone.List('Staff', {
  label: 'Staff',
  plural: 'Staff',
  track: true,
});

Staff.add({
  name: { type: Types.Name, required: true, index: true },
  bio: { type: Types.Text },
  image: { type: Types.Url },
});

transform.toJSON(Staff);
Staff.defaultColumns = 'name, bio, image';
Staff.register();
