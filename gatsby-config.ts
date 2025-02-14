import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `portfolio`,
    siteUrl: `https://samrawit.dev/`,
    og: {
      siteName: 'samrawit Portfolio',
      twitterCreator: '@',
    },
  },
  pathPrefix: "/My_portfolio", // Add this line with your GitHub repo name

  graphqlTypegen: true,
  plugins: [
    "gatsby-transformer-remark", 
    'gatsby-plugin-postcss', 
    `gatsby-plugin-open-graph-images`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
      __key: "images"
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/fav_icon.png',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    }
  ]
};

export default config;
