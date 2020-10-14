import React from "react"
import { Link } from "gatsby"
export default function SortListItem(props) {
    //props = {single client object including resource type} i.e. {id: , clientName: , resource: "clients"...} 

    console.log(props)
    return (
        <tr>
            <td>{props.clientName}</td>
            <td>{props.id}</td>
            <td>{props.ownedBy}</td>
            <td>
                <Link to={"/client/" + props.id} className="btn btn-secondary btn-sm">View Client</Link>
            </td>
        </tr>
    )
}