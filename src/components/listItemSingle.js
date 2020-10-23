import React from "react"
import { Link } from "gatsby"

export default function ListItemSingle(props) {
    //props = [single client object including resource type} but array form 
    //i.e. { resource: clients, list:[["Client Id", 1], ["Client", "Stucky's"]]}
    // <Link to={"/client/" + props.id} className="btn btn-secondary btn-sm">View Client</Link>
    // console.log(props.resource)
    let route = ""
    if (props.resource === ("clients" || "client")) {
        route = "/clients/client"
    }
    let resourceDisplay = props.resource
    if (resourceDisplay === "clients") {
        resourceDisplay = "Client"
    }else if (resourceDisplay === "notes") {
        resourceDisplay = "Note"
    }
    // console.log  (props)
// if (props.listCount === "single"){
//     props.list.
// }

    if (props.list !== null) {
        return (
            <>
                {(props.listCount === null || props.resource === "notes") && <td>
                    <Link to={route + props.list[0][1]} className="btn btn-secondary btn-sm">View {resourceDisplay}</Link>
                </td>}
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