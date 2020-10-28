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

    // console.log(props.listCount)
    if ((props.resource === "note") || (props.resource === "notes")) {
        // console.log(props.list)
        resourceDisplay = "Note"
        route = "/notes/note"
        // clientIdHolder = props.list[0][9]   //update with correct position...
        if (props.clientId) {
            clientIdHolder = props.clientId
        } else {
            // clientIdHolder = parseInt(props.list[0][9])
            clientIdHolder = props.list[0][9]
        }
        noteIdHolder = parseInt(props.list[0][1])
        // setNoteId(newNoteId)
    }

    if ((props.resource === "client") || (props.resource === "clients")) {
        // console.log(props.list)
        resourceDisplay = "Client"
        route = "/clients/client"
        clientIdHolder = props.list[0][1]
        // clientIdHolder = props.clientId
        // if (props.clientId) {
        //     clientIdHolder = props.clientId
        // } else {
        //     // clientIdHolder = parseInt(props.list[0][9])
        //     clientIdHolder = props.list[0][9]
        // }
        noteIdHolder = null
        // console.log(clientIdHolder)
        //    return itemClientId
        // return setClientId(itemClientId)
    }

    // // if (props.listCount === "single"){
    // //     props.list.
    // // }
    let stateData = { clientId: clientIdHolder, noteId: noteIdHolder }
    // console.log(clientIdHolder)
    if (props.list !== null) {
        return (
            <>
                {(props.listCount === null && resourceDisplay === "Client") && <td>
                    {/* {(props.listCount === null || props.resource === "notes") && <td> */}
                    <Link to={route + clientIdHolder} className="btn btn-dark btn-sm">View {resourceDisplay}</Link>
                </td>}

                {(props.resource === "notes") && <td>
                    <button class="btn btn-primary btn-sm" onClick={(e) => {
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
                        if((item[1] === true)||(item[1] === "true")){
                            return (
                                <td>
                                    Yes
                                </td>
                            )
                        }else if((item[1] === false)||(item[1] === "false")){return (
                            <td>
                                No
                            </td>
                        )}else{
                        return (
                            <td>
                                {item[1]}
                            </td>
                        )
                    }
                    })
                }

            </>
        )
    } else { return null }
}