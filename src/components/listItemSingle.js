// import React from "react"
import { Link, navigate } from "gatsby"
import ViewNote from "../pages/viewNote"
import React, { useEffect, useState } from "react"

export default function ListItemSingle(props) {
    //props = [single client object including resource type} but array form 
    //i.e. { resource: clients, list:[["Client Id", 1], ["Client", "Stucky's"]]}
    // <Link to={"/client/" + props.id} className="btn btn-secondary btn-sm">View Client</Link>
    // const [list, setList] = useState(props.list)
    // const [noteId, setNoteId] = useState(props.noteId)
    // const [clientId, setClientId] = useState(null)
    // const [resource, setResource] = useState(props.resource)
    // const [listCount, setListCount] = useState(props.listCount)
    // console.log(props)
    let route = ""
    let resourceDisplay = ""
    let clientIdHolder;
    let noteIdHolder;
    // console.log(list[0][1])
    if ((props.resource === "note") || (props.resource === "notes")) {
        // console.log(props.list)
        resourceDisplay = "Note"
        route = "/notes/note"
        clientIdHolder = props.list[0][5]   //update with correct position...
        noteIdHolder = props.list[0][1]
        // setNoteId(newNoteId)
    }
    if ((props.resource === "client") || (props.resource === "clients")) {
        // console.log(props.list)
        resourceDisplay = "Client"
        route = "/clients/client"
        clientIdHolder = props.list[0][1]
        noteIdHolder = null
        // console.log(clientIdHolder)
        //    return itemClientId
        // return setClientId(itemClientId)
    }

    // // if (props.listCount === "single"){
    // //     props.list.
    // // }
    let stateData = { clientId: clientIdHolder, noteId: noteIdHolder }
    // // console.log(props.list[0][1])
    console.log(stateData)
    if (props.list !== null) {
        return (
            <>
                {(props.listCount === null && resourceDisplay === "Client") && <td>
                    {/* {(props.listCount === null || props.resource === "notes") && <td> */}
                    <Link to={route + stateData.clientId} className="btn btn-secondary btn-sm">View {resourceDisplay}</Link>
                </td>}

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
                    props.list.map(item => {
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