const path = require('path');

module.exports = {
  webpack: {
    alias: {
      '@contact-simple': path.resolve(__dirname, 'src/'),
      '@contact-simple-main': path.resolve(__dirname, 'src/Main'),
      '@contact-simple-components': path.resolve(__dirname, 'src/components'),
    },
  }
}