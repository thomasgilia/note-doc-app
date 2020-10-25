import React, { useState } from "react"
import { createNote } from "../../backendHookup"
// import DatePickerReact from "./datePickerReact"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//pass in clint id
export default function NoteForm(props) {
    // console.log(props)
    const [title, setTitle] = useState(null)
    const [note, setNote] = useState(null)
    const [clientId, setClientId] = useState(props.clientId)
    const [category, setCategory] = useState(null)
    const [flagUrgent, setFlagUrgent] = useState(null)    
    const [flagExpires, setFlagExpires] = useState(new Date())
    const [revisionLog, setRevisionLog] = useState(null)
    // props has clientId={id} thisClient={thisClient} resource="note"
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
}