import React, { useEffect, useState } from "react"
import { getClients } from "../../backendHookup"
// import { getWeather } from "../../backendHookup"


export default function HomepageLayout({ children }) {
    const [clientList, setClientList] = useState(null)


    useEffect(() => {
        getClients().then(response => setClientList(response))
    }, [setClientList])
    // so i can have a collction savaed in state but cannot directly access it unless in jsx???
    return (
        <>
            <ul>
                {clientList !== null &&
                    <li className="list-group-item">It's currently {clientList[0].id} and !</li>
                }
            </ul>
            {children}
            { clientList !== null &&
                <h1>{clientList[0].id}</h1>}

            {/* { <h1>{clientList[0].id}</h1>} */}
            {/* why does this clientlist0id no work but one above does??? and this one doesn twork either*/}
        </>
    )
    //          return (
    //     <>
    //         <h1>THIS IS MY HOMEPAGE LAYOUT </h1>
    //         <h1>{clientList[0].id}</h1>
    //         {/* <h1>{JSON.stringify(clientList)}</h1> */}
    //         <h1>{children}</h1>
    //     </>
    // )
    // useEffect(() => {
    //     getClients().then(response.map(function(client, index){})).then(setClientList(response))
    // }, [setClientList])

    // return (clients.map((c, index)=>(
    //     <Homepage clients={clients}/>
    // )))
    // { response.map((item, index) => (<li key={index}>{item.quote}</li>)) }
    // getClients().then( function(response) {
    // response.map(function (item, index) {
    //     response.map((r, index) => (
    //         { r }=response
    //     ))
    // }
    // setClientList(response)} )   

    // )

    // let firstChild = clientList[0].id
    // console.log(firstChild)
    // console.log(clientList)
    // return (
    //     <>
    //         <h1>THIS IS MY HOMEPAGE LAYOUT </h1>
    //         <h1>{clientList.id}</h1>
    //         {/* <h1>{JSON.stringify(clientList)}</h1> */}
    //         <h1>{children}</h1>
    //     </>
    // )
}

// { response.map((item, index) => (<li key={index}>{item.quote}</li>)) }

//this worked even though i didnt have header used anywhere...
// export default function Header() {
//     const [weather, setWeather] = useState(null)

//     useEffect(() => {
//         getWeather(72758).then(response => setWeather(response))
//     }, [setWeather])
// console.log(weather)
//     return (
//         <>
//             <ul>
//                 {weather !== null &&
//                     <li className="list-group-item">It's currently {weather.main.temp} and {weather.weather[0].description}!</li>
//                 }
//             </ul>

//         </>
//     )
// }