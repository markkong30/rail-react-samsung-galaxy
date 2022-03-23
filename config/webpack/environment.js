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

const webpack = require("webpack");
const dotenv = require("dotenv");
const dotenvFiles = [`.env.${process.env.NODE_ENV}.local`, ".env.local", `.env.${process.env.NODE_ENV}`, ".env"];
dotenvFiles.forEach((dotenvFile) => {
  dotenv.config({ path: dotenvFile, silent: true });
});
environment.plugins.prepend("Environment", new webpack.EnvironmentPlugin(JSON.parse(JSON.stringify(process.env))));
module.exports = environment;
