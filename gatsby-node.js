const path = require("path");
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
        const getAllClients = async function () {
            const endpoint = `http://localhost:3000/getallclients`;
            // let resource = "clients"
            // console.log(resource)
            let axiosCall = await axios.get(endpoint)
            // let transferArr = [{ resource: resource }, { response: axiosCall.data }]
            // console.log(transferArr[1]);    //resource is at 0, response obj at 1
            return axiosCall.data;
        }

        const clients = await getAllClients();
        // let theseClients = { ...clients }
        // let firstClient = theseClients[1].response[1];
        // let allClients = {...clients}
        // let clientList = clients.response;
        // console.log(clients)
        clients.forEach(client => {
            console.log(client.clientName)
            createPage({
                path: `/client/${client.id}`,
                component: path.resolve("./src/templates/viewClient.js"),
                context: { clientName: client.clientName, clientId: client.id }
    
            })
        })

        // createPage({
        //     path: `/client/${firstClient.id}`,
        //     component: path.resolve("./src/templates/viewClient.js"),
        //     context: { oneId: firstClient.id }

        // })
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
