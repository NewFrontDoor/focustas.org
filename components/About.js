import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import styled from 'react-emotion';
import Blurb from './Blurb';
import Heading from './Heading';

const staffMembers = gql`
  {
    staffMembers: staffMany {
      _id
      bio
      image
      name {
        first
        last
      }
    }
  }
`;

const withData = graphql(staffMembers, {
  props: ({ data }) => ({
    staffMembers: data.staffMembers || [],
  }),
});

const Container = styled.div`
  margin-top: 6rem;
`;

const About = ({ description, staffMembers }) => (
  <Container id="about">
    <Heading image="/static/apple.png">About us</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: description }}
    />
    {staffMembers.map(member => (
      <Blurb
        key={member._id}
        h3={`${member.name.first} ${member.name.last}`}
        teamImg={member.image}
        text={member.bio}
      />
    ))}
  </Container>
);

About.propTypes = {
  description: PropTypes.string.isRequired,
  staffMembers: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string,
      bio: PropTypes.string,
      image: PropTypes.string,
      name: PropTypes.shape({
        first: PropTypes.string,
        last: PropTypes.string,
      }),
    })
  ).isRequired,
};

export default withData(About);
