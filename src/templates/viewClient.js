// // import { response } from "express";
import React from "react"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"

export default function ViewClient({ pageContext }) {
    //pageContext:  { clientName: client.clientName, clientId: client.id }
    let color = "contrast-light"
    return (
        <>
            <AllPageLayout>
                <BlockContainer color={color}>
                    <h2>Client: {pageContext.clientName}</h2>
                    <h3>Client Id: {pageContext.clientId}</h3>
                </BlockContainer>
                <BlockContainer>
                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                    non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                    optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                    omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
                    sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                    asperiores repellat.
                </BlockContainer>
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
