import ListItemSingle from "./listItemSingle"
import React from "react"

export default function ListItemMulti(props) {

    if (props.list !== null) {
        return (
            <>
                <tbody>
                    {props.list.map((element, index) => {
                        let shuttle = { list: element, noteId: props.noteId, clientId: props.clientId, 
                            resource: props.resource }
                        return (<tr><ListItemSingle key={index} {...shuttle} listCount={props.listCount}>
                            </ListItemSingle></tr>)
                    })}
                </tbody>
            </>
        )
    } else { return null }
}