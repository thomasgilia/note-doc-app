import React from "react"
// import { Link } from "gatsby"
import ListItemSingle from "../components/listItemSingle"

export default function ListItemMulti(props) {
    //props = array of client arrays that whose key/value are in array form
    //i.e. { resource: clients, list:[
    //  [["Client Id", 1], ["Client", "Stucky's"]],[["Client Id", 2], ["Client", "Acme"]]
    //  ]}
    // element is client array of arrays
    // let thingy = props.list
       // //props.list[0][0][0]) to get to "Client Id" for one client
    // // props.list[0] to get one whole client as array of array
    // console.log(props.resource)
    if (props.list !== null) {
        return (
            <>
                <tbody>
                        {props.list.map((element, index) => {
                            return (<tr><th></th><ListItemSingle key={index} list={element} resource={props.resource}></ListItemSingle></tr>)
                        })}
                    
                </tbody>
            </>
        )
    } else { return null }
}