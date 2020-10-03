module.exports = {
    /* Site config */
    siteMetadata: {
        title: "NoteDoc App",
        description: "Keep track of notes, files, and their origins for each of your clients",
    },
    plugins: [
      /* Rest of the plugins */
      `gatsby-plugin-nodejs`,
    ],
  };


//from example repo:  ?
//   module.exports = {
//     /* Your site config here */
//     plugins: [
//       `gatsby-plugin-nodejs`,
//       {
//         resolve: `gatsby-plugin-create-client-paths`,
//         options: { prefixes: [`/app/*`] },
//       },
//     ],
//   }