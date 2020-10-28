import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import { Link, navigate } from "gatsby"
import { getAllNotes, getClients, getClient } from "../../backendHookup"

export default function FlagBarLayout() {
    // const [clientList, setClientList] = useState(null)
    const [flaggedNotes, setFlaggedNotes] = useState([])

    useEffect(() => {
        // setFlaggedNotes(["hi"])
        getAllNotes().then((sorted) => {
            // console.log(sorted[0])
            // let goodArray = []
            // sorted.forEach((element) => {
            //     // let clientNameHolder = element.clientName.toString()
            //     // console.log(clientNameHolder)
            //     goodArray.push([["updatedAt", element.updatedAt], ["title", element.title]])
            // });
            return setFlaggedNotes(sorted)
        })
        console.log(flaggedNotes)
    }, [setFlaggedNotes])

    return (
        <>
            <nav id="sidebarMenu" class="flex-column mb-2 d-md-block sidebar">
                <div class="sidebar-sticky">
                    <form className="form-inline">
                        {/* {flaggedNotes.length > 0 && */}
                        <div className="flag">

                            <ul class="list-group">
                                <li class="list-group-item bold">
                                    Urgent Flags in order of update:
                            </li>
                                {((flaggedNotes !== null) && (flaggedNotes !== undefined)) &&
                                    flaggedNotes.map((element) => {
                                        // console.log(element)
                                        let stateData = { clientId: element.clientId, noteId: element.id }
                                        return (
                                            <><li class="list-group-item">
                                                <button class="btn btn-sm btn-primary nav-item" onClick={(e) => {
                                                    e.preventDefault()
                                                    navigate("/viewNote", {
                                                        state: { stateData },
                                                    })
                                                }}>
                                                    Flag</button>
                                        Note {element.id} / {element.updatedAt}
                                            </li>
                                            </>
                                        )
                                    }
                                    )
                                }
                            </ul>
                        </div>

                    </form>
                </div>

            </nav>
        </>
    )
}

            // {/* <Link to="/flag" className="nav-item nav-link" >Flag Attribute 1</Link>
            //         <Link to="/flag" className="nav-item nav-link" >Flag Attribute 2</Link>
            //         <Link to="/flag" className="nav-item nav-link" >Flag Attribute 3</Link>
            //         <Link to="/flag" className="nav-item nav-link" >Flag Attribute 4</Link> */}
            // {/* <nav class="navbar navbar-light bg-light">