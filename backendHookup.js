import axios from "axios";

// //experiment
// export function getNotes() {
//   const endpoint = `http://localhost:3000/getallnotes`;
//   return axios.get(endpoint).then(function (response) {
//     console.log(response);
//     return response.data;
//   });
// }

export function getClients() {
    const endpoint = `http://localhost:3000/getallclients`;
    return axios.get(endpoint).then(function (response) {
      console.log(response);
      return response.data;
    });
  }