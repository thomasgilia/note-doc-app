import axios from "axios";

export function getClients() {
  const endpoint = `http://localhost:3000/getallnotes`;
  return axios.get(endpoint).then(function (response) {
    console.log(response);
    return response.data;
  });
}