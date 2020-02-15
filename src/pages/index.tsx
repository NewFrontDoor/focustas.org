import React from 'react';
import Home from '../components/home';
import withApollo from '../../lib/with-apollo-client';
import PageLayout from '../components/page-layout';

const Index: React.FC = () => (
  <PageLayout>
    <Home slug="home" />
  </PageLayout>
);

export default withApollo(Index);
