import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {graphql} from 'react-apollo';
import styled from 'react-emotion';
import Heading from './heading';

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
  props: ({data}) => ({
    staffMembers: data.staffMembers || []
  })
});

const Container = styled('div')`
  margin-top: 6rem;
`;

const Flex = styled('div')`
  display: flex;
`;

const Mug = styled('img')`
  background-color: #036;
  height: 100px;
  width: 100px;
  border-radius: 100%;
  margin-right: 1.5rem;
  margin-bottom: 1.5rem;
  margin-top: 1.5rem;
`;

const About = ({description, staffMembers}) => (
  <Container id="about">
    <Heading image="/static/apple.png">About us</Heading>
    <div
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{__html: description}}
    />
    {staffMembers.map(member => (
      <React.Fragment key={member._id}>
        <h3>{`${member.name.first} ${member.name.last}`}</h3>
        <Flex>
          <Mug src={member.image} />
          <p
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{__html: member.bio}}
          />
        </Flex>
      </React.Fragment>
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
        last: PropTypes.string
      })
    })
  ).isRequired
};

export default withData(About);
