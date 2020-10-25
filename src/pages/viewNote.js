import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import AllPageLayout from "../components/allPageLayout"
// import NoteForm from "../components/noteForm"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getNote, getClient } from "../../backendHookup"

export default function Home({location}) {
    // console.log(props)
    const [note, setNote] = useState(null)
    // const [id] = useState(props.noteId);
    // const [thisClient] = useState(props.clientName)
    // const [clientId] = useState(props.clientId);
let stateDataObj = {...location.state.stateData}
// console.log(stateDataObj)
    const [id] = useState(location.state.stateData.noteId);
    const [thisClient, setThisClient] = useState(null)
    const [clientId] = useState(location.state.stateData.clientId);
    const [newClient, setNewClient] = useState(null)

    useEffect(() => {
        getNote(id).then(transferArr => {
            let response = transferArr[1].response;
            return setNote(response)
        }
        )
    }, [setNote]);

    let callClientForm = async function (e) {
        e.preventDefault()
        let newClientRequested = true;
        setNewClient(newClientRequested)
    }
    // console.log(id)
// let x = location.state.stateData
    // console.log(props) // array of arrays repping 1 clinet with pretty titles [["Client", "Stucky's], ["Client Id", 1]]
    // if (note !== null) 
    // {
        return (
            <>
                <BlockContainer>
                    <h2>Note for Client: {thisClient}</h2>
                    <h4>Note Id: {id}</h4>
                </BlockContainer>
                <BlockContainer>
                    <SortListLayout thisClient={thisClient} clientId={clientId} list={note} noteId={id}
                        resource="note"></SortListLayout>
                    <br></br>
                    <button onClick={(e) => callClientForm(e)}>New Client form</button>
                </BlockContainer>
                {/* {newNote !== null && (<> <BlockContainer>
                    <NoteForm thisClient={thisClient} clientId={clientId} resource="notes"></NoteForm></BlockContainer></>)} */}
            </>)

        // } else { return null }
    }