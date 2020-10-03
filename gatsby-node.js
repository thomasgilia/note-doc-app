
exports.onCreatePage = ({ page, actions }) => {
    if (page.path.match(/404/)) {
      return;
    }
  
    // ...
  };
  
// const path = require(`path`)

// exports.createPages = ({ graphql, actions }) => {
//     const { createPage } = actions
//     const recipeTemplate = path.resolve(`src/templates/recipeTemplate.js`)
//     // Query for markdown nodes to use in creating pages.
//     // You can query for whatever data you want to create pages for e.g.
//     // products, portfolio items, landing pages, etc.
//     // Variables can be added as the second function parameter
//     return graphql(`
// {
//     allContentfulRecipes {
//         nodes {
//           title
//           recipe {
//             recipe
//           }
//           photo {
//             file {
//               url
//               fileName
//             }
//           }
//         }
//       }
//     }
//   `).then(result => {
//         if (result.errors) {
//             return Promise.reject(result.errors)
//         }

//         result.data.allContentfulRecipes.nodes.forEach(node => {
//             createPage({
//                 // Path for this page — required
//                 path: node.title,
//                 component: recipeTemplate,
//                 context: {
//                     // Add optional context data to be inserted
//                     // as props into the page component..
//                     //
//                     // The context data can also be used as
//                     // arguments to the page GraphQL query.
//                     //
//                     // The page "path" is always available as a GraphQL
//                     // argument.
//                     slug: node.title
//                 },
//             })
//         })
//     }).catch(error => {
//         console.log("error in obtaining and/or merging contentful data with recipe template")
//     })
// }