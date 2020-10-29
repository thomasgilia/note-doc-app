import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import AllPageLayout from "../components/allPageLayout"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getNote, getClient, deleteNote } from "../../backendHookup"

export default function Home({ location }) {
    const [note, setNote] = useState(null)
    const [thisClient, setThisClient] = useState(null)
    const [newNote, setNewNote] = useState(null)
    const [editNote, setEditNote] = useState(null)
    const [newClient, setNewClient] = useState(null)

    const [id, setId] = useState(null);
    const [clientId, setClientId] = useState(null);

    useEffect(() => {
        if (location.state !== null) {
            return setId(location.state.stateData.noteId)
        }
    })

    useEffect(() => {
        if (location.state !== null) {
            return setClientId(location.state.stateData.clientId)
        }
    })

    useEffect(() => {
        getNote(id).then(transferArr => {
            let response = transferArr[1].response;
            return setNote(response)
        }
        )
    }, [setNote]);

    let clientName = null
    useEffect(() => {
        let id = clientId
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            clientName = response[0][1][1]
            setThisClient(clientName)
        }
        )
    }, [setThisClient]);

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
    let callEditNoteForm = async function (e) {
        e.preventDefault()
        let updateNoteRequested = true;
        setEditNote(updateNoteRequested)
    }

    let ids = { id: id, clientId: clientId }

    let callDeleteNote = async function (e) {
        e.preventDefault()
        await deleteNote(ids)
    }

    return (
        <>
            <AllPageLayout>
                <BlockContainer resource="note">
                    <h2 class="note-text">Note Subject: {note !== null && note[0][2][1]}</h2>
                    <h4 class="note-text">For Client: {thisClient !== null && thisClient}</h4>
                </BlockContainer>
                <BlockContainer resource="note">
                    <SortListLayout thisClient={thisClient} clientId={clientId} list={note} noteId={id}
                        resource="note"></SortListLayout>
                    <br></br>
                    <div class="d-flex justify-content-around">
                        <button class="btn btn-primary btn-lg" onClick={(e) => callEditNoteForm(e)}>Edit Note</button>
                        <button class="btn btn-primary btn-sm" onClick={(e) => callNoteForm(e)}>New Note form</button>
                        <button class="btn btn-dark btn-sm" onClick={(e) => callClientForm(e)}>New Client form</button>
                        <button class="btn btn-danger btn-sm" onClick={(e) => callDeleteNote(e)}>Delete Note</button>
                    </div>
                </BlockContainer>
                {newNote !== null && (<> <BlockContainer resource="note">
                    <NoteForm thisClient={thisClient} clientId={clientId} resource="notes"></NoteForm></BlockContainer></>)}
                {editNote !== null && (<> <BlockContainer resource="note">
                    <NoteForm thisClient={thisClient} clientId={clientId} resource="notes" note={note}></NoteForm></BlockContainer></>)}
                {newClient !== null && (<> <BlockContainer resource="client"><h4>Create new Client</h4>
                    <ClientForm></ClientForm></BlockContainer></>)}
            </AllPageLayout>
        </>)
}