module.exports = {
  /* Site config */
  siteMetadata: {
    title: "NoteDoc App",
    description: "Keep track of notes, files, and their origins for each of your clients",
  },
  plugins: [

    {
      resolve: "gatsby-source-pg",
      options: {
        connectionString: "postgres://root:root@localhost:32772/capstone",
        schema: "public",
        refetchInterval: 60, // Refetch data every 60 seconds
      },
    },
  ],
};
// The connectionString can be any valid PostgreSQL connection string, a full connection string might look like: postgres://pg_user:pg_pass@pg_host:pg_port/pg_db?ssl=1

// DATABASE_URL=postgres://root:root@localhost:32772/capstone


//from example repo: 
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

// plugins: [
    //   /* Rest of the plugins */
    //   `gatsby-plugin-nodejs`,

    //   {
    //     resolve: 'gatsby-plugin-express',
    //     options: {
    //       output: 'config/gatsby-express.json',
    //     }
    //   }
    // ]