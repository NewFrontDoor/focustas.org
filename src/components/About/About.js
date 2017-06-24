// @flow
import React from 'react';
import { createComponent } from 'react-fela';
import Blurb from '../Blurb/Blurb';
import Heading from '../Heading/Heading';
import apple from './apple.png';
import luke from './Luke_mug.jpg';
import sam from './Sam_mug.jpg';

const Container = createComponent(
  () => ({
    marginTop: '6rem'
  }),
  'div',
  ['id']
);

const About = () =>
  <Container id="about">
    <Heading image={apple}>About us</Heading>
    <Blurb h3="Who we are">
      <p>
        FOCUS is a Christian international student society of the Tasmanian
        University Union (TUU) on the Hobart campus of the University of
        Tasmania. Our society and our staff are also part of the
        {' '}
        <a target="blank" href="http://www.afes.org.au">
          Australian Fellowship of Evangelical Students
        </a>
        .
      </p>
    </Blurb>
    <Blurb h3="What we believe">
      <p>
        We believe in the historic Christian faith in the Truine God, who is
        Father, Son, and Holy Spirit, the same faith shared by Christians across
        time and throughout the world. For this reason, our students and staff
        come from many different countries and backgrounds and are members of
        many different Christian churches. You can read our doctrinal statement
        {' '}
        <a target="blank" href="http://www.afes.org.au/about/doctrinal-basis">
          here
        </a>
        .
        {' '}
      </p>
    </Blurb>
    <Blurb
      h3="The FOCUS Team"
      text="The FOCUS team is made up of about twenty student leaders and staff, who make everything run smoothly. Our team loves to share God's Good News with students, as all of our student leaders and staff are dedicated Christians and Luke and Sam are theologically trained."
    />
    <Blurb
      h3="Luke Hansard"
      teamImg={luke}
      text="Luke is a real Tasmanian local and our only full-time staff. He trained at Moore College in Sydney and gives most of the talks and oversees most of the running of FOCUS. Luke is a husband to Jan and father to three young boys. He likes to cook and eat strange things, especially weird meat. He might ask you to try his cooking."
    />
    <Blurb
      h3="Sam Gough"
      teamImg={sam}
      text="Sam is a graduate of the University of Tasmania, Sydney Missionary Bible College and Moore College. Having trained and worked as a doctor, he made the switch from medicine to FOCUS. Sam is married to Beck and has two young kids, Henry and Phoebe. He loves Maccas, cheap instant coffee and wearing trackies."
    />
  </Container>;

export default About;
