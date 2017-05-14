// @flow
import React from 'react';
import './Contact.css';
import Blurb from '../Blurb/Blurb';

const Contact = () => (
  <div id="contact" className="parent-component">

    <Blurb h2="Contact Us">
      <p>
        We'd love to hear from you.<br />
        <a href="mailto:staff@focustas.org">staff@focustas.org</a>
      </p>
    </Blurb>
  </div>
);

export default Contact;
