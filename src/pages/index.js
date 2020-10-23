import React, { useEffect, useState } from "react"
import { getClients } from "../../backendHookup"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"

export default function Home() {
  const [list, setList] = useState(null)

  useEffect(() => {
    getClients().then(transferArr => {
      let response = transferArr[1].response;
      // console.log(response)       //for now arr of client objs
      return setList(response)
    }
    )
  }, [setList]);
  //list = array of clients with arrays of property pairs i.e.
  //list = [[["id", 1],["clientName", "Stucky's"],...]],[next client...],...]
  // console.log(list)
  if (list !== null) {
    return (
      <>
        <AllPageLayout>
          <BlockContainer>
            <h1>Client list</h1>
          </BlockContainer>
          <BlockContainer>
            <SortListLayout list={list} resource="clients"></SortListLayout>
          </BlockContainer>
        </AllPageLayout>
      </>
    )
  } else { return null }
}