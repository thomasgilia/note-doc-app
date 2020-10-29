import React, { useState, useEffect } from "react"
import { createNote, editNote } from "../../backendHookup"

export default function NoteForm(props) {
    const [title, setTitle] = useState("")
    const [note, setNote] = useState(null)
    const [clientId] = useState(props.clientId)
    const [category, setCategory] = useState(null)
    const [flagUrgent, setFlagUrgent] = useState(null)
    const [revisionLog, setRevisionLog] = useState(null)
    const [noteId, setNoteId] = useState(null)

    const newNoteHandler = async e => {
        e.preventDefault()

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
        createNote(transferObj)
    }

    const updateNoteHandler = async e => {
        e.preventDefault()
        let id = parseInt(noteId)
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
                return [titleMaps[index][0], element[1]]
            })

            originalNoteObj = Object.fromEntries(fixedArray)
            setTitle(originalNoteObj.title)
            setNote(originalNoteObj.note)
            setCategory(originalNoteObj.category)
            setFlagUrgent(originalNoteObj.flagUrgent)
            setRevisionLog(originalNoteObj.revisionLog)
            setNoteId(originalNoteObj.id)
        }
    }, [])

    if ((props.note === null) || (props.note === undefined)) {
        return (
            <>
                <h4 class="note-text">New note for client: {props.thisClient}</h4>
                <form onSubmit={e => newNoteHandler(e)}>
                    <div class="form-group">
                        Title: <input type="text" name="title" class="form-control" required onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a category: </label>
                        <select name="category" id="category" class="form-control" required onChange={e => setCategory(e.target.value)}>
                            <option selected></option>
                            <option value="Financial">Financial</option>
                            <option value="Project details">Project details</option>
                            <option value="Contacts">Contacts</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="flagUrgent">Set Urgent Flag?</label>
                        <select name="flagUrgent" id="flagUrgent" class="form-control" required onChange={e => setFlagUrgent(e.target.value)}>
                            <option selected></option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        Note: <input type="text" name="note" class="form-control" required onChange={e => setNote(e.target.value)} />
                    </div>
                    <div class="form-group">
                        Revision Log: <input type="text" name="revisionLog" class="form-control" required onChange={e => setRevisionLog(e.target.value)} />
                    </div>
                    <button class="btn btn-dark" type="submit">Submit</button>
                </form>
            </>
        )
    } else {
        return (
            <>
                <h4 class="note-text">Update note {noteId} for client: {props.thisClient}</h4>
                <form onSubmit={e => updateNoteHandler(e)}>
                    <div class="form-group">
                        Title: <input type="text" name="title" class="form-control" value={title} required onChange={(e) => { setTitle(e.target.value) }} />
                    </div>
                    <div class="form-group">
                        <label for="category">Choose a category:</label>
                        <select name="category" id="category" class="form-control" required onChange={e => setCategory(e.target.value)}>
                            <option selected>{category} </option>
                            <option value="Financial">Financial</option>
                            <option value="Project details">Project details</option>
                            <option value="Contacts">Contacts</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="flagUrgent">Flag as Urgent?</label>
                        <select name="flagUrgent" id="flagUrgent" class="form-control" required onChange={e => setFlagUrgent(e.target.value)}>
                            <option selected>{flagUrgent} </option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                    </div>
                    <div class="form-group">
                        Note: <input type="text" name="note" class="form-control" value={note} required onChange={e => setNote(e.target.value)} />
                    </div>
                    <div class="form-group">
                        Revision Log: <input type="text" name="revisionLog" class="form-control" value={revisionLog} required onChange={e => setRevisionLog(e.target.value)} />
                    </div>
                    <button class="btn btn-primary" type="submit">Submit</button>
                </form>
            </>
        )
    }
}