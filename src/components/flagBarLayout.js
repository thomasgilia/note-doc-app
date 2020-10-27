import React, { useEffect, useState } from "react"
// import { Link } from "gatsby"
import { Link, navigate } from "gatsby"
import { getAllNotes, getClient } from "../../backendHookup"

export default function FlagBarLayout(props) {
    // const [clientList, setClientList] = useState(null)
    // const [clientName, setClientName] = useState(null)
    // const [clientId, setClientId] = useState()
    // console.log(props.list)
    let callClientList = function (id) {
        // let id = clientId
        // console.log(id)
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            let clientName = response[0][1][1]
            return clientName
        }
        )
    }
   
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
  </form>
</nav> */}
                    <form class="form-inline">
                        {((props.list !== null) && (props.list !== undefined)) && props.list.map((element) => {
                            let noteIdHolder = element[0][1]
                            let clientIdHolder = element[8][1]
                            let clientNameHolder = getClient(clientIdHolder).then(transferArr => {
                                let response = transferArr[1].response;
                                clientNameHolder = response[0][1][1]
                                // console.log(clientNameHolder)
                                return clientNameHolder
                            })
                            // let clientNameHolder = getClient(clientIdHolder).then(transferArr => {
                            //     let response = transferArr[1].response;
                            //     clientNameHolder = response[0][1][1]
                            //     // console.log(clientNameHolder)
                            //     return clientNameHolder
                            // })
                            // let clientName = callClientList(clientIdHolder)
                            // let clientName = clientList.filter((item) => {
                            //     console.log(clientIdHolder)
                            //     if (item[0][1] === clientIdHolder) {
                            //         return item[1][1]
                            //     }else{return}
                            // }
                            // )
// console.log(clientNameHolder)
                            let stateData = { clientId: clientIdHolder, noteId: noteIdHolder }
                            return (
                                <button nav-item onClick={(e) => {
                                    e.preventDefault()
                                    navigate("/viewNote", {
                                        state: { stateData },
                                    })
                                }}>View flagged Note for clientNameHolder</button>
                            )
                        })}
                    </form>
                    {/* {titles && titles.map(element => {
                                        // console.log(element)
                                        return (<th>{element[1]}</th>)
                                    })
                                    } */}

                    {/* <button onClick={(e) => {
                        e.preventDefault()
                        navigate("/viewNote", {
                            state: { stateData },
                        })
                    }}>View Note</button></td>} */}
                </div>
            </nav>
        </>
    )
}