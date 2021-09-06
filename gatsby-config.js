require('dotenv').config();

module.exports = {
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-tslint`,
    `gatsby-plugin-graphql-loader`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-remark`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-loadable-components-ssr`,
    `gatsby-plugin-remove-serviceworker`,
    {
      resolve: `gatsby-plugin-env-variables`,
      options: {
        whitelist: ['NODE_ENV', 'API_ENV'],
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      implementation: require("sass"),
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },/**
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `music-app`,
        short_name: `MusicApp`,
        start_url: `/app`,
        background_color: `#42acd6`,
        theme_color: `#e88330`,
        display: `minimal-ui`,
        icon: `src/assets/images/icon.png`, // This path is relative to the root of the site.
      },
    },*/
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Open Sans`,
          `Roboto\:300,400,400i,700` // you can also specify font weights and styles
        ],
        display: 'swap'
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GA_MEASUREMENT_ID
        ]
      }
    }
  ],
};
