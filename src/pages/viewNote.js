import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import AllPageLayout from "../components/allPageLayout"
// import NoteForm from "../components/noteForm"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getNote, getClient } from "../../backendHookup"

export default function Home({ location }) {
    // console.log(props)
    const [note, setNote] = useState(null)
    // const [id] = useState(props.noteId);
    const [thisClient, setThisClient] = useState(null)
    // const [clientId] = useState(props.clientId);
    // let stateDataObj = { ...location.state.stateData }
    // console.log(stateDataObj)
    const [id] = useState(location.state.stateData.noteId);
    const [newNote, setNewNote] = useState(null)
    // const [clientId] = useState(location.state.stateData.clientId);
    const [newClient, setNewClient] = useState(null)
    const clientId = location.state.stateData.clientId;

    useEffect(() => {
        getNote(id).then(transferArr => {
            let response = transferArr[1].response;
            return setNote(response)
        }
        )
    }, [setNote]);

    // const [client, setClient] = useState(null)
    // console.log(note)
    let clientName = null
    useEffect(() => {
        let id = clientId
        // console.log(id)
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            clientName = response[0][1][1]
            // console.log(clientName)
            setThisClient(clientName)
        }
        )
    }, [setThisClient]);
// console.log(thisClient)
    let callClientForm = async function (e) {
        e.preventDefault()
        let newClientRequested = true;
        setNewClient(newClientRequested)
    }

    let callNoteForm = async function (e) {
        e.preventDefault()
        let newNoteRequested = true;
        setNewNote(newNoteRequested)
    }
    // console.log(client)
    // let x = location.state.stateData
    // console.log(props) // array of arrays repping 1 clinet with pretty titles [["Client", "Stucky's], ["Client Id", 1]]
    // if (note !== null) 
    // {
        // let clientName = client[1][1]
    return (
        <>
        <AllPageLayout>
            <BlockContainer>
                <h2>Note for Client: {thisClient !== null && thisClient}</h2>
                <h4>Note Id: {id}</h4>
            </BlockContainer>
            <BlockContainer>
                <SortListLayout thisClient={thisClient} clientId={clientId} list={note} noteId={id}
                    resource="note"></SortListLayout>
                <br></br>
                <button onClick={(e) => callClientForm(e)}>New Client form</button>
                <button onClick={(e) => callNoteForm(e)}>New Note form</button>
            </BlockContainer>
            {newNote !== null && (<> <BlockContainer>
                            <NoteForm thisClient={thisClient} clientId={clientId} resource="notes"></NoteForm></BlockContainer></>)}
            {/* {newNote !== null && (<> <BlockContainer>
                    <NoteForm thisClient={thisClient} clientId={clientId} resource="notes"></NoteForm></BlockContainer></>)} */}
       </AllPageLayout>
        </>)

    // } else { return null }
}