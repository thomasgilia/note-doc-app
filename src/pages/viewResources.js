// // import { response } from "express";
import React, { useEffect, useState } from "react"
// import { navigate } from "gatsby"
import AllPageLayout from "../components/allPageLayout"
import BlockContainer from "../components/blockContainer"
import SortListLayout from "../components/sortListLayout"
// import { getClient, getClientNotes } from "../../backendHookup"
import { Link } from "gatsby"

export default function ViewResources({ location }) {
    //pageContext:  { clientName: client.clientName, clientId: client.id }
    // let id = pageContext.clientId
    // const [client, setClient] = useState(null)
    // const [id] = useState(pageContext.clientId);
    // let getCall = async function () {console.log(location.state.call)}
    // console.log(location.state.callData)
    let incomingData = location.state.callData
    // let incomingDataArr = Object.entries(location.state.callData)
    // console.log(incomingData)     // incoming data is array of arrays of obj?

    //incomingData[0]= array of note objects?
    let resourceArr = Object.entries(incomingData[2])
    let resource = resourceArr[0]
    let secondaryResource = Object.entries(incomingData[2])

    console.log(resourceArr)
    // let arr = incomingData[0]
    // let arrValue = Object.entries(incomingData[0][1])
    //incomingData[0][1]= one note object
    // console.log(location.state)
    // useEffect(() => {
    //     getClient(id).then(transferArr => {
    //         let response = transferArr[1].response;
    //         // console.log(response)
    //         return setClient(response)
    //     }
    //     )
    // }, [setClient]);

    if (location.state.callData !== null) {
        return (
            <>
                <AllPageLayout>
                    <BlockContainer>
                        <h2>{
                            // arrValue.forEach(element => {
                            //     // console.log(element[1])
                            //     return element[1]
                            // })
                            // {arrValue.id}                        
                        } </h2>
                        <h4></h4>

                    </BlockContainer>
                    <BlockContainer>
                        {/* <SortListLayout list={arrValue} resource="notes"></SortListLayout> */}

                    At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                    voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
                    non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
                    optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
                    omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                    eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
                    sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
                    asperiores repellat.
                </BlockContainer>
                </AllPageLayout>
            </>)
    } else { return null }
}