module.exports = {
  pathPrefix: '/babekulin',
  siteMetadata: {
    title: `Babe Kuliner Food`,
    description: `Hallo, #eatBabe! Saat ini #BabeKulin menyediakan berbagai macam FROZEN FOOD!`,
    author: `@babekulin.food`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#ffc929`,
        theme_color: `#ffc929`,
        display: `minimal-ui`,
        icon: `src/images/babekulin-logo.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-emotion`,
  ],
};
