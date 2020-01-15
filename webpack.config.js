const path = require('path');

module.exports = {
  mode: "development",
  entry: './module1.js',
  output: {
    filename: 'modules.bundle.js',
    path: path.resolve(__dirname, 'Bundles'),
  },
};

// npm run "build" || "webpack-watch" is defined in "scripts" in package.json.
// tags such as --progress and --watch allow it to rebuild itself upon the modification of files. 