const path = require("path");
const axios = require("axios");

exports.createPages = async ({ actions: { createPage } }) => {
    try {
        const getAllClients = async function () {
            const endpoint = `https://client-note-app.herokuapp.com/getallclients`;
            // const endpoint = `http://localhost:3000/getallclients`;
            let axiosCall = await axios.get(endpoint)
            return axiosCall.data;
        }

        const clients = await getAllClients();
        clients.forEach(client => {
            createPage({
                path: `/clients/client${client.id}`,
                component: path.resolve("./src/templates/viewClient.js"),
                context: { clientName: client.clientName, clientId: client.id }
            })
        })
    } catch { console.error("error in createPages"); }
}