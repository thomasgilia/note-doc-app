import React from "react"
// import { Link } from "gatsby"
import ListItemSingle from "./listItemSingle"

export default function ListItemMulti(props) {
    //props = array of client arrays that whose key/value are in array form
    //i.e. { resource: clients, list:[
    //  [["Client Id", 1], ["Client", "Stucky's"]],[["Client Id", 2], ["Client", "Acme"]]
    //  ]}
    // element is client array of arrays
    // let thingy = props.list
    // //props.list[0][0][0]) to get to "Client Id" for one client
    // // props.list[0] to get one whole client as array of array
    // console.log(props)
    let listCount = null;
    // console.log(props.list.length)
    if (props.list.length < 2) {
        listCount = "single";
    }

    if (props.list !== null) {
        // console.log(listCount)
        return (
            <>
                <tbody>
                    {props.list.map((element, index) => {
                        // console.log(element)
                        return (<tr><ListItemSingle key={index} list={element} listCount={listCount} resource={props.resource}></ListItemSingle></tr>)
                    })}

                </tbody>
            </>
        )
    } else { return null }
}