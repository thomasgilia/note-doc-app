import React, { useEffect, useState } from "react"
import { getAllNotes, getClients } from "../../backendHookup"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
import ClientForm from "../components/clientForm"

export default function Home() {
  const [list, setList] = useState([])
  const [newClient, setNewClient] = useState(null)
  const [noteId, setNoteId] = useState(null)
  const [clientId, setClientId] = useState(null)
  const [resource, setResource] = useState("clients")

  useEffect(() => {
    getClients().then(transferArr => {
      let response = transferArr[1].response;
      // console.log(response)       //for now arr of client objs
      return setList(response)
    }
    )
  }, [setList]);

  // const [flaggedNotes, setFlaggedNotes] = useState(null)
  // useEffect(() => {
  //   getAllNotes().then(transferArr => {
  //     let response = transferArr[1].response;
  //     // console.log(response)       //for now arr of client objs
  //     return setFlaggedNotes(response)
  //   }
  //   )
  // }, [setFlaggedNotes]);

  // console.log(flaggedNotes)

  //list = array of clients with arrays of property pairs i.e.
  //list = [[["id", 1],["clientName", "Stucky's"],...]],[next client...],...]
  // console.log(list)
  let callClientForm = function (e) {
    e.preventDefault()
    let newClientRequested = true;
    setNewClient(newClientRequested)
  }
  // const timestamp = new Date(comment.Created.toDate())
  // let callAllNotes = function (e) {
  //   e.preventDefault()
  //   let notes = getAllNotes();
  //   // console.log(notes)
  //   // setNewClient(newClientRequested)
  // }

  // Created: new Date()

  // let thisDate = new Date()
  // const tsMonth = thisDate.getMonth() + 1
  // const tsDay = thisDate.getDate()
  // const tsYear = thisDate.getFullYear()
  // console.log(thisDate)

  if (list !== []) {
    return (
      <>
        {/* <AllPageLayout flaggedNotes={flaggedNotes}> */}
        <AllPageLayout>
          <BlockContainer>
            <h1>Clients</h1>
          </BlockContainer>
          {newClient !== null && (<> <BlockContainer><h4>New Client form</h4>
            <ClientForm></ClientForm></BlockContainer></>)}
          <BlockContainer>
            <button class="btn btn-dark" onClick={(e) => callClientForm(e)}>Create New Client</button>
            {/* <button onClick={(e) => callAllNotes(e)}>All notes</button> */}
            <SortListLayout list={list} resource="clients" clientId={clientId} noteId={noteId}></SortListLayout>
          </BlockContainer>
        </AllPageLayout>

      </>
    )
  } else { return null }
}