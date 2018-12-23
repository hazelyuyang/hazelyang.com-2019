module.exports = {
  siteMetadata: {
    title: 'Hazel Yang - Product Designer',
    siteUrl: `https://hazelyang.com/`,
    description:'I am a Product Designer who is passionate about solving complex problems.',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-favicon',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-131267836-1",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "example.com",
      },
    },
  ],
}
