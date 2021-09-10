module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "shopify challenge 2",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Urbanist`],
        display: "swap",
      },
    },
  ],
};
