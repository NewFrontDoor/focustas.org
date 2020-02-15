/** @jsx jsx */

import {FC} from 'react';
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

export default StaffProfile;
