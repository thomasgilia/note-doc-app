import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import { Link, navigate } from "gatsby"
import { getAllNotes, getClients, getClient } from "../../backendHookup"

export default function FlagBarLayout() {
    const [clientList, setClientList] = useState(null)
    const [flaggedNotes, setFlaggedNotes] = useState(null)
    
    useEffect(() => {
        getAllNotes().then(transferArr => {
            let response = transferArr[1].response;
            // console.log(response[0].clientName)   
            return setFlaggedNotes(response)
        }
        )
        // .then(getClients().then(transferArr => {
        //     let response = transferArr[1].response;
        //     // console.log(response)       //for now arr of client objs
        //     return setClientList(response)
        // }
        // ))

        // flaggedNotes.map((element) => {
        //     let noteIdHolder = element[0][1]
        //     let clientIdHolder = element[8][1]
        //     // console.log(clientIdHolder)
        //     let clientNameHolder = getClient(clientIdHolder).then(transferArr => {
        //         let response = transferArr[1].response;
        //         clientNameHolder = response[0][1][1]
        //         // console.log(clientNameHolder)
        //         return clientNameHolder
        //     })
        //     return clientNameHolder
        //     // console.log(clientNameHolder)
        // })
    }, [setFlaggedNotes]);
    // let callClientList = function (id) {
    //     // let id = clientId
    //     // console.log(id)
    //     getClient(id).then(transferArr => {
    //         // let response = transferArr[1].response;
    //         // let clientName = response[0][1][1]
    //         let clientName = 'dummy name'
    //         return clientName
    //     }
    //     )
    // }
    // console.log(flaggedNotes[0].clientName)
    return (
        <>
            <nav id="sidebarMenu" class="flex-column mb-2 d-md-block sidebar">
                <div class="sidebar-sticky">
                    {/* <Link to="/flag" className="nav-item nav-link" >Flag Attribute 1</Link>
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 2</Link>
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 3</Link>
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 4</Link> */}
                    {/* <nav class="navbar navbar-light bg-light">
            <form class="form-inline">
                <button class="btn btn-outline-success" type="button">Main button</button>
                <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
            </form> */}

                    <form class="form-inline">
                        {((flaggedNotes !== null) && (flaggedNotes !== undefined)) &&
                            flaggedNotes.map((element) => {
                                // console.log(element)
                                // console.log(element.clientName)
                                // console.log(element.category)
                        })
                    }
                    </form>
                </div>
            </nav>
        </>
    )
}