/** @jsx jsx */
import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Box} from 'theme-ui';

type GoogleMapProps = {
  query: string;
};

const GoogleMap: FC<GoogleMapProps> = ({query}) => (
  <Box
    sx={{
      position: 'relative',
      display: 'block',
      width: '100%',
      padding: 0,
      overflow: 'hidden',
      paddingBottom: '50vh'
    }}
  >
    <iframe
      allowFullScreen
      title={`Google map ${query}`}
      src={query}
      sx={{
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        width: '100%',
        height: '50vh',
        border: 0
      }}
    />
  </Box>
);

GoogleMap.propTypes = {
  query: PropTypes.string.isRequired
};

export default GoogleMap;
