/** @jsx jsx */

import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx} from 'theme-ui';
import {Maps} from './queries';
import {GoogleMap, LoadScript, Marker} from '@react-google-maps/api';

const homeMapInner = {
  maxWidth: '800px',
  maxHeight: '500px',
  width: '100%',
  height: '500px'
};

const MapBlock: FC<Maps> = ({location}) => {
  return (
    <>
      <div sx={homeMapInner}>
        <LoadScript
          id="script-loader"
          googleMapsApiKey="AIzaSyBTThwaQ-dHQVR-gjylEOexM1TdWKl7RRQ"
        >
          <GoogleMap
            mapContainerStyle={{
              height: '100%',
              width: '100%'
            }}
            zoom={16}
            center={{
              lat: location.lat,
              lng: location.lng
            }}
            options={{
              disableDefaultUI: true
            }}
          >
            <Marker
              position={{
                lat: location.lat,
                lng: location.lng
              }}
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </>
  );
};

MapBlock.propTypes = {
  location: PropTypes.object.isRequired
};

export default MapBlock;
