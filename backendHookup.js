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
  revisionLog: "Revision Log",
  createdAt: "Created",
  updateAt: "Last update"     //ends up "" i think update populates afterwards...deal with it later
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
  let resource = "client"
  return (axios.get(endpoint).then(function (response) {
    let clientArr = Object.entries(response.data)
    // console.log(clientArr)
    clientArr.map((item) => {       //item is [id, 2] or ["created at", "2-22-2020"] etc
      let key = item[0]
      let value = item[1].toString()    //without this, the boolean populated blank in table
      console.log(value)
      let newKey = ""
      titleMapArr.forEach((item, index, arr) => {
        if (arr[index][0] === key) {
          newKey = arr[index][1]
        }
        return newKey
      })
      item[0] = newKey
      item[1] = value
      return item
    }
    )
    let transferArr = [{ resource: resource }, { response: clientArr }]
    return (transferArr);
  })
  )
};

export function getClientNotes(id) {
  const endpoint = `http://localhost:3000/notes/note${id}`;
  let resource = "clients"
  return axios.get(endpoint).then(function (response) {
    let transferArr = [{ resource: resource, resourceId: id }, { response: response.data }]
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