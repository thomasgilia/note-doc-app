// // import { response } from "express";
import React from "react"
import AllPageLayout from "../components/allPageLayout"


export default function ViewClient({ pageContext }) {
    const displayId = pageContext.clientId
    console.log(displayId)
    return (
        <>
        <AllPageLayout>
            <h2>id is </h2>
            <h3>i hope {displayId} and name is {pageContext.clientName}</h3>
        </AllPageLayout>
        </>)

}
// import { getClient } from "../../backendHookup"
// // import { getClient, getNotes } from "../../backendHookup"

// export default function ViewClient({ id }) {
//     // const [notes, setNotes] = useState([]);
//     const [client, setClient] = useState({ name: "N/A" });

//     useEffect(() => {
//         getClient(id).then(response => { setClient(response) })
//         // getNotes(id).then(notes => { setNotes(notes) })
//     }, [id])

//     return (
//         <h2>{client.clientName}</h2>
//     )
// }
