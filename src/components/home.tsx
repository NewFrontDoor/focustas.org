/** @jsx jsx */
import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Flex, Box} from 'theme-ui';
import Welcome from './welcome';
import SideBar from './side-bar';
import SiteWrapper from './site-wrapper';
import BlockContent from './block-content';
import Heading from './heading';

import {useFirstPageQuery} from './queries';

type HomeProps = {
  slug: string;
};

const icons = {
  drink: '/coffee-icon.png',
  bible: '/bible.png',
  apple: '/apple.png',
  none: undefined
};

const Home: FC<HomeProps> = ({slug}) => {
  const {data, loading} = useFirstPageQuery({
    variables: {
      input: {
        slug
      }
    }
  });

  if (loading) {
    return null;
  }

  return (
    <SiteWrapper>
      <Flex
        paddingTop={5}
        sx={{
          flexDirection: ['column', 'row']
        }}
      >
        <Box
          id="home"
          paddingX="1rem"
          sx={{
            flexGrow: 1
          }}
        >
          {data?.page && (
            <>
              <Welcome image={data.page.hero}>
                <BlockContent blocks={data.page.mainBody} />
              </Welcome>
              {data.page.content.map(content => (
                <Box key={content._id} id={content.slug} marginTop="6rem">
                  <Heading image={icons[content.icon]}>
                    {content.header}
                  </Heading>
                  <BlockContent blocks={content.bodyText} />
                </Box>
              ))}
            </>
          )}
        </Box>
        <Box
          paddingTop={5}
          paddingX="1rem"
          sx={{
            display: 'flex',
            flexShrink: 0,
            width: ['100%', '340px']
          }}
        >
          <SideBar />
        </Box>
      </Flex>
    </SiteWrapper>
  );
};

Home.propTypes = {
  slug: PropTypes.string.isRequired
};

export default Home;
