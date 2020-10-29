module.exports = {
    siteMetadata: {
        title: "Client Note App",
        description: "Keep track of notes and their origins for each of your clients",
    },
    plugins: [
        `gatsby-plugin-sass`,
        `gatsby-plugin-react-helmet`,
        {
            resolve: "gatsby-plugin-page-progress",
            options: {
                height: 8,
                prependToBody: true,
                color: `#ffe2d6`,
            }
        },
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "G-R2N16M8W1Z"
            }
        }
    ]
};