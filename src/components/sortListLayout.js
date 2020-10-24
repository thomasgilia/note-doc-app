import SearchList from "./searchList"
import ListItemMulti from "./listItemMulti"
import { titleMapper } from "../../backendHookup"
import React, { useEffect, useState } from "react"

export default function SortListLayout(props) {
    //props = {list: [[],[]], resource: "client"}
    //props.list=[[],[]...] i.e. ["Client Id", 1], ["Client", "Stucky's"]...
    //NOW: list always [[listItem]] at least, with multiples providing [[listItem],[listItem2]]
    // console.log(props)
    const [resource, setResource] = useState(props.resource)
    const [titles, setTitles] = useState([])
    useEffect(() => {
        let result = titleMapper(resource)
        // console.log(result)
        return setTitles(result)
    }, [setTitles]);
    // console.log(resource)
// let x = props.list;
//     if (props.list[0].length === 1) {
//        x = x.shift()
//        return x
//     }
    // console.log(props.list.length)
    // console.log(props.list)
    if (props.list !== null) {
        return (
            <>
                {/* <BlockContainer> */}
                <div class="container">
                    <h2></h2>
                    <SearchList resource={props.resource}></SearchList>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {props.list.length > 1 && <th></th>}
                                    {titles && titles.map(element => {
                                        // console.log(element)
                                        return (<th>{element[1]}</th>)
                                    })
                                    }
                                    {/* {
                                            props.list.map((element, index) => {
                                                if (props.resource === ("notes" || "clients")) {
                                                    return (<th>{element[index]}</th>)
                                                } else {
                                                    return (<th>{element[index]}</th>)
                                                }
                                            }
                                            )
                                        } */}
                                </tr>
                            </thead>
                            <ListItemMulti list={props.list} resource={props.resource}></ListItemMulti>
                        </table>
                    </div>
                </div>
                {/* </BlockContainer> */}
            </>
        )
        // }
    } else { return null }
}
