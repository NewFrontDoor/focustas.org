import React from 'react';
import PropTypes from 'prop-types';
import gql from 'graphql-tag';
import {css} from '@emotion/core';
import {graphql} from 'react-apollo';
import Flex, {FlexItem} from 'mineral-ui/Flex';
import {media} from '../config/constants';
import Welcome from './welcome';
import Events from './events';
import Involved from './involved';
import Contact from './contact';
import Where from './where';
import About from './about';
import SideBar from './side-bar';
import SiteWrapper from './site-wrapper';

const firstPage = gql`
  query firstPage($input: FilterFindOnePageInput) {
    page: pageOne(filter: $input) {
      description
      getInvolved
      aboutUs
      contactUs
      heroImage {
        url
      }
      getInvolvedImage {
        url
      }
      eventsImage {
        url
      }
    }
  }
`;

const withData = graphql(firstPage, {
  options: ({slug}) => ({
    variables: {
      input: {
        slug
      }
    }
  }),
  props: ({data}) => ({
    page: data.page || {}
  })
});

const Home = ({page}) => (
  <SiteWrapper>
    <Flex
      paddingTop="4rem"
      breakpoints={['medium']}
      direction={['column', 'row']}
    >
      <FlexItem id="home" grow={1} paddingHorizontal="1rem">
        <Welcome description={page.description} image={page.heroImage} />
        <Events image={page.eventsImage} />
        <Involved
          description={page.getInvolved}
          image={page.getInvolvedImage}
        />
        <About description={page.aboutUs} />
        <Where />
        <Contact description={page.contactUs} />
      </FlexItem>
      <FlexItem
        flex
        shrink={0}
        paddingTop="4rem"
        paddingHorizontal="1rem"
        breakpoints={['medium']}
        width={['100%', '340px']}
      >
        <SideBar />
      </FlexItem>
    </Flex>
  </SiteWrapper>
);

Home.propTypes = {
  page: PropTypes.shape({
    description: PropTypes.string,
    getInvolved: PropTypes.string,
    aboutUs: PropTypes.string,
    contactUs: PropTypes.string
  }).isRequired
};

export default withData(Home);
