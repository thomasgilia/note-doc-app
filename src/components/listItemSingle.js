// import React from "react"
import { Link, navigate } from "gatsby"
import ViewNote from "../pages/viewNote"
import React, { useEffect, useState } from "react"

export default function ListItemSingle(props) {
    //props = [single client object including resource type} but array form 
    //i.e. { resource: clients, list:[["Client Id", 1], ["Client", "Stucky's"]]}
    // <Link to={"/client/" + props.id} className="btn btn-secondary btn-sm">View Client</Link>
    const [list, setList] = useState(props.list)
    const [noteId, setNoteId] = useState(props.noteId)
    const [clientId, setClientId] = useState(props.clientId)
    const [resource, setResource] = useState(props.resource)
    const [listCount, setListCount] = useState(props.listCount)
    // console.log(resource)
    let route = ""
    let resourceDisplay = ""
    // console.log(list[0][1])
    if ((resource === "note") || (resource === "notes")) {
        // console.log(props.list)
        resourceDisplay = "Note"
        route = "/notes/note"
        let newNoteId = list[0][1]
        setNoteId(newNoteId)
    }
    if ((resource === "client") || (resource === "clients")) {
        // console.log(props.list)
        resourceDisplay = "Client"
        route = "/clients/client"
        let itemClientId = list[0][1]
        // console.log(itemClientId)
        setClientId(itemClientId)
    }
    // console.log(resourceDisplay)

    // if (props.resource === ("clients" || "client")) {
    //     route = "/clients/client"
    // }
    // if (props.resource === ("notes" || "note")) {
    //     route = "/notes/note"
    // }
    // let resourceDisplay = props.resource
    // if (resourceDisplay === ("clients" || "client")) {
    //     resourceDisplay = "Client"
    // } else if (resourceDisplay === ("notes" || "note")) {
    //     resourceDisplay = "Note"
    // }
    // console.log(props)
    // if (props.listCount === "single"){
    //     props.list.
    // }
    let stateData = { clientId: clientId, noteId: noteId }
    // console.log(props.list[0][1])
    // console.log(stateData)
    if (list !== null) {
        return (
            <>
                {(listCount === null && resourceDisplay === "Client") && <td>
                    {/* {(props.listCount === null || props.resource === "notes") && <td> */}
                    <Link to={route + clientId} className="btn btn-secondary btn-sm">View {resourceDisplay}</Link>
                </td>}
                {/* {(resourceDisplay === "Note") && <td>
                    <navigate to='/viewNote'
                        className="btn btn-secondary btn-sm">View {resourceDisplay}</Link>
                </td>} */}
                {(resourceDisplay === "Note") && <td>
                    <button onClick={(e) => {
                        e.preventDefault()
                        navigate("/viewNote", {
                            state: { stateData },
                        })
                    }}>View Note</button></td>}

                {/* <ViewNote clientId={props.clientId} clientName={props.clientName} noteId={props.noteId}>View {resourceDisplay}</ViewNote>
            </td>} */}


                {/* <SortListLayout list={client} resource="client"></SortListLayout>
                      
                        <button onClick={(e) => callNoteForm(e)}>New Note form</button> */}




                {
                    list.map(item => {
                        // console.log(item)
                        return (
                            <td>
                                {item[1]}
                            </td>
                        )
                    })
                }

            </>
        )
    } else { return null }
}