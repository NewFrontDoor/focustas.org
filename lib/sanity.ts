import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: '7z5g5vzl',
  dataset: 'production',
  useCdn: true
});

export default client;
