// @flow

import type { OperationComponent, QueryProps } from 'react-apollo';

import * as React from 'react';
import { gql, graphql } from 'react-apollo';
import styled from 'react-emotion';
import Blurb from './Blurb';
import Heading from './Heading';

type Staff = {
  name: {
    first: string,
    last: string,
  },
  bio: string,
  image: string,
};

type Response = {
  description: string,
  staffMembers: Array<Staff>,
};

type Props = Response & QueryProps;

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

const withData: OperationComponent<Response, {}, Props> = graphql(
  staffMembers,
  {
    props: ({ data }) => ({
      staffMembers: data.staffMembers || [],
    }),
  }
);

const Container = styled.div`
  margin-top: 6rem;
`;

const About = ({ description, staffMembers }: Props) => (
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

export default withData(About);
