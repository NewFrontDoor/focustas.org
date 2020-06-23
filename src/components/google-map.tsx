/** @jsx jsx */
import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Box} from 'theme-ui';
import {Maps} from './queries';

const GoogleMap: FC<Maps> = ({address}) => {
  const url = 'https://www.google.com/maps/embed/v1/';
  const type = 'place';
  const apiKey = '?key=AIzaSyBTThwaQ-dHQVR-gjylEOexM1TdWKl7RRQ';
  const addressQuery = `&q=${address}`;
  const queryString = url.concat(type, apiKey, addressQuery);

  return (
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
        title={`Google map ${queryString}`}
        src={queryString}
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
};

GoogleMap.propTypes = {
  address: PropTypes.string.isRequired
};

export default GoogleMap;
