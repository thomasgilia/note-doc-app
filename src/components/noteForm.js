import React, { useState, useEffect } from "react"
import { createNote, editNote, deleteNote } from "../../backendHookup"

export default function NoteForm(props) {
    // console.log(props) //has thisclient, clientID, the note data passed from viewnote, resources
    const [title, setTitle] = useState("")
    const [note, setNote] = useState(null)
    const [clientId, setClientId] = useState(props.clientId)
    const [category, setCategory] = useState(null)
    const [flagUrgent, setFlagUrgent] = useState(null)
    const [revisionLog, setRevisionLog] = useState(null)
    const [noteId, setNoteId] = useState(null)

    const newNoteHandler = async e => {
        e.preventDefault()
        // let id = clientId

        let input = {
            title: title,
            note: note,
            category: category,
            flagUrgent: flagUrgent === "true", //check for boolean
            revisionLog: revisionLog
        }
        let transferObj = {
            clientId: clientId,
            input
        }
        // setVisitor("")       //resetting values after form sent
        // setMessage("")
        createNote(transferObj)
    }

    //---------------------------------------------------------------------------
    const updateNoteHandler = async e => {
        e.preventDefault()
        let id = parseInt(noteId)
        // console.log("note Id is " + note)
        let input = {
            id: id,
            title: title,
            note: note,
            category: category,
            flagUrgent: flagUrgent === "true", //check for boolean
            revisionLog: revisionLog,
            clientId: clientId
        }

        let transferObj = {
            id: noteId,
            input
        }
        editNote(transferObj)
    }
    //-----------------------------------------------
    let originalNoteObj;
    useEffect(() => {
        if ((props.note !== null) && (props.note !== undefined)) {
            let originalNote = [...props.note]
            let originalNoteZero = originalNote[0]
            let titleMapNotes = {
                id: "Note Id",
                category: "Category",
                title: "Subject",
                note: "Note body",
                flagUrgent: "Flag as urgent?",
                revisionLog: "Revision Log",
                createdAt: "Created",
                updatedAt: "Last Update",
                clientId: "Client Id"
            };
            let titleMapNotesArr = Object.entries(titleMapNotes)
            let titleMaps = [...titleMapNotesArr]

            let fixedArray = []
            fixedArray = originalNoteZero.map((element, index) => {
                // console.log(element[1])
                // fixedArray.push([forgoodnesssake[index][0], element[index][1]]) 
                return [titleMaps[index][0], element[1]]
            })
            // let obj = []
            // fixedArray.map(element => {
            //     let pairs = Object.fromEntries(element)
            //     // obj.push(pairs)
            //     console.log(pairs)
            // });
            // let originalNoteObj = obj[0]
            originalNoteObj = Object.fromEntries(fixedArray)
            // console.log(originalNoteObj)
            setTitle(originalNoteObj.title)//build out rest of field states to update like title here
            setNote(originalNoteObj.note)
            // setClientId(originalNoteObj.clientId)   //dont need unless decide to hookup change client functionality
            setCategory(originalNoteObj.category)
            setFlagUrgent(originalNoteObj.flagUrgent)
            setRevisionLog(originalNoteObj.revisionLog)
            setNoteId(originalNoteObj.id)
        }
    }, [])//bare minimum second param to useeffect. otherwise it can end up in loops.

    if ((props.note === null) || (props.note === undefined)) {
        return (
            <>
                <h4 class="note-text">New note for client: {props.thisClient}</h4>
                <br></br>
                <form onSubmit={e => newNoteHandler(e)}>
                    Title: <input type="text" name="title" class="note-text" required onChange={e => setTitle(e.target.value)} />
                    <br></br>
                    <div>
                        <label for="category">Choose a category:</label>
                        <select name="category" id="category" required onChange={e => setCategory(e.target.value)}>
                            <option selected></option>
                            <option value="Financial">Financial</option>
                            <option value="Project details">Project details</option>
                            <option value="Contacts">Contacts</option>
                        </select>
                        <br></br>
                        <label for="flagUrgent">Set Urgent Flag?</label>
                        <select name="flagUrgent" id="flagUrgent" required onChange={e => setFlagUrgent(e.target.value)}>
                            <option selected></option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <br></br>
                        Note: <input type="text" name="note" required onChange={e => setNote(e.target.value)} />
                        <br></br>
                        Revision Log: <input type="text" name="revisionLog" required onChange={e => setRevisionLog(e.target.value)} />
                        <br></br>
                        <br></br>
                        <button class="btn btn-dark" type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    } else {
        return (
            <>
                <h4 class="note-text">Update note {noteId} for client: {props.thisClient}</h4>
                <br></br>
                <form onSubmit={e => updateNoteHandler(e)}>
                    Title: <input type="text" name="title" value={title} required onChange={(e) => { setTitle(e.target.value) }} />
                    <br></br>
                    <div>
                        <label for="category">Choose a category:</label>
                        <select name="category" id="category" required onChange={e => setCategory(e.target.value)}>
                            <option selected>{category} </option>
                            <option value="Financial">Financial</option>
                            <option value="Project details">Project details</option>
                            <option value="Contacts">Contacts</option>
                        </select>
                        <br></br>
                        <label for="flagUrgent">Flag as Urgent?</label>
                        <select name="flagUrgent" id="flagUrgent" required onChange={e => setFlagUrgent(e.target.value)}>
                            <option selected>{flagUrgent} </option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <br></br>
                        Note: <input type="text" name="note" value={note} required onChange={e => setNote(e.target.value)} />
                        <br></br>
                        Revision Log: <input type="text" name="revisionLog" value={revisionLog} required onChange={e => setRevisionLog(e.target.value)} />
                        <br></br>
                        <br></br>
                        <button class="btn btn-primary" type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    }
}