/* global ga */

import dynamic from 'next/dynamic';

const Analytics = dynamic(
  async () => {
    await Promise.all([
      import('autotrack/lib/plugins/url-change-tracker'),
      import('autotrack/lib/plugins/clean-url-tracker'),
      import('autotrack/lib/plugins/outbound-link-tracker')
    ]);

    return null;
  },
  {
    ssr: false,
    render: () => {
      ga('create', 'UA-135633979-1', 'auto');
      ga('require', 'urlChangeTracker');
      ga('require', 'cleanUrlTracker');
      ga('require', 'outboundLinkTracker');
      ga('send', 'pageview');
      return null;
    }
  }
);

export default Analytics;
