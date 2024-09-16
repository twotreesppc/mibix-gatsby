require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
  });
  
  const {
    CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_ENV,
  } = process.env;
  
  if (!CONTENTFUL_SPACE_ID || !CONTENTFUL_ACCESS_TOKEN) {
    throw new Error(
      'Contentful spaceId and the access token need to be provided.'
    );
  }
  
module.exports = {
    siteMetadata: {
        title: `Sacramento Digital Marketing Experts, Two Trees PPC`,
        description: `Trusted Digital Marketing Partners In The Sacramento Region. Endorsed By The Sacramento Business Journal & BBB.`,
        author: `Two Trees PPC`,
    },
    plugins: [
        {
            resolve: `gatsby-source-contentful`,
            options: {
              spaceId: process.env.CONTENTFUL_SPACE_ID,
              accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
              environment: CONTENTFUL_ENV,
            },
          },
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
        'gatsby-plugin-image',
        {
        resolve: `gatsby-plugin-manifest`,
        options: {
            name: `gatsby-starter-default`,
            short_name: `starter`,
            start_url: `/`,
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
        },
        },
        
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
