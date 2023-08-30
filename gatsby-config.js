module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        stack_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/cow.png`,
      },
    },
  ],
  siteMetadata: {
    title: `Bastani`,
    description: `I'm Arya Bastani and this is my portfolio, blog, and home on the web.`,
    siteUrl: `https://www.aryabastani.com`,
    keywords: [
      "gatsby",
      "blog",
      "robotics",
      "python",
      "deep learning",
      "machine learning",
    ],
    image: "./src/images/cow.png",
    author: `Arya Bastani`,
  },
};
