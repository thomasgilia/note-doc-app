import React, { useEffect, useState } from "react"
import { getClients } from "../../backendHookup"
// import { getClients, getNotes } from "../../backendHookup"

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
}