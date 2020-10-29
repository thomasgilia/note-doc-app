import { Link, navigate } from "gatsby"
import React from "react"

export default function ListItemSingle(props) {
    let route = ""
    let resourceDisplay = ""
    let clientIdHolder;
    let noteIdHolder;

    if ((props.resource === "note") || (props.resource === "notes")) {
        resourceDisplay = "Note"
        route = "/notes/note"
        if (props.clientId) {
            clientIdHolder = props.clientId
        } else {
            clientIdHolder = props.list[0][9]
        }
        noteIdHolder = parseInt(props.list[0][1])
    }

    if ((props.resource === "client") || (props.resource === "clients")) {
        resourceDisplay = "Client"
        route = "/clients/client"
        clientIdHolder = props.list[0][1]
        noteIdHolder = null
    }

    let stateData = { clientId: clientIdHolder, noteId: noteIdHolder }
    if (props.list !== null) {
        return (
            <>
                {(props.listCount === null && resourceDisplay === "Client") && <td>
                    <Link to={route + clientIdHolder} className="btn btn-dark btn-sm">View {resourceDisplay}</Link>
                </td>}

                {(props.resource === "notes") && <td>
                    <button class="btn btn-primary btn-sm" onClick={(e) => {
                        e.preventDefault()
                        navigate("/viewNote", {
                            state: { stateData },
                        })
                    }}>View Note</button></td>}
                {props.list.map(item => {
                    if ((item[1] === true) || (item[1] === "true")) {
                        return (
                            <td>
                                Yes
                            </td>
                        )
                    } else if ((item[1] === false) || (item[1] === "false")) {
                        return (
                            <td>
                                No
                            </td>
                        )
                    } else {
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