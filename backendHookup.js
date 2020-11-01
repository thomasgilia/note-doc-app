import axios from "axios";

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
  updatedAt: "Last update"
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
  clientId: "Client Id",
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

function toArray(incoming) {
  let arr = Object.entries(incoming)
  arr.map((item) => {
    let key = item[0]
    let value = item[1].toString()
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

function toNoteArray(incoming) {
  let arr = Object.entries(incoming)
  arr.map((item) => {
    let key = item[0]
    let value
    if (item[1] !== null) { value = item[1].toString() }

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

export function getClients() {
  // const endpoint = `http://localhost:3000/getallclients`;
  const endpoint = `https://client-note-app.herokuapp.com/getallclients`;
  let resource = "clients"
  return (axios.get(endpoint).then(function (response) {
    let newArr = response.data.map((element) => {
      return toArray(element)
    })
    let transferArr = [{ resource: resource }, { response: newArr }]
    return (transferArr);
  })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    }))
};

export function getAllNotes() {
  // const endpoint = `http://localhost:3000/getallnotes`;
  const endpoint = `https://client-note-app.herokuapp.com/getallnotes`;
  return (axios.get(endpoint).then(function (response) {
    let flagged = response.data.filter((element) => {
      if (element.flagUrgent === true) {
        return element
      }
    })
    let sorted = flagged.sort((a, b) => 0 - (a.updatedAt > b.updatedAt ? 1 : -1))

    sorted.forEach((element) => {
      let thisDate = element.updatedAt
      let x = thisDate.split("T")
      let dateSection = x[0]
      let parts = dateSection.split('-')
      let mydate = `${parts[1]}-${parts[2]}-${parts[0]}`;
      element.updatedAt = mydate
    })

    return sorted
  }
  )
  )
};

export async function createClient(input) {
  // const endpoint = `http://localhost:3000/clients`;
  const endpoint = `https://client-note-app.herokuapp.com/clients`;
  axios.post(endpoint, input
  ).then((res) => {
    console.log("RESPONSE RECEIVED: ", res.data);
    alert("Client was created. Please allow a few moments for the client page to be created")
    if (res.data === 'client was created') {
      window.location = `http://localhost:8000/`;
    }
  }).catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })
};

export async function createNote(transferObj) {
  let transferObjData = { ...transferObj }
  let clientId = transferObjData.clientId
  // const endpoint = `http://localhost:3000/notes/client${clientId}`;
  const endpoint = `https://client-note-app.herokuapp.com/notes/client${clientId}`;
  return axios.post(endpoint, transferObjData
  ).then((res) => {
    console.log("RESPONSE RECEIVED: ", res.data);
    console.log(transferObjData)
    if (res.data) {
      let clientId = res.data
      window.location = `http://localhost:8000/clients/client${clientId}`;
      alert("Note was created")
    }

  })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
};



export function getClient(clientId) {
  // const endpoint = `http://localhost:3000/clients/client${id}`;  //?
  const endpoint = `https://client-note-app.herokuapp.com/clients/client${clientId}`;
  let resource = "client"
  console.log("hittign get client in backend")
  console.log(clientId)
  return (axios.get(endpoint).then(function (response) {
    let newArr = [toArray(response.data)]
    let transferArr = [{ resource: resource }, { response: newArr }]
    return (transferArr);
  })
  ).catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })
};

export function deleteClient(id) {
  // const endpoint = `http://localhost:3000/delete/client${id}`;
  const endpoint = `https://client-note-app.herokuapp.com/delete/client${id}`;
  axios.get(endpoint).then(function (res) {
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
  // const endpoint = `http://localhost:3000/notes/note${id}`;
  const endpoint = `https://client-note-app.herokuapp.com/notes/note${id}`;
  let resource = "note"
  console.log("noteId received from viewnote: " + id)
  return (axios.get(endpoint).then(function (response) {
    let newArr = [toNoteArray(response.data)]
    let transferArr = [{ resource: resource }, { response: newArr }]
    return (transferArr);
  })
  )
};

export function getClientNotes(id) {
  // const endpoint = `http://localhost:3000/notes/client${id}`;
  const endpoint = `https://client-note-app.herokuapp.com/notes/client${id}`;
  let resource = "notes"
  return axios.get(endpoint).then(function (response) {
    let newArr = response.data.map((element) =>
      Object.entries(element))
    let transferArr = [{ resource: resource }, { response: newArr }, { clientId: id }]

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
  // const endpoint = `http://localhost:3000/delete/note${id}`;
  const endpoint = `https://client-note-app.herokuapp.com/delete/note${id}`;
  axios.get(endpoint).then(function (res) {
    if (res.data === 'note was deleted') {
      window.location = `http://localhost:8000/clients/client${clientId}`;
      alert("Note was deleted")
    }
    return res.data
  }
  )
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    })
};
export function editNote(transferObj) {
  let transferObjData = { ...transferObj }
  let clientId = transferObjData.input.clientId
  let noteId = transferObjData.id
  // const endpoint = `http://localhost:3000/edit/Note${noteId}`;
  const endpoint = `https://client-note-app.herokuapp.com/edit/Note${noteId}`;

  axios.post(endpoint, transferObjData).then(function (res) {
    if (res.data === 'note was updated') {
      window.location = `http://localhost:8000/clients/client${clientId}`;
    }
    return res.data
  }
  ).catch((err) => {
    console.log("AXIOS ERROR: ", err);
  })
};