// // import { response } from "express";
import React, { useEffect, useState } from "react"
// import { navigate } from "gatsby"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import { getClient, getClientNotes } from "../../backendHookup"
import { Link } from "gatsby"

export default function ViewClient({ pageContext }) {
    //pageContext:  { clientName: client.clientName, clientId: client.id }
    // let id = pageContext.clientId
    // let call = async function (id) {
    //     let results = await getClientNotes(id)
    //     // console.log(results)
    //     return (results)
    // }
    const [client, setClient] = useState(null)
    const [id] = useState(pageContext.clientId);
    const [callData, setCallData] = useState(null)
    // console.log(id)

    useEffect(() => {
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            // console.log(response)
            return setClient(response)
        }
        )
        getClientNotes(id)
        .then(transferArr => {
            let response = transferArr[1].response;
            // console.log(transferArr)
            return setCallData(response)
        }
        )
    }, [setClient, setCallData]);
    let color = "contrast-light"

    // let call = async function (id) {
    //     let results = await getClientNotes(id)
    //     // console.log(results)
    //     // return (<SortListLayout props={results.response}>transferArr</SortListLayout>)  //try sending to veiwresource instaed?

    // let callData = {id: {id}, callData: call(id)}
    // console.log(callData)

    // console.log(call(id))
    // console.log(client) // array of arrays repping 1 clinet with pretty titles [["Client", "Stucky's], ["Client Id", 1]]
    if (client !== null) {
        return (
            <>
                <AllPageLayout>
                    <BlockContainer color={color}>
                        <h2>{client[1][0]}: {client[1][1]}</h2>
                        <h4>{client[0][0]}: {client[0][1]}</h4>

                    </BlockContainer>
                    <BlockContainer>
                        <SortListLayout list={client} resource="client"></SortListLayout>
                        <Link
                            to={`/viewResources`}
                            state={{ callData }}
                        >
                            View Client Notes
                         </Link>
                        <br></br>
                        {/* <button onClick={() => call()}>Get Client Notes</button> */}
                        {/* {const call = async function (id) {
                            <button
                                onClick={event => {
                                    event.preventDefault()
                                    let results = getClientNotes(id)
                                    // TODO: do something with form values
                                    navigate(
                                        "./viewResources/",
                                        {
                                            state: { results },
                                        }
                                    )
                                }}
                            >
                                Notes for this client
        </button>}
                        } */}
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
    } else { return null }
}