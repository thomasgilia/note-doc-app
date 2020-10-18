import React from "react"
// import { Link } from "gatsby"

export default function ListItemSingle(props) {
    //props = [single client object including resource type} but array form 
    //i.e. { resource: clients, list:[["Client Id", 1], ["Client", "Stucky's"]]}

    if (props.list !== null) {
        return (
            <>
                {
                    props.list.map(item => {
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