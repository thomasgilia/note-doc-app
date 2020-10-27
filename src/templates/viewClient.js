// // import { response } from "express";
import React, { useEffect, useState } from "react"
// import { navigate } from "gatsby"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
// import NoteForm from "../components/noteForm"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getClient, getClientNotes, deleteClient, getClients, editClient } from "../../backendHookup"
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
    const [thisClient] = useState(pageContext.clientName)   //not using?
    const [callNotes, setCallNotes] = useState(null)
    const [newClient, setNewClient] = useState(null)
    const [newNote, setNewNote] = useState(null)

    // console.log(pageContext)

    useEffect(() => {
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            return setClient(response)
        }
        )
    }, [setClient]);
    let color = "contrast-light"
    // console.log(callData)
    let hardcodeClientId = id
    let callClientNotes = async function (e) {
        e.preventDefault()
        let transferArr = await getClientNotes(id)
        let response = transferArr[1].response;
        
        // console.log(transferArr)
        setCallNotes(response)
    }
    // console.log(client)

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
    let callDeleteClient = async function (e) {
        e.preventDefault()
       let response = await deleteClient(id)
    }
    // let callEditClient = async function (e) {
    //     e.preventDefault()
    //    let response = await editClient(id)
    // }
    // console.log(callDeleteClient)
    let shuttle = { list: client, noteId: null, clientId: hardcodeClientId, resource: "client" }
    // console.log(shuttle) // array of arrays repping 1 clinet with pretty titles [["Client", "Stucky's], ["Client Id", 1]]
    if (client !== null) {
        return (
            <>
                <AllPageLayout>
                    <BlockContainer resource="client">
                        <h2>Client: {thisClient}</h2>
                        <h4>Client Id: {id}</h4>
                    </BlockContainer>
                    <BlockContainer resource="client">
                    {shuttle !== null &&
                                <SortListLayout {...shuttle} ></SortListLayout>}
                        {/* <SortListLayout list={client} resource="client"></SortListLayout> */}
                        <br></br>
                        <button onClick={(e) => callClientNotes(e)}>Get Client Notes</button>
                        <button onClick={(e) => callClientForm(e)}>New Client form</button>
                        <button onClick={(e) => callNoteForm(e)}>New Note form</button>
                        {/* <button onClick={(e) => callEditClient(e)}>Edit Client</button> */}
                        <button class="btn-danger" onClick={(e) => callDeleteClient(e)}>Delete Client</button>
                        {/* <NoteForm clientId={id} thisClient={thisClient} resource="note"></NoteForm> */}
                    </BlockContainer>
                    {newClient !== null && (<> <BlockContainer resource="client"><h4>Create new Client</h4>
                            <ClientForm></ClientForm></BlockContainer></>)}
                            {newNote !== null && (<> <BlockContainer resource="note">
                            <NoteForm thisClient={thisClient} clientId={hardcodeClientId} resource="notes"></NoteForm></BlockContainer></>)}
                        {/* {callNotes !== null && (<><BlockContainer><h4>Notes for client: {thisClient}</h4>
                            <NoteForm thisClient={thisClient} clientId={id} resource="notes"></NoteForm></BlockContainer></>)} */}
                            {callNotes !== null && (<><BlockContainer resource="note"><h4>Notes for client: {thisClient}</h4>
                            <SortListLayout list={callNotes} resource="notes" clientId={hardcodeClientId}></SortListLayout></BlockContainer></>)}
                       {/* need to update client here */}

                        
                </AllPageLayout>
            </>)

    } else { return null }
}