const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@ec': path.resolve(__dirname, 'src'),
    },
  },
};
