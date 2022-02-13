module.exports = {
    siteMetadata: {
        title: `Sacramento Digital Marketing Experts, Two Trees PPC`,
        description: `Trusted Digital Marketing Partners In The Sacramento Region. Endorsed By The Sacramento Business Journal & BBB.`,
        author: `Two Trees PPC`,
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
            background_color: `#663399`,
            theme_color: `#663399`,
            display: `minimal-ui`,
            icon: `src/assets/images/favicon.png`, // This path is relative to the root of the site.
        },
        },
        {
            resolve: `gatsby-source-wordpress`,
            options: {
              url:
              // allows a fallback url if WPGRAPHQL_URL is not set in the env, this may be a local or remote WP instance.
                process.env.WPGRAPHQL_URL ||
                `https://twotreesppc.com/graphql`,
              schema: {
                //Prefixes all WP Types with "Wp" so "Post and allPost" become "WpPost and allWpPost".
                typePrefix: `Wp`,
              },
              develop: {
                //caches media files outside of Gatsby's default cache an thus allows them to persist through a cache reset.
                hardCacheMediaFiles: true,
              },
              type: {
                Post: {
                  limit:
                    process.env.NODE_ENV === `development`
                      ? // Lets just pull 50 posts in development to make it easy on ourselves (aka. faster).
                        50
                      : // and we don't actually need more than 5000 in production for this particular site
                        5000,
                },
              },
            },
          },
       
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
}
