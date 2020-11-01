import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import AllPageLayout from "../components/allPageLayout"
// import NotePageLayout from "../components/notePageLayout"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getNote, getClient, deleteNote } from "../../backendHookup"

export default function Home({ location }) {
    console.log(location)
    const [id, setId] = useState(null);
    useEffect(() => {
        if ((location.state !== null) && (location.state !== undefined)) {
            // console.log(location)
            return setId(location.state.stateData.noteId)
        } else {
            console.log("error in setting id")
        }
    }, [setId])

    const [clientId, setClientId] = useState(null);
    useEffect(() => {
        if ((location.state.stateData !== null) && (location.state.stateData !== undefined)) {
            return setClientId(location.state.stateData.clientId)
        } else {
            console.log("error in setting id")
        }
    }, [setClientId])

    const [note, setNote] = useState(null)
    useEffect(() => {
        // console.log("get note effect is being hit and has id available: " + id)
        getNote(id).then(transferArr => {
            let response = transferArr[1].response;
            // console.log("interior of getNote is being hit")
            return setNote(response)
        }
        )
    }, [id]);       //"only run this effect if the id changes between renders"

    const [thisClient, setThisClient] = useState(null)
    useEffect(() => {
        getClient(clientId).then(transferArr => {
            // console.log(transferArr)
            if (transferArr === undefined) {
                console.log("client is undefined")
            } else {
                let response = transferArr[1].response;
                let clientName = response[0][1][1]
                return setThisClient(clientName)
            }
        }
        )
    }, [clientId]);

    // const [locationKey, setLocationKey] = useState(null)
    // useEffect(() => {
    //     // console.log(location)
    //     if ((location.state !== null) && (location.state !== undefined)) {
    //         // console.log(location.key)
    //         // window.location.reload()
    //         return setLocationKey(location.key)
    //     } else {
    //         console.log("error in setting key")
    //     }
    // }, [locationKey]);

    useEffect(() => {
        if ((location.state.stateData !== null) && (location.state.stateData !== undefined)){
        console.log(location.state.stateData)}
        // if ((location.state !== null) && (location.state !== undefined) && (location.state.stateData.reloadCommand)) {
        //     window.location.reload()
        // } else {
        //     console.log("error in setting reload command")
        // }
    }, []);

    const [newNote, setNewNote] = useState(null)
    const [editNote, setEditNote] = useState(null)
    const [newClient, setNewClient] = useState(null)

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
            {/* {note !== null && console.log("jsx is receiving: " + id)} */}
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