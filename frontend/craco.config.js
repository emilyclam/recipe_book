const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@api': path.resolve(__dirname, 'src/api'),
    },
  },
};