const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'diff.mx',
    description:
      'Collectected notes about software development and computer administration that people can rely on',
    author: '@diffalot'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: path.resolve('./src/components/Layout.jsx'),
          posts: path.resolve('./src/components/Layout.jsx')
        },
        extensions: ['.mdx', '.md'],
        remarkPlugins: [require(`remark-emoji`)],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590
            }
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`
            }
          },
          `gatsby-remark-prismjs`,
          //`gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              className: `header-anchor`
            }
          },
          {
            resolve: `gatsby-remark-external-links`,
            options: {
              target: null,
              rel: `external`
            }
          },
          {
            resolve: `gatsby-remark-classes`,
            options: {
              classMap: {
                heading: 'font-sans font-black'
              }
            }
          }
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `static`,
        path: `${__dirname}/src/static`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'diff.mx',
        short_name: 'diff.mx',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
      }
    },
    'gatsby-plugin-postcss',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    'gatsby-plugin-offline'
    // todo: Give this a try and see how it does with offline mode ???
    // 'gatsby-plugin-no-javascript'
  ]
}
