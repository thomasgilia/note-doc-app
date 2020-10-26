import React, { useState } from "react"
import { createNote } from "../../backendHookup"
// import DatePickerReact from "./datePickerReact"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function NoteForm(props) {
    // console.log(props) //has thisclient, clientID, the note data passed from viewnote, resources
    const [title, setTitle] = useState(null)
    const [note, setNote] = useState(null)
    const [clientId, setClientId] = useState(props.clientId)
    const [category, setCategory] = useState(null)
    const [flagUrgent, setFlagUrgent] = useState(null)
    const [flagExpires, setFlagExpires] = useState(new Date())
    const [revisionLog, setRevisionLog] = useState(null)

    const newNoteHandler = async e => {
        e.preventDefault()
        let id = clientId
        let input = {
            title: title,
            note: note,
            category: category,
            flagUrgent: flagUrgent === "true", //check for boolean
            flagExpires: flagExpires,
            revisionLog: revisionLog
        }
        let transferObj = {
            id: id,
            input
        }
        // setVisitor("")       //resetting values after form sent
        // setMessage("")
        // console.log(input.setUrgent)
        createNote(transferObj)
    }
    const updateNoteHandler = async e => {
        e.preventDefault()
        let originalNote = props.note
        let id = clientId
        let originalInput = {
            title: title,
            note: note,
            category: category,
            flagUrgent: flagUrgent === "true", //check for boolean
            flagExpires: flagExpires,
            revisionLog: revisionLog
        }
        let transferObj = {
            id: id,
            originalInput
        }
        // setVisitor("")       //resetting values after form sent
        // setMessage("")
        // console.log(input.setUrgent)
        createNote(transferObj)
    }
    let originalNote = [...props.note]
    let originalNoteZero = originalNote[0]
    console.log(originalNoteZero)
    let titleMapNotes = {
        id: "Note Id",
        category: "Category",
        title: "Subject",
        note: "Note body",
        flagUrgent: "Flag as urgent?",
        flagExpires: "Flag end date",
        revisionLog: "Revision Log",
        createdAt: "Created",
        updateAt: "Last Update",
        clientId: "Client Id"
    };
    let titleMapNotesArr = Object.entries(titleMapNotes)
    let forgoodnesssake = [...titleMapNotesArr]

    let fixedArray =[]
    fixedArray = originalNoteZero.map((element, index)=>{
        // console.log(element[1])
        // fixedArray.push([forgoodnesssake[index][0], element[index][1]]) 
        return  [forgoodnesssake[index][0], element[1]]
    })
console.log(fixedArray)
   
    let obj = []
    originalNote.forEach(element => {
        let pairs = Object.fromEntries(element)
        obj.push(pairs)
    });
    let originalNoteObj = obj[0]

    // console.log(originalNoteObj)

    if (props.note === null) {
        return (
            <>
                <h4>New note for client: {props.thisClient}</h4>
                <form onSubmit={e => newNoteHandler(e)}>
                    Title: <input type="text" name="title" required onChange={e => setTitle(e.target.value)} />
                    <br></br>
                    <div>
                        <label for="category">Choose a category:</label>
                        <select name="category" id="category" required onChange={e => setCategory(e.target.value)}>
                            <option selected></option>
                            <option value="Financial">Financial</option>
                            <option value="Project details">Project details</option>
                            <option value="Contacts">Contacts</option>
                        </select>
                        <br>
                        </br>
                        <label for="flagUrgent">Set Urgent Flag?</label>
                        <select name="flagUrgent" id="flagUrgent" required onChange={e => setFlagUrgent(e.target.value)}>
                            <option selected></option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <br>
                        </br>
                        <label for="flagExpires">Flag expiration date:</label>
                        {/* <input type="date" id="flagExpires" name="flagExpires" value="2020-01-01"
                        required onChange={e => setFlagExpires(e.target.value)} /> */}
                        {/* <input type="date" id="flagExpires" name="flagExpires"  /> */}
                        <DatePicker selected={flagExpires} onChange={date => setFlagExpires(date)} />
                        {/* <DatePicker selected={flagExpires} onChange={date => setFlagExpires(date)} /> */}
                        {/* <DatePickerReact></DatePickerReact> */}
                        <br></br>
                    Note: <input type="text" name="note" required onChange={e => setNote(e.target.value)} />
                        <br></br>
                 Revision Log: <input type="text" name="revisionLog" required onChange={e => setRevisionLog(e.target.value)} />
                        <br></br>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    } else {
        return (
            <>
                <h4>New note for client: {props.thisClient}</h4>
                <form onSubmit={e => newNoteHandler(e)}>
                    Title: <input type="text" name="title" value={originalNoteObj.Subject} required onChange={e => setTitle(e.target.value)} />
                    <br></br>
                    <div>
                        <label for="category">Choose a category:</label>
                        <select name="category" id="category" required onChange={e => setCategory(e.target.value)}>
                            <option selected>{originalNoteObj.Category} </option>
                            <option value="Financial">Financial</option>
                            <option value="Project details">Project details</option>
                            <option value="Contacts">Contacts</option>
                        </select>
                        <br>
                        </br>
                        <label for="flagUrgent">Flag as Urgent?</label>
                        <select name="flagUrgent" id="flagUrgent" required onChange={e => setFlagUrgent(e.target.value)}>
                            <option selected>{originalNoteObj.flagUrgent} </option>
                            <option value="true">Yes</option>
                            <option value="false">No</option>
                        </select>
                        <br>
                        </br>
                        <label for="flagExpires">Flag expiration date:</label>
                        {/* <input type="date" id="flagExpires" name="flagExpires" value="2020-01-01"
                    required onChange={e => setFlagExpires(e.target.value)} /> */}
                        {/* <input type="date" id="flagExpires" name="flagExpires"  /> */}
                        <DatePicker selected={originalNoteObj.flagExpires} onChange={date => setFlagExpires(date)} />
                        {/* <DatePicker selected={flagExpires} onChange={date => setFlagExpires(date)} /> */}
                        {/* <DatePickerReact></DatePickerReact> */}
                        <br></br>
                Note: <input type="text" name="note" value={originalNoteObj.note} required onChange={e => setNote(e.target.value)} />
                        <br></br>
             Revision Log: <input type="text" name="revisionLog" value={originalNoteObj.revisionLog} required onChange={e => setRevisionLog(e.target.value)} />
                        <br></br>
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </>
        )
    }
}