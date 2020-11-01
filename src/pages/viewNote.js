import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import AllPageLayout from "../components/allPageLayout"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getNote, getClient, deleteNote } from "../../backendHookup"

export default function Home({ location }) {
    const [arrow1, setArrow1] = useState(false);
    const [arrow2, setArrow2] = useState(false);
    const [arrow3, setArrow3] = useState(false);

    const [id, setId] = useState(null);
    useEffect(() => {
        if ((location.state !== null) && (location.state !== undefined)) {
            return setId(location.state.stateData.noteId)
        } else {
            console.log("stateData not available")
        }
    }, [setId])

    const [clientId, setClientId] = useState(null);
    useEffect(() => {
        if ((location.state.stateData !== null) && (location.state.stateData !== undefined)) {
            return setClientId(location.state.stateData.clientId)
        } else {
            console.log("stateData not available")
        }
    }, [setClientId])

    const [note, setNote] = useState(null)
    useEffect(() => {
        getNote(id).then(transferArr => {
            let response = transferArr[1].response;
            return setNote(response)
        }
        )
    }, [id]);

    const [thisClient, setThisClient] = useState(null)
    useEffect(() => {
        getClient(clientId).then(transferArr => {
            if (transferArr === undefined) {
                console.log("client is not defined")
            } else {
                let response = transferArr[1].response;
                let clientName = response[0][1][1]
                return setThisClient(clientName)
            }
        }
        )
    }, [clientId]);

    const [newNote, setNewNote] = useState(null)
    const [editNote, setEditNote] = useState(null)
    const [newClient, setNewClient] = useState(null)

    let callClientForm = async function (e) {
        e.preventDefault()
        let newClientRequested = true;
        setNewClient(newClientRequested)
        setArrow3(true)
    }

    let callNoteForm = async function (e) {
        e.preventDefault()
        let newNoteRequested = true;
        setNewNote(newNoteRequested)
        setArrow2(true)
    }

    let callEditNoteForm = async function (e) {
        e.preventDefault()
        let updateNoteRequested = true;
        setEditNote(updateNoteRequested)
        setArrow1(true)
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
                    <h2 class="note-text"><i class="fa fa-file-text-o" aria-hidden="true" /> Subject: {note !== null && note[0][2][1]}</h2>
                    <h4 class="note-text">For Client: {thisClient !== null && thisClient}</h4>
                </BlockContainer>
                <BlockContainer resource="note">
                    <SortListLayout thisClient={thisClient} clientId={clientId} list={note} noteId={id}
                        resource="note"></SortListLayout>
                    <br></br>
                    <div class="d-flex justify-content-around">
                        {(arrow1 !== true) && (<button class="btn btn-primary btn-lg"
                            onClick={(e) => callEditNoteForm(e)}>Edit Note</button>)}
                        {(arrow1 === true) && (<button class="btn btn-primary btn-lg"
                            onClick={(e) => callEditNoteForm(e)}>Edit Note <i class="fa fa-arrow-down" aria-hidden="true" /></button>)}

                        {(arrow2 !== true) && (<button class="btn btn-primary btn-sm"
                            onClick={(e) => callNoteForm(e)}>New Note form</button>)}
                        {(arrow2 === true) && (<button class="btn btn-primary btn-sm"
                            onClick={(e) => callNoteForm(e)}>New Note form <i class="fa fa-arrow-down" aria-hidden="true" /></button>)}

                        {(arrow3 !== true) && (<button class="btn btn-dark btn-sm"
                            onClick={(e) => callClientForm(e)}>New Client form</button>)}
                        {(arrow3 === true) && (<button class="btn btn-dark btn-sm"
                            onClick={(e) => callClientForm(e)}>New Client form <i class="fa fa-arrow-down" aria-hidden="true" /></button>)}

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