import SearchList from "./searchList"
import ListItemMulti from "./listItemMulti"
import { titleMapper } from "../../backendHookup"
import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"

export default function SortListLayout(props) {
    //props = {list: [[],[]], resource: "client"}
    //props.list=[[],[]...] i.e. ["Client Id", 1], ["Client", "Stucky's"]...
    //NOW: list always [[listItem]] at least, with multiples providing [[listItem],[listItem2]]
    // console.log(props.list[0])
    
    const [noteId, setNoteId] = useState(props.noteId)
    const [clientId, setClientId] = useState(props.clientId)
    const [resource, setResource] = useState(props.resource)
    const [titles, setTitles] = useState([])
    // console.log(list)
    useEffect(() => {
        let result = titleMapper(resource)
        // console.log(result)
        return setTitles(result)
    }, [setTitles]);
    const [list, setList] = useState([])
    useEffect((props) => {
        setList(props.list)
    }, [setList]);
// let shuttle = {list: props.list, noteId: noteId, clientId: clientId, resource: resource}
   
    console.log(list)
    if (props.list !== null) {
        return (
            <>
                <Helmet>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                </Helmet>

                {/* <i class="fa fa-file-text" aria-hidden="true"></i>
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                <h1 class="animate__animated animate__flash"><i class="fa fa-arrow-up" aria-hidden="true"></i></h1> */}
                {/* <BlockContainer> */}
                <div class="container">
                    <h2></h2>
                    {resource !==null && <SearchList resource={resource}></SearchList>}
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
                            {/* {shuttle !== null &&
                                <ListItemMulti {...shuttle} ></ListItemMulti>} */}
                            {/* {props.list.noteId === null &&
                                <ListItemMulti list={props.list} resource={props.resource} clientId={props.clientId}></ListItemMulti>} */}

                        </table>
                    </div>
                </div>
                {/* </BlockContainer> */}
            </>
        )
        // }
    } else { return null }
}
