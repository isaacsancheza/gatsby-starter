import type { GatsbyConfig } from 'gatsby'

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby Starter`,
    siteUrl: `https://github.com/isaacsancheza/gatsby-starter`,
    description: `A simple starter to get up and developing quickly with Gatsby`,
  },
  graphqlTypegen: {
    typesOutputPath: `gatsby-types.d.ts`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        lang: `es-MX`,
        name: `gatsby-starter-tailwind`,
        icon: `${__dirname}/src/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        serialize: ({ path, modifiedGmt }) => {
          return {
            url: path,
            lastmod: modifiedGmt,
          }
        },
        createLinkInHead: true,
      },
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        policy: [
          {
            allow: '/',
            userAgent: '*',
          },
        ],
      },
    },
  ],
}

export default config
