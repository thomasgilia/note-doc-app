// // // import { response } from "express";
// import React, { useEffect, useState } from "react"
// import AllPageLayout from "../components/allPageLayout"
// import BlockContainer from "../components/blockContainer"
// import { getClientNotes } from "../../backendHookup"

// export default function ViewNote(props) {
//     //pageContext:  { clientName: client.clientName, clientId: client.id }
//     //probaby need to add noteid to it as well

//     let id = props.clientId///fix....
//     const [client, setClient] = useState(null)
//     const [id, setId] = useState(props.clientId);///fix....props
// // console.log(id)

//     useEffect((id) => {
//          getClient(id).then(transferArr => {
//             let response = transferArr[1].response;
//             // console.log(response)
//             return setClient(response)
//         }
//         )
//     }, [setClient]);

//     let color = "contrast-light"
//     return (
//         <>
//             <AllPageLayout>
//                 <BlockContainer color={color}>
//                     <h2>Client:  {client !== null && client.clientName}</h2>
//                     <h3>Client Id: {client !== null && client.clientId}</h3>
//                 </BlockContainer>
//                 <BlockContainer>

//                     <div class="container">
//                         <table class="table">
//                             <tr>
//                                 <th>Client Id:</th>
//                                 <th>Has Owner?:</th>
//                                 <th>Owned By:</th>
//                                 <th>Key Client?:</th>
//                                 <th>Requires Quote?:</th>
//                                 <th>Requires Quote Approval?:</th>
//                                 <th>Standard Discount(%):</th>
//                             </tr>
//                             <tr>
//                                 {/* <td>{client.id}</td>
//                                 <td>{client.ownedByUser}Yes{else}No{}</td >
//                                 <td>{client.ownedByUser}{client.ownedBy}{else}N/A{}</td >
//                                 <td>{client.keyClient}Yes{else}No{}</td>
//                                 <td>{client.reqQuote}Yes{else}No{}</td>
//                                 <td>{client.reqQuoteApproval}Yes{else}No{}</td>
//                                 <td>{client.standardDiscount}</td> */}
//                             </tr>
//                         </table>
//                     </div>
//                     <div class="container">
//                         <table class="table">
//                             <tr>
//                                 {/* <th>Revision Log: <span style="color:blue">[last Update: {client.updatedAt}]</span></th> */}
//                                 <th></th>
//                             </tr>
//                             <tr>
//                                 {/* <td>{client.revisionLog}</td> */}
//                                 <td></td>
//                             </tr>
//                         </table>
//                     </div>

//                     At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
//                     voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate
//                     non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
//                     Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi
//                     optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est,
//                     omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe
//                     eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a
//                     sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus
//                     asperiores repellat.
//                 </BlockContainer>
//             </AllPageLayout>
//         </>)

// }
