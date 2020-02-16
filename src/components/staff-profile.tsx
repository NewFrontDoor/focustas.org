/** @jsx jsx */

import {FC} from 'react';
import PropTypes from 'prop-types';
import {jsx, Avatar, Flex, Styled} from 'theme-ui';
import {Profile} from './queries';
import BlockContent, {builder} from './block-content';

const StaffProfile: FC<Profile> = ({_id, name, image, bodyText}) => {
  return (
    <>
      <Styled.h3>{name}</Styled.h3>
      <Flex>
        {image && (
          <Avatar
            src={builder.image(image).url()}
            sx={{
              marginY: 4,
              marginRight: 4
            }}
          />
        )}
        <BlockContent blocks={bodyText} />
      </Flex>
    </>
  );
};

StaffProfile.propTypes = {
  _id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.object,
  bodyText: PropTypes.object.isRequired
};

StaffProfile.defaultProps = {
  image: undefined
};

export default StaffProfile;
