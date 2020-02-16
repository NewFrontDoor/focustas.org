/** @jsx jsx */
import {FC, useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {jsx, Flex} from 'theme-ui';
import {Events} from 'react-scroll';
import VisuallyHidden from '@reach/visually-hidden';
import SiteWrapper from '../site-wrapper';
import Nav from './nav';
import ToggleButton from './toggle-button';
import NavBrand from './nav-brand';

type IconBarProps = {
  marginTop?: string;
};

const IconBar: FC<IconBarProps> = ({marginTop}) => {
  return (
    <div
      sx={{
        backgroundColor: '#fff',
        display: 'block',
        width: '22px',
        height: '2px',
        borderRadius: '1px',
        marginTop
      }}
    />
  );
};

IconBar.propTypes = {
  marginTop: PropTypes.string
};

IconBar.defaultProps = {
  marginTop: undefined
};

const NavBar: FC = () => {
  const [collapsed, setCollapsed] = useState(true);

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {
      setCollapsed(true);
    });
  }, []);

  return (
    <header
      sx={{
        backgroundImage: 'url(/background.jpg)',
        backgroundRepeat: 'repeat-x',
        left: 0,
        position: 'fixed',
        right: 0,
        zIndex: 10,
        marginBottom: [0, 0, '20px']
      }}
    >
      <SiteWrapper>
        <Flex
          as="nav"
          role="navigation"
          sx={{
            flexDirection: ['column', 'row'],
            justifyContent: 'space-between'
          }}
        >
          <Flex
            sx={{
              justifyContent: 'space-between'
            }}
          >
            <NavBrand />
            <ToggleButton
              type="button"
              onClick={() => setCollapsed(!collapsed)}
            >
              <VisuallyHidden>Toggle navigation</VisuallyHidden>
              <IconBar />
              <IconBar marginTop="4px" />
              <IconBar marginTop="4px" />
            </ToggleButton>
          </Flex>
          <Nav isCollapsed={collapsed} />
        </Flex>
      </SiteWrapper>
    </header>
  );
};

export default NavBar;
