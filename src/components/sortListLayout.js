import ListItemMulti from "./listItemMulti"
import { titleMapper } from "../../backendHookup"
import React, { useEffect, useState } from "react"

export default function SortListLayout(props) {
    const [titles, setTitles] = useState([])

    useEffect(() => {
        let result = titleMapper(props.resource)
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
    if (props.list !== null) {
        return (
            <>
                <div class="container">
                    <br></br>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                {((listCount === null) || (props.resource === "notes")) && <th></th>}
                                    {titles && titles.map(element => {
                                        return (<th>{element[1]}</th>)
                                    })
                                    }
                                </tr>
                            </thead>
                            {shuttle !== null &&
                                <ListItemMulti {...shuttle} ></ListItemMulti>}
                        </table>
                    </div>
                </div>
            </>
        )
       } else { return null }
}
