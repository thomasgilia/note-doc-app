import axios from "axios";
import SortListLayout from "./src/components/sortListLayout";
import React from "react"

let titleMap = {
  id: "Client Id",
  clientName: "Client",
  ownedBy: "Has owner?",
  ownedByUser: "Client Owner",
  keyClient: "Key client?",
  reqQuote: "Requires quote",
  reqQuoteApproval: "Requires quote approval",
  standardDiscount: "Standard discount (%)",
  revisionLog: "Revision Log",
  createdAt: "Created",
  updatedAt: "Last update"     //ends up "" i think update populates afterwards...deal with it later
};
let titleMapArr = Object.entries(titleMap);

let titleMapNotes = {
  id: "Note Id",
  category: "Category",
  title: "Subject",
  note: "Note body",
  flagUrgent: "Flag as urgent?",
  revisionLog: "Revision Log",
  createdAt: "Created",
  updatedAt: "Last Update",
  clientId: "Client Id"

};
let titleMapNotesArr = Object.entries(titleMapNotes);

export function titleMapper(resource) {
  let titleList = []
  if ((resource === "notes") || (resource === "note")) {
    titleList = titleMapNotesArr
    return titleList
  } else if (resource = ("clients" || "client")) {
    titleList = titleMapArr
    return titleList
  }
  return titleList
}
//reusable module to turn data list object to array, then modify titles per map
function toArray(incoming) {
  let arr = Object.entries(incoming)
  arr.map((item) => {       //item is [id, 2] or ["created at", "2-22-2020"] etc
    let key = item[0]
    let value = item[1].toString()    //without this, the boolean populated blank in table
    // let value = item[1].toString()    //without this, the boolean populated blank in table
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
//reusable module to turn data list object to array, then modify titles per map
function toNoteArray(incoming) {
  let arr = Object.entries(incoming)
  arr.map((item) => {       //item is [id, 2] or ["created at", "2-22-2020"] etc
    let key = item[0].toString()
    let value = item[1].toString()    //without this, the boolean populated blank in table
    let newKey = ""
    titleMapNotesArr.forEach((item, index, arr) => {
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
  // const endpoint = `https://client-note-app.herokuapp.com/getallclients`;
  let resource = "clients"
  return (axios.get(endpoint).then(function (response) {
    // let dbConnectionCheck = response.data;
    // let responseData = response.data
    let newArr = response.data.map((element) => {
      return toArray(element)
    })                                            //prop need a bug fix - if there is only one client in db, need to add null
    let transferArr = [{ resource: resource }, { response: newArr }]
    return (transferArr);
  })
  )
};

export function getAllNotes() {
  const endpoint = `http://localhost:3000/getallnotes`;
  // const endpoint = `https://client-note-app.herokuapp.com/getallnotes`;
  let resource = "notes"
  return (axios.get(endpoint).then(function (response) {
    let flagged = response.data.filter((element) => {
      if (element.flagUrgent === true) {
        return element
      }
    })
    let sorted = flagged.sort((a, b) => 0 - (a.updatedAt > b.updatedAt ? 1 : -1))
    let newArr = sorted.map((element) => {
      return toNoteArray(element)
    })
    let transferArr = [{ resource: resource }, { response: newArr }]
    return (transferArr);
  })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
  )
};
export async function createClient(input) {
  const endpoint = `http://localhost:3000/clients`;
  // const endpoint = `https://client-note-app.herokuapp.com/clients`;
  axios.post(endpoint, input
  ).then((res) => {
    console.log("RESPONSE RECEIVED: ", res.data);
    getClient(res.data.id)    //need to return anything?  this gives me the transfer arr but i need to redirect
    alert("Client was created. Please allow a few moments for the client page to be created")
  })                          //wrinkle: clients are created with createPages adn have pagecontext instead of props
    // .then(axios.post(`https://api.netlify.com/build_hooks/5f92416876a5163859e835d1`, "SuccessfulRebuild"))
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
};

export async function createNote(transferObj) {
  let transferObjData = { ...transferObj }
  // let input = transferObjData.input
  let clientId = transferObjData.clientId
  // console.log(transferObj)
  // export async function createNote(input, id) {
  const endpoint = `http://localhost:3000/notes/client${clientId}`;
  // const endpoint = `https://client-note-app.herokuapp.com/notes/client${clientId}`;
  // console.log("clientId passed from Note form is: " + id)
  axios.post(endpoint, transferObjData
  ).then((res) => {
    console.log("RESPONSE RECEIVED: ", res.data);
    getClient(res.data)    //needed? but may use in redirect. howvefr, as is, it erroes out if anything other
    //than the client's id is passed back
    alert("Note was created")
  })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
};



export function getClient(id) {
  const endpoint = `http://localhost:3000/clients/client${id}`;
  // const endpoint = `https://client-note-app.herokuapp.com/clients/client${id}`;
  // console.log(id)
  let resource = "client"
  return (axios.get(endpoint).then(function (response) {
    // console.log(response.data)
    // let clientArr = Object.entries(response.data)

    // let newArr = [[toArray(response.data)], [null]]
    let newArr = [toArray(response.data)]
    // console.log(newArr)
    //   if (response.length < 2) {
    //     response.push([null])
    // }
    let transferArr = [{ resource: resource }, { response: newArr }]
    // console.log(newArr)
    return (transferArr);
  })
  )
};

// export function editClient(id) {
//   const endpoint = `http://localhost:3000/delete/client${id}`;
//   // const endpoint = `https://client-note-app.herokuapp.com/delete/client${id}`;
//   // console.log(id)
//   // let resource = "client"
//   axios.get(endpoint).then(function (res) {
//     // console.log(newArr)
//     console.log(res.data)
//     if (res.data === 'client was deleted') {
//       window.location = "http://localhost:8000/";
//     }
//     return res.data
//   }
//   ).catch((err) => {
//     console.log("AXIOS ERROR: ", err);
//   })
// };

export function deleteClient(id) {
  const endpoint = `http://localhost:3000/delete/client${id}`;
  // const endpoint = `https://client-note-app.herokuapp.com/delete/client${id}`;
  // console.log(id)
  // let resource = "client"
  axios.get(endpoint).then(function (res) {
    // console.log(newArr)
    // console.log(res.data)
    if (res.data === 'client was deleted') {
      window.location = "http://localhost:8000/";
      alert("Client was deleted")
    }
    return res.data
  }
  ).catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })
};


export function getNote(id) {
  const endpoint = `http://localhost:3000/notes/note${id}`;
  // const endpoint = `https://client-note-app.herokuapp.com/notes/note${id}`;
  let resource = "note"
  return (axios.get(endpoint).then(function (response) {
    // console.log(response.data)
    // let clientArr = Object.entries(response.data)

    // let newArr = [[toArray(response.data)], [null]]
    let newArr = [toNoteArray(response.data)]
    // console.log(newArr)
    //   if (response.length < 2) {
    //     response.push([null])
    // }
    let transferArr = [{ resource: resource }, { response: newArr }]
    // console.log(newArr)
    return (transferArr);
  })
  )
};

export function getClientNotes(id) {
  const endpoint = `http://localhost:3000/notes/client${id}`;
  // const endpoint = `https://client-note-app.herokuapp.com/notes/client${id}`;  //check
  // console.log("this is client's id: " + id)
  let resource = "notes"
  return axios.get(endpoint).then(function (response) {

    // console.log(response.data[0].id)
    let newArr = response.data.map((element) =>
      Object.entries(element))
    let transferArr = [{ resource: resource }, { response: newArr }, { clientId: id }]
    // console.log()
    // if (response.data[0].id > 1) {
    //   alert("See notes below")
    // }else{
    //   alert("No notes yet. Use \"New Note Form\" to add note for this client.")

    // }
    if (response.data[0] === undefined) {
      alert("No notes yet. Use \"New Note Form\" to add note for this client.")
    }
    return (transferArr)
  }).catch((err) => {
    console.log("AXIOS ERROR: ", err);
  });
}

export function deleteNote(ids) {
  let theIds = { ...ids }
  let clientId = theIds.clientId
  let id = theIds.id
  const endpoint = `http://localhost:3000/delete/note${id}`;
  // const endpoint = `https://client-note-app.herokuapp.com/delete/note${id}`;
  // console.log(id)
  axios.get(endpoint).then(function (res) {
    // console.log(res.data)
    if (res.data === 'note was deleted') {
      window.location = `http://localhost:8000/clients/client${clientId}`;    //3000?
      alert("Note was deleted")
    }
    return res.data
  }
  )
    // .then((clientId)=>{getClientNotes(clientId)}).
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
};
export function editNote(transferObj) {
  let transferObjData = { ...transferObj }
  // let clientId = transferObjData.clientId
  let noteId = transferObjData.id
  // console.log(transferObjData)
  const endpoint = `http://localhost:3000/edit/Note${noteId}`;
  // const endpoint = `https://client-note-app.herokuapp.com/edit/Note${id}`;

  axios.post(endpoint, transferObjData).then(function (res) {
    // console.log(newArr)
    // console.log(res.data)
    // if (res.data === 'note was updated') {
    //   window.location = `http://localhost:8000/clients/client${clientId}`;    //3000?
    // }
    // return res.data
  }
  ).catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })
};