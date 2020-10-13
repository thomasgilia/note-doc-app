// import React from "react"
const path = require("path");
// const GetAll =require("./backendHookup/GetAll")
const axios = require("axios");
// exports.createPages = async ({ actions }) => {
//     try {
//         const { createPage } = actions

//         let clients = await GetAll();
//         clients.forEach(element => {

//             createPage({
//                 path: "/client",
//                 matchPath: "/client/" + element.id,
//                 component: path.resolve("src/templates/viewClient.js")
//             })
//         })
//     } catch (error) {
//         console.log(error)
//     }
// }

exports.createPages = async ({ actions: { createPage } }) => {
    try {
        const getAll = async function () {
            const endpoint = `http://localhost:3000/getallclients`;
            let resource = "clients"
            // console.log(resource)
            let axiosCall = await axios.get(endpoint)
            // console.log(axiosCall)
            // function (axiosCall) {
            // let dbConnectionCheck = response.data;
            let transferArr = [{ resource: resource }, { response: axiosCall.data }]
            // console.log(dbConnectionCheck)
            // console.log(transferArr[1]);    //resource is at 0, response obj at 1
            return (transferArr);
            // };
        }

        const clients = await getAll();
        let theseClients = { ...clients }
        let firstClient = theseClients[1].response[1];

        console.log(firstClient.id)
        // clients.forEach(client => {
        //     console.log(client)
        createPage({
            path: `/client/${firstClient.id}`,
            component: path.resolve("./src/templates/viewClient.js"),
            context: { oneId: firstClient.id }
            //     })
        })
    } catch { console.error("whatchu gonna do when they come for you "); }
    // Create a page for each Pokémon.
    // allPokemon.forEach(pokemon => {
    //     createPage({
    //         path: `/pokemon/${pokemon.name}/`,
    //         component: require.resolve("./src/templates/pokemon.js"),
    //         context: { pokemon },
    //     })
    // })
}
// exports.onCreatePage = ({ page, actions }) => {
//     if (page.path.match(/404/)) {
//       return;
//     }

//     // ...
//   };

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