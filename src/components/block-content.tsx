import React, {FC, ReactNode} from 'react';
import {Styled, Image} from 'theme-ui';
import SanityBlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import StaffProfile from './staff-profile';
import {Profile} from './queries';

const sanityConfig = {
  projectId: '7z5g5vzl',
  dataset: 'production'
};

export const builder = imageUrlBuilder(sanityConfig);

type StaffProfileProps = {
  node: Profile;
};

type ImageProps = {
  node: {
    asset: object;
  };
};

type LinkProps = {
  children: ReactNode;
  mark: {
    _key: string;
    _type: string;
    href: string;
  };
};

type SerializerProps = {
  node: {
    style: string;
    children: Array<{
      text: string;
    }>;
  };
};

const serializers = {
  types: {
    block: (props: SerializerProps) => {
      switch (props.node.style) {
        case 'h2':
          return <Styled.h2 {...props} />;
        case 'h3':
          return <Styled.h3 {...props} />;
        case 'h4':
          return <Styled.h4 {...props} />;
        case 'h5':
          return <Styled.h5 {...props} />;
        case 'ul':
          return <Styled.ul {...props} />;
        case 'ol':
          return <Styled.ol {...props} />;
        case 'li':
          return <Styled.li {...props} />;
        case 'normal':
          return <Styled.p variant="prose" {...props} />;
        default:
          return <Styled.p variant="prose" {...props} />;
      }
    },
    profile: ({node}: StaffProfileProps) => {
      return <StaffProfile {...node} />;
    },
    image: ({node}: ImageProps) => {
      return <Image src={builder.image(node.asset).url()} />;
    }
  },
  marks: {
    link: ({mark, children}: LinkProps) => {
      return <Styled.a {...mark}>{children}</Styled.a>;
    }
  }
};

type BlockContentProps = {
  blocks: any;
};

const BlockContent: FC<BlockContentProps> = props => (
  <SanityBlockContent {...props} {...sanityConfig} serializers={serializers} />
);

export default BlockContent;
