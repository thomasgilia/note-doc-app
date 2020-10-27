// import React, { useState, useEffect } from "react"

// export default function NoteForm(props) {
//     // console.log(props)
//     const [title, setTitle] = useState(null)
//     const [note, setNote] = useState(null)
//     const [clientId, setClientId] = useState(props.clientId)
//     const [category, setCategory] = useState(null)
//     const [setUrgent, setSetUrgent] = useState(null)    
//     const [revisionLog, setRevisionLog] = useState(null)
//     // props has clientId={id} thisClient={thisClient} resource="note"
//     const newNoteHandler = async e => {
//         e.preventDefault()
//         let id = clientId
//         let input = {
//             title: title,
//             note: note,
//             category: category,
//             setUrgent: setUrgent === "true", //check for boolean
//             revisionLog: revisionLog
//         }
//         let transferObj = {
//             id: id,
//             input
//         }
//         // setVisitor("")       //resetting values after form sent
//         // setMessage("")
//         // console.log(input.setUrgent)
//         createNote(transferObj)
//     }

//     return (