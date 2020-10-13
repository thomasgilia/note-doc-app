import React from "react"

export default function SortListItem(props) {
    //props = {single client object including resource type} i.e. {id: , clientName: , resource: "clients"...} 

    console.log(props)
    return (
        <tr>
            <td>{props.clientName}</td>
            <td>{props.id}</td>
            <td>{props.ownedBy}</td>
            <td>
                <a class="btn btn-secondary btn-sm" href="/clients/client{placeholder}">View Client</a>
            </td>
        </tr>
    )
}