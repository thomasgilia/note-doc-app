import axios from "axios";

let titleMap = {
  id: "Client Id",
  clientName: "Client",
  ownedByUser: "Client Owner",
  ownedBy: "Has owner?",
  keyClient: "Key client?",
  reqQuote: "Requires quote",
  reqQuoteApproval: "Requires quote approval",
  standardDiscount: "Standard discount",
  revisionLog: "Revision Log"
};
let titleMapArr = Object.entries(titleMap);

export function getAll() {
  const endpoint = `http://localhost:3000/getallclients`;
  let resource = "clients"
  // console.log(resource)
  return axios.get(endpoint).then(function (response) {
    // let dbConnectionCheck = response.data;
    let transferArr = [{ resource: resource }, { response: response.data }]
    // console.log(dbConnectionCheck)
    // console.log(transferArr[0]);    //resource is at 0, response obj at 1
    return (transferArr);
  });
}

export function getClient(id) {
  const endpoint = `http://localhost:3000/clients/client${id}`;
  let resource = "clients"  //should be client?
  // console.log(resource)
  return axios.get(endpoint).then(function (response) {
    // let dbConnectionCheck = response.data;
    // let clientObj = response.data;
    // let clientArr = Object.entries(clientObj)
    // console.log(clientArr)
    // clientArr.map(function (item) {
    //   let key = item[0]
    //   let newKey = ""
    //   let value = item[1]
    //   titleMapArr.forEach((key) => {
    //     if (key == titleMapArr[0]) {
    //       return key = titleMapArr[1]
    //     }
    //   }
    //   )
    //   console.log(key)
    // })
    // console.log(key)
    // })
    let transferArr = [{ resource: resource }, { response: response.data }]
    // console.log(dbConnectionCheck)
    // console.log(transferArr[0]);    //resource is at 0, response obj at 1
    return (transferArr);
  })
};


export function getClientNotes(id) {
  const endpoint = `http://localhost:3000/notes/note${id}`;
  let resource = "clients"
  // console.log(resource)
  return axios.get(endpoint).then(function (response) {
    // let dbConnectionCheck = response.data;
    let transferArr = [{ resource: resource, resourceId: id }, { response: response.data }]
    // console.log(dbConnectionCheck)
    // console.log(transferArr[0]);    //resource is at 0, response obj at 1
    return (transferArr);
  });
}

// export function getNotes() {
//   const endpoint = `http://localhost:3000/getallnotes`;
//   return axios.get(endpoint).then(function (response) {
//     // console.log(response);
//     return response.data;
//   });
// }

// export function getDocs() {
//   const endpoint = `http://localhost:3000/getalldocs`;
//   return axios.get(endpoint).then(function (response) {
//     // console.log(response);
//     return response.data;
//   });
// }