const { remarkCodeHike } = require("@code-hike/mdx");

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
      resolve: `gatsby-remark-copy-linked-files`,
      options: {
        destinationDir: (f) => `files/${f.name}`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true, //Optional: Disable insertion of <style> border: 0
              loadingStrategy: "lazy", //Optional: Enable support for lazy-load offscreen iframes. Default is disabled.
              urlOverrides: [
                {
                  id: "youtube",
                  embedURL: (videoId) =>
                    `https://www.youtube-nocookie.com/embed/${videoId}`,
                },
              ], //Optional: Override URL of a service provider, e.g to enable youtube-nocookie support
              containerClass: "embedVideo-container", //Optional: Custom CSS class for iframe container, for multiple classes separate them by space
              iframeId: true, //Optional: if true, iframe's id will be set to what is provided after 'video:' (YouTube IFrame player API requires iframe id)
              sandbox: "allow-same-origin allow-scripts allow-presentation", // Optional: iframe sandbox options - Default: undefined
            },
          },
          "gatsby-remark-responsive-iframe", //Optional: Must be loaded after gatsby-remark-embed-video
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          `gatsby-remark-katex`,
        ],
        mdxOptions: {
          remarkPlugins: [[remarkCodeHike, { theme: "material-palenight" }]],
        },
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
