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

    if (props.list !== null) {
        return (
            <>
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
                <Link to={route + props.list[0][1]} className="btn btn-secondary btn-sm">View {props.resource}</Link>
            </>
        )
    } else { return null }
}