// /**
//  * Configure your Gatsby site with this file.
//  *
//  * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
//  */

// /**
//  * @type {import('gatsby').GatsbyConfig}
//  */
// module.exports = {
//   siteMetadata: {
//     title: `Bastani`,
//     description: `I'm Arya Bastani and this is my portfolio, blog, and home on the web.`,
//     siteUrl: `https://www.aryabastani.com`,
//     keywords: ["gatsby", "blog", "robotics", "python", "deep learning", "machine learning"],
//     image: "./src/images/cow.png",
//     author: `Arya Bastani`,
//   },
//   plugins: [
//     `gatsby-transformer-remark`,
//     {
//       resolve: `gatsby-source-filesystem`,
//       options: {
//         name: `notes`,
//         path: `${__dirname}/src`,
//       },
//     },
//     {
//       resolve: 'gatsby-plugin-manifest',
//       options: {
//         "icon": "src/images/cow.png"
//       }
//     },
//   ],
// }




module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/content/blog/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `projects`,
        path: `${__dirname}/src/content/projects/`,
      },
    },
  ],
  siteMetadata: {
    title: 'Web Warrior',
    description: 'web dev portfolio',
    copyright: 'This website is copyright 2021 Web Warrior'
  },
}