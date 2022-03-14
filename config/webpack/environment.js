// environment.js
const { environment } = require("@rails/webpacker");

const path = require("path");

const customConfig = {
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "..", "..", "app/javascript/src"),
      "@images": path.resolve(__dirname, "..", "..", "app/assets/images"),
    },
  },
};

environment.config.merge(customConfig);

// enable split chunk with default settings with following line
environment.splitChunks();

module.exports = environment;
