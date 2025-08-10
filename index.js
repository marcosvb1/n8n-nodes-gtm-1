// This file ensures n8n can find and load your nodes and credentials
const { GtmImproved } = require('./dist/nodes/GTM/GtmImproved.node.js');

module.exports = {
  nodeTypes: {
    gtmImproved: GtmImproved,
  },
  credentialTypes: {
    GoogleTagManagerApi: require('./dist/credentials/GoogleTagManagerApi.credentials.js').GoogleTagManagerApi,
  },
};
