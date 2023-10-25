const { resolve } = require('path');
const sassConfig = require('../sass-loader.config');
module.exports = {
  stories: ['../@(src|stories)/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    {
      name: '@storybook/preset-scss',
      options: {
        sassLoaderOptions: sassConfig,
      },
    },
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-storysource',
    '@storybook/addon-a11y',
  ],
  webpackFinal: async (config, { configType }) => {
    // Transpile Gatsby module because Gatsby includes un-transpiled ES6 code.
    config.module.rules.push({
      test: /\.js$/,
      exclude: /node_modules\/(?!(gatsby)\/)/,
      use: [
        {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: [
              require.resolve('babel-plugin-remove-graphql-queries'),
              // any other plugins you need to use
            ],
          },
        },
      ],
    });
    // Add Sass/SCSS support
    config.module.rules.push({
      test: /\.(s*)css$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: resolve(__dirname, '../'),
    });

    return config;
  },
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
