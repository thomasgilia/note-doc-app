import React, { useEffect, useState } from "react"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import ClientForm from "../components/clientForm"
import NoteForm from "../components/noteForm"
import { getClient, getClientNotes, deleteClient } from "../../backendHookup"

export default function ViewClient({ pageContext }) {

    const [client, setClient] = useState(null)
    const [id] = useState(pageContext.clientId);
    const [thisClient] = useState(pageContext.clientName)
    const [callNotes, setCallNotes] = useState(null)
    const [newClient, setNewClient] = useState(null)
    const [newNote, setNewNote] = useState(null)
    const [arrow1, setArrow1] = useState(false);
    const [arrow2, setArrow2] = useState(false);
    const [arrow3, setArrow3] = useState(false);

    useEffect(() => {
        getClient(id).then(transferArr => {
            let response = transferArr[1].response;
            return setClient(response)
        }
        )
    }, [setClient]);

    let hardcodeClientId = id
    let callClientNotes = async function (e) {
        e.preventDefault()
        let transferArr = await getClientNotes(id)
        let response = transferArr[1].response;
        setCallNotes(response)
        setArrow1(true)
    }

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

    let callDeleteClient = async function (e) {
        e.preventDefault()
        await deleteClient(id)
    }

    let shuttle = { list: client, noteId: null, clientId: hardcodeClientId, resource: "client" }

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
                        <br></br>
                        <div class="d-flex justify-content-around">
                            {(arrow1 !== true) && (<button class="btn btn-primary btn-lg"
                                onClick={(e) => callClientNotes(e)}>Get Client Notes</button>)}
                            {(arrow1 === true) && (<button class="btn btn-primary btn-lg"
                                onClick={(e) => callClientNotes(e)}>Get Client Notes <i class="fa fa-arrow-down" aria-hidden="true" /></button>)}

                            {(arrow2 !== true) && (<button class="btn btn-primary btn-sm"
                                onClick={(e) => callNoteForm(e)}>New Note form</button>)}
                            {(arrow2 === true) && (<button class="btn btn-primary btn-sm"
                                onClick={(e) => callNoteForm(e)}>New Note form <i class="fa fa-arrow-down" aria-hidden="true" /></button>)}

                            {(arrow3 !== true) && (<button class="btn btn-dark btn-sm"
                                onClick={(e) => callClientForm(e)}>New Client form</button>)}
                            {(arrow3 === true) && (<button class="btn btn-dark btn-sm"
                                onClick={(e) => callClientForm(e)}>New Client form <i class="fa fa-arrow-down" aria-hidden="true" /></button>)}

                            <button class="btn btn-danger btn-sm" onClick={(e) => callDeleteClient(e)}>Delete Client</button>
                        </div>
                    </BlockContainer>
                    {newClient !== null && (<> <BlockContainer resource="client"><h4>Create new Client</h4>
                        <ClientForm></ClientForm></BlockContainer></>)}
                    {newNote !== null && (<> <BlockContainer resource="note">
                        <NoteForm thisClient={thisClient} clientId={hardcodeClientId} resource="notes"></NoteForm></BlockContainer></>)}
                    {callNotes !== null && (<><BlockContainer resource="note"><h4 className="note-text"><i class="fa fa-file-text-o" aria-hidden="true" /> Notes for client: {thisClient}</h4>
                        <SortListLayout list={callNotes} resource="notes" clientId={hardcodeClientId}></SortListLayout></BlockContainer></>)}
                </AllPageLayout>
            </>)
    } else { return null }
}