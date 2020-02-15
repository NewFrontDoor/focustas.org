/** @jsx jsx */

import {FC} from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {jsx, ThemeProvider} from 'theme-ui';

import GlobalStyles from './global-styles';

import Analytics from './analytics';
import NavBar from './nav-bar/nav-bar';

import theme from './theme';

const PageLayout: FC = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <Head>
          <title>FOCUS</title>
        </Head>
        <GlobalStyles />
        <NavBar />
        {children}
        <footer
          sx={{
            padding: '2rem 1.5rem'
          }}
        >
          <hr />
          <p>© Shiloh Design 2018</p>
        </footer>
        <Analytics />
      </>
    </ThemeProvider>
  );
};

PageLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default PageLayout;
