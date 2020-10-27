import SearchList from "./searchList"
import ListItemMulti from "./listItemMulti"
import { titleMapper } from "../../backendHookup"
import React, { useEffect, useState } from "react"
import Helmet from "react-helmet"

export default function SortListLayout(props) {
    //props = {list: [[],[]], resource: "client"}
    //props.list=[[],[]...] i.e. ["Client Id", 1], ["Client", "Stucky's"]...
    //NOW: list always [[listItem]] at least, with multiples providing [[listItem],[listItem2]]
    // console.log(props.list)
    // const [list, setList] = useState(props)
    // const [noteId, setNoteId] = useState(props.noteId)
    // const [clientId, setClientId] = useState(props.clientId)
    // const [resource, setResource] = useState(props.resource)
    const [titles, setTitles] = useState([])
    // console.log(props.resource)
    useEffect(() => {
        let result = titleMapper(props.resource)
        // console.log(result)
        return setTitles(result)
    }, [setTitles]);

    let listCount = null

    if (!props.list) {
        listCount = null
    } else {
        if (props.list.length < 2) {
            listCount = "single";
        }
    }
    let shuttle = { list: props.list, noteId: props.noteId, clientId: props.clientId, resource: props.resource, listCount: listCount }
    // console.log(shuttle.listCount)
    // if (props.list !== null) { console.log(shuttle) }
    if (props.list !== null) {
        return (
            <>
                <Helmet>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" />
                    {/* <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" />
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
                    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script> */}
                </Helmet>

                {/* <i class="fa fa-file-text" aria-hidden="true"></i>
                <i class="fa fa-handshake-o" aria-hidden="true"></i>
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
                <h1 class="animate__animated animate__flash"><i class="fa fa-arrow-up" aria-hidden="true"></i></h1> */}
                {/* <BlockContainer> */}
                <div class="container">
                    <h2></h2>
                    {listCount === null && <SearchList></SearchList>}
                    {/* {listCount === null && <SearchList resource={props.resource}></SearchList>} */}

                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                {/* {((listCount === null) || (props.resource === "note") || (props.resource === "notes")) && <th></th>} */}

                                    {((listCount === null) || (props.resource === "notes")) && <th></th>}
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
                            {shuttle !== null &&
                                <ListItemMulti {...shuttle} ></ListItemMulti>}
                            {/* {props.list.noteId === null &&
                                <ListItemMulti list={props.list} resource={props.resource} clientId={props.clientId}></ListItemMulti>} */}

                        </table>
                    </div>
                </div>
                {/* </BlockContainer> */}
                
            </>
    //       <script>
    //       $(document).ready(function () {
    //           $("#myInput").on("keyup", function () {
    //               var value = $(this).val().toLowerCase();
    //               $("#myTable tr").filter(function () {
    //                   $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    //               });
    //           });
    //       });
    //   </script>  
        )
        // }
    } else { return null }
}
