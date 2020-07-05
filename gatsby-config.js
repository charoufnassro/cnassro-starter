/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: "WebDev Portfolio",
    description: "This is WebDev Portfolio Site",
    author: "@webdev",
    twitterUsername: "@",
    image: "/twitter-img.png",
    siteUrl: "",
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: `https://api-cnassro.herokuapp.com`,
        queryLimit: 1000, // Default to 100
        contentTypes: [`jobs`, `projects`, `blogs`],
        // singleType: [`about`],
        //  ONLY ADD TO ARRAY IF YOU HAVE DATA IN STRAPI !!!!
        // contentTypes: [],
        singleTypes: [`about`],
      },
    },
    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: `Roboto`,
    //         variants: [`400`, `700`],
    //       },
    //       {
    //         family: `Open Sans`,
    //       },
    //     ],
    //   },
    // },
  ],
}
