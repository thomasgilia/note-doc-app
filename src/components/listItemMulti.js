// import { Link } from "gatsby"
import ListItemSingle from "./listItemSingle"
import React, { useEffect, useState } from "react"

export default function ListItemMulti(props) {

    const [list, setList] = useState(props.list)
    const [noteId, setNoteId] = useState(props.noteId)
    const [clientId, setClientId] = useState(props.clientId)
    const [resource, setResource] = useState(props.resource)

    // let shuttle = {list, noteId: noteId, clientId: clientId, resource: resource}

    let listCount = null;
    // console.log(list)
    if (list.length < 2) {
        listCount = "single";
    }

    if (list !== null) {
        // console.log(listCount)
        return (
            <>
                <tbody>
                    {/* {props.noteId == null && props.list.map((element, index) => {
                        // console.log(element)
                        return (<tr><ListItemSingle key={index} list={element} listCount={listCount}
                        resource={props.resource} clientId={props.clientId}></ListItemSingle></tr>)
                    })
                    } */}
                    {/* {props.noteId !== null && props.list.map((element, index) => {
                            // console.log(element)
                            return (<tr><ListItemSingle key={index} list={element} listCount={listCount}
                                resource={props.resource} clientId={props.clientId} noteId={props.noteId}></ListItemSingle></tr>)
                        })} */}
                    {list.map((element, index) => {
                        // console.log(element)
                        let shuttle = { list: element, noteId: noteId, clientId: clientId, resource: resource }
                        return (<tr><ListItemSingle key={index} {...shuttle} listCount={listCount}
                        ></ListItemSingle></tr>)
                    })}
                </tbody>
            </>
        )
    } else { return null }
}
//neeed to change resource in above?