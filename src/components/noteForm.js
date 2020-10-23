// import React, { useState } from "react"

// export default function NoteForm(props) {
//     console.log(props)
//     const [id, setId] = useState(props.clientId)
//     const [thisClient, setThisClient] = useState(props.thisClient)
//     const [title, setTitle] = useState(null)

//     // const newNoteHandler = async e => {
//     //     // e.preventDefault()

//     //     let comment = {
//     //         Visitor: visitor,
//     //         Message: message,
//     //         Page: page,
//     //         Created: new Date()
//     //     }

//     //     setVisitor("")
//     //     setMessage("")

//     // }

//     return (
//         <>
//             <h4>New note for {thisClient}</h4>

//             <form action={"/notes/client" + id} method="post">
//                 <label htmlFor="title">Note title</label>
//                 <input type="text" name="title" id="title" />

//                 <label htmlFor="category">Your Comments</label>
//                 <input type="text" name="category" id="category" />


//                 <button>Create Note</button>
//             </form>
//             {/* Title: <input type="text" name="title" value="{{resources.title}}" />
//                 <br>
//                     <br />
//                     <div>
//                         <label for="category">Choose a category:</label>
//                         <select name="category" id="category">
//                             <option selected>{{ resources.category }}</option>
//                             <option value="Financial">Financial</option>
//                             <option value="Project details">Project details</option>
//                             <option value="Contacts">Contacts</option>
//                         </select>
//                     </div>
//                     <br />
//   Note: <input type="blob" name="note" value="{note}" />
//                     <br>
//                         <br />
//   Revision log: <input type="textbox" name="revisionLog" value="{{resources.revisionLog}}" />
//                         <br>
//                             <div>
//                                 <br>
//                                     Flag Urgent?:
//     <input type="radio" id="true" name="setUrgent">
//                                         <label for="true">Yes</label>
//                                         <input type="radio" id="false" name="setUrgent" />
//                                         <label for="false">No</label><br>
//   </div>

//                                         <div>
//                                             <label for="flagExpires">Flag expiration date:</label>
//                                             <input type="date" id="flagExpires" name="flagExpires" value="01/01/2020" />
//                                         </div>

//                                         <select name="clientId" id="clientId" />
//                                         <option value={id} selected>
//                                             {thisClient} </option>

  
//             </form> */}
//         </>
//     )
// }