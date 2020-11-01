import React, { useEffect, useState } from "react"
import { navigate } from "gatsby"
import { getAllNotes } from "../../backendHookup"

export default function FlagBarLayout({location}) {
    const [flaggedNotes, setFlaggedNotes] = useState([])

    useEffect(() => {
        getAllNotes().then((sorted) => {
            return setFlaggedNotes(sorted)
        })
    }, [setFlaggedNotes])

    let currentpath
    if ((location !== null) && (location !== undefined)) {
        currentpath = location.pathname
    }else{
        currentpath = "/"
    }

    return (
        <>
            <nav id="sidebarMenu" class="flex-column mb-2 d-md-block sidebar">
                <div class="sidebar-sticky">
                    <form className="form-inline">
                        <div className="flag">
                            <ul class="list-group">
                                <li class="list-group-item bold">
                                    Urgent Flags in order of update:
                                </li>
                                {((flaggedNotes !== null) && (flaggedNotes !== undefined) && (currentpath !== "/viewNote")) &&
                                    flaggedNotes.map((element) => {
                                        let stateData = { clientId: element.clientId, noteId: element.id }
                                        return (
                                            <>
                                                <li class="list-group-item">
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
                                {((flaggedNotes !== null) && (flaggedNotes !== undefined) && (currentpath === "/viewNote")) &&
                                    flaggedNotes.map((element) => {
                                        let stateData = { clientId: element.clientId, noteId: element.id, reloadCommand: true }
                                        return (
                                            <>
                                                <li class="list-group-item">
                                                    <button class="btn btn-sm btn-primary nav-item" onClick={(e) => {
                                                        e.preventDefault()
                                                        navigate("/workaround", {
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