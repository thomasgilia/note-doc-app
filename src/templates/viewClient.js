// // import { response } from "express";
import React, { useEffect, useState } from "react"
// import { navigate } from "gatsby"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
// import NoteForm from "../components/noteForm"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getClient, getClientNotes } from "../../backendHookup"
import { Link } from "gatsby"

export default function ViewClient({ pageContext }) {
    //pageContext:  { clientName: client.clientName, clientId: client.id }
    // let id = pageContext.clientId
    // let call = async function (id) {
    //     let results = await getClientNotes(id)
    //     // console.log(results)
    //     return (results)
    // }
    const [client, setClient] = useState(null)
    const [id] = useState(pageContext.clientId);
    const [thisClient] = useState(pageContext.clientName)
    const [callNotes, setCallNotes] = useState(null)
    const [newClient, setNewClient] = useState(null)
    const [newNote, setNewNote] = useState(null)

    // console.log(clientName2)

    useEffect(() => {
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            // console.log(transferArr)
            // if (response.length < 2) {
            //     response.push([null])
            // }
            // console.log(response)
            return setClient(response)
        }
        )
    }, [setClient]);
    let color = "contrast-light"
    // console.log(callData)
    let callClientNotes = async function (e) {
        e.preventDefault()
        let transferArr = await getClientNotes(id)
        let response = transferArr[1].response;
        // console.log(transferArr)
        setCallNotes(response)
    }
    // console.log(callNotes)

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
    // console.log(client) // array of arrays repping 1 clinet with pretty titles [["Client", "Stucky's], ["Client Id", 1]]
    if (client !== null) {
        return (
            <>
                <AllPageLayout>
                    <BlockContainer color={color}>
                        <h2>Client: {thisClient}</h2>
                        <h4>Client Id: {id}</h4>
                    </BlockContainer>
                    <BlockContainer>
                        <SortListLayout list={client} resource="client"></SortListLayout>
                        <br></br>
                        <button onClick={(e) => callClientNotes(e)}>Get Client Notes</button>
                        <button onClick={(e) => callClientForm(e)}>New Client form</button>
                        <button onClick={(e) => callNoteForm(e)}>New Note form</button>
                        {/* <NoteForm clientId={id} thisClient={thisClient} resource="note"></NoteForm> */}
                    </BlockContainer>
                        {/* {callNotes !== null && (<><BlockContainer><h4>Notes for client: {thisClient}</h4>
                            <NoteForm thisClient={thisClient} clientId={id} resource="notes"></NoteForm></BlockContainer></>)} */}
                            {callNotes !== null && (<><BlockContainer><h4>Notes for client: {thisClient}</h4>
                            <SortListLayout list={callNotes} resource="notes" clientId={id}></SortListLayout></BlockContainer></>)}
                        {newClient !== null && (<> <BlockContainer><h4>Create new Client</h4>
                            <ClientForm></ClientForm></BlockContainer></>)}
                            {newNote !== null && (<> <BlockContainer>
                            <NoteForm thisClient={thisClient} clientId={id} resource="notes"></NoteForm></BlockContainer></>)}
                </AllPageLayout>
            </>)

    } else { return null }
}