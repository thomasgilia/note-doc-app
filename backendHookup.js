import axios from "axios"
// import HomepageLayout from "./src/components/homepage"

// export function getClients() {
    // const endpoint = `http://localhost:3000/getAllClients`
    // return (axios.get(`http://localhost:3000/getAllClients`).then(response => response.data))
    // return (axios.get(`postgres://root:root@localhost:32772/capstone/getAllClients`).then(response => response.data))
    // return (axios.get(`https://cors-anywhere.herokuapp.com/http://192.168.0.4:3000/getAllClients`).then(
    //     function (response) {
    //         console.log(response.headers)
    //         // return (response.data)
    //     })
    // )}


    export function getClients() {
        // const endpoint = `http://backend-server-notedoc.herokuapp.com/getallnotes`
        //this does not work i ithink because it is http not https. it should be ok as far as cors since not on my comp
        // const endpoint = `https://cors-anywhere.herokuapp.com/http://localhost:3000/getallnotes`
        //this said didnt work due to proxy error
        // const endpoint = `https://cors-anywhere.herokuapp.com/http://192.168.0.4:3000/getallnotes`
        //this did not work - stalled/ network error
        const endpoint = `https://cors-anywhere.herokuapp.com/http://backend-server-notedoc.herokuapp.com/getallnotes`
        return axios.get(endpoint).then(
            function (response) {
                // console.log(response.data)
                // let clients = response.data
                
                return (response.data)

                //error 'react must be in scope when using JSx'
                // return (clients.map((c, index)=>(
                //     <Homepage clients={clients}/>
                // )))
            })
    }
// export function getWeather(zipCode) {
//     const endpoint = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},US&units=imperial&appid=ccef2c8c8034982955bec1e0b2a83e36`
//     return axios.get(endpoint).then(
//         function (response) {
//             console.log(response.headers)
//             return (response.data)
//         })
// }