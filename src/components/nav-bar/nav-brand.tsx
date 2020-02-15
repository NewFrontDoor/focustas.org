/** @jsx jsx */
import {FC} from 'react';
import {jsx} from 'theme-ui';

const NavBrand: FC = () => (
  <a
    href="#focus"
    sx={{
      display: 'inline-block',
      fontSize: '1.25rem',
      lineHeight: '3rem',
      whiteSpace: 'nowrap',
      textAlign: ['right', 'left']
    }}
  >
    <img
      src="/logo-long-white.png"
      alt="focus logo"
      sx={{
        margin: 0,
        verticalAlign: 'middle',
        width: ['160px', '250px']
      }}
    />
  </a>
);

export default NavBrand;
