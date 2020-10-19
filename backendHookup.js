import axios from "axios";
import SortListLayout from "./src/components/sortListLayout";
import React from "react"

let titleMap = {
  id: "Client Id",
  clientName: "Client",
  ownedByUser: "Client Owner",
  ownedBy: "Has owner?",
  keyClient: "Key client?",
  reqQuote: "Requires quote",
  reqQuoteApproval: "Requires quote approval",
  standardDiscount: "Standard discount (%)",
  revisionLog: "Revision Log",
  createdAt: "Created",
  updateAt: "Last update"     //ends up "" i think update populates afterwards...deal with it later
};
let titleMapArr = Object.entries(titleMap);

//reusable module to turn data list object to array, then modify titles per map
function toArray(incoming) {
  // console.log(incoming[0])
  let arr = Object.entries(incoming)
  arr.map((item) => {       //item is [id, 2] or ["created at", "2-22-2020"] etc
    let key = item[0]
    let value = item[1].toString()    //without this, the boolean populated blank in table
    // console.log(value)
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
  })
  return arr
}

//need separate/additional fucntionality for getting mulitiple objects
//back from axios call (i.e. a list of clients or multiple notes for a 
//client). i think mapping within main function to call toArray
//for each of the individual objects (like a single client) that are received
//but then will have to add another mapping on the consumer
//side to handle the extra level of nesting
//...alternative is to build a new array with only the items
//needed...
//...or do a separate sortlistlayout - one with search for multiple 
//results and handlign the nesting, one for simpler and not nested


export function getClients() {
  const endpoint = `http://localhost:3000/getallclients`;
  let resource = "clients"
  // console.log(resource)
  return (axios.get(endpoint).then(function (response) {
    // let dbConnectionCheck = response.data;
    // let responseData = response.data
    let newArr = response.data.map((element) => {
      return toArray(element)
    })
    // console.log(newArr)  //works to give correct array of arrays/nested
    let transferArr = [{ resource: resource }, { response: newArr }]
    // console.log(transferArr[1]);    //resource is at 0, response obj at 1
    return (transferArr);
  })
  )
};

export function getClient(id) {
  const endpoint = `http://localhost:3000/clients/client${id}`;
  let resource = "client"
  return (axios.get(endpoint).then(function (response) {
    // let clientArr = Object.entries(response.data)
    // console.log(clientArr)
    let newArr = toArray(response.data)
    let transferArr = [{ resource: resource }, { response: newArr }]
    return (transferArr);
  })
  )
};

export function getClientNotes(id) {
  const endpoint = `http://localhost:3000/notes/client${id}`;
  // console.log("this is client's id: " + id)
  let resource = "notes"
  return axios.get(endpoint).then(function (response) {
    // console.log(response.data)
    let newArr = Object.entries(response.data);  //not titlemapped
    let transferArr = [{ resource: resource }, { response: newArr }, { clientId: id }]   
    // console.log(transferArr)
    return (transferArr)
    // return (<SortListLayout props={transferArr}>transferArr</SortListLayout>);
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