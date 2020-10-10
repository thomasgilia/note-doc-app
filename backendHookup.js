import axios from "axios";


export function getAll() {
  // const endpoint = `http://192.168.0.1:3000/getallclients`;
  const endpoint = `http://localhost:3000/getallclients`;
  
  let resource = "clients"
  // console.log(resource)
  return axios.get(endpoint).then(function (response) {
    // let dbConnectionCheck = response.data;
    let transferArr =[{ resource: resource },{ response: response.data }]
    // console.log(dbConnectionCheck)
    // console.log(resource)
    // console.log(transferArr[0]);    //resource is at 0, response obj at 1
    return (transferArr);

  });
}

export function getNotes() {
  const endpoint = `http://localhost:3000/getallnotes`;
  return axios.get(endpoint).then(function (response) {
    // console.log(response);
    return response.data;
  });
}

export function getDocs() {
  const endpoint = `http://localhost:3000/getalldocs`;
  return axios.get(endpoint).then(function (response) {
    // console.log(response);
    return response.data;
  });
}