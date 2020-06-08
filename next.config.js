require('dotenv').config();
const withCSS = require('@zeit/next-css');

module.exports = withCSS({
    webpack: (config, { isServer }) => {
      // Fixes npm packages that depend on `fs` module
      if (!isServer) {
        // eslint-disable-next-line no-param-reassign
        config.node = {
          fs: 'empty',
        };
      }
      return config;
    },
    env: {
      API_URL: process.env.API_URL,
    },
    distDir: "_next",
    generateBuildId: async () => {
        if (process.env.BUILD_ID) {
            return process.env.BUILD_ID;
        } else {
            return `${new Date().getTime()}`;
        }
    }
  });
