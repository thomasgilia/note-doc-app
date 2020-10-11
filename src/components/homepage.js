import React, { useEffect, useState } from "react"
import { getAll } from "../../backendHookup"
import SortListLayout from "./sortListLayout"
// import { getClients, getNotes, getDocs } from "../../backendHookup"


export default function HomepageLayout() {
    // const [list, setList] = useState(null)
    // const [listSubject, setListSubject] = useState(null)

    //goal:  will call applicable data in from backend then send it through sort-list component
    //sort-list has formatting for the list only then passes formatted list back to homepage (or wherever)
    // useEffect(() => {
    //     getAll().then(transferArr => {
    //         let response = transferArr[1].response;

    //         // let resource = transferArr[0].resource  //"clients"
    //         console.log(response)       //is giving me the resource
    //         return setList(response)
    //     }
    //     )
    // }, [setList]);
    // // console.log(list)
    // //list is now an array of objects, each object is a client
let list = [{"id":1,"clientName":"General/All Clients","ownedByUser":false,"ownedBy":"N/A","keyClient":false,"reqQuote":false,"reqQuoteApproval":false,"standardDiscount":0,"revisionLog":"","createdAt":"2020-10-04T01:31:48.684Z","updatedAt":"2020-10-04T01:31:48.684Z"},{"id":2,"clientName":"Stucky's Towing","ownedByUser":true,"ownedBy":"Jianwei R.","keyClient":true,"reqQuote":true,"reqQuoteApproval":true,"standardDiscount":15,"revisionLog":"New corolla manual","createdAt":"2020-10-04T01:31:48.906Z","updatedAt":"2020-10-04T01:31:48.906Z"},{"id":3,"clientName":"Stucky's Towing","ownedByUser":true,"ownedBy":"Jianwei R.","keyClient":true,"reqQuote":true,"reqQuoteApproval":true,"standardDiscount":15,"revisionLog":"Added discount","createdAt":"2020-10-04T01:36:57.643Z","updatedAt":"2020-10-04T01:36:57.643Z"},{"id":4,"clientName":"Stucky's Towing","ownedByUser":true,"ownedBy":"Jianwei R.","keyClient":true,"reqQuote":true,"reqQuoteApproval":true,"standardDiscount":15,"revisionLog":"Added discount","createdAt":"2020-10-04T01:51:23.568Z","updatedAt":"2020-10-04T01:51:23.568Z"},{"id":5,"clientName":"Acme Inc.","ownedByUser":true,"ownedBy":"Joann Q.","keyClient":true,"reqQuote":true,"reqQuoteApproval":true,"standardDiscount":0,"revisionLog":"Lorem Ipsum","createdAt":"2020-10-04T15:09:59.297Z","updatedAt":"2020-10-04T15:09:59.297Z"},{"id":6,"clientName":"Acme Inc.","ownedByUser":true,"ownedBy":"Joann Q.","keyClient":true,"reqQuote":true,"reqQuoteApproval":true,"standardDiscount":0,"revisionLog":"Lorem Ipsum","createdAt":"2020-10-04T15:13:52.774Z","updatedAt":"2020-10-04T15:13:52.774Z"}]
// console.log(list)
    // so I can have a collection saved in state but cannot directly access it unless in JSX???
    return (
        <>
         <SortListLayout list={list} resource="clients"></SortListLayout>
                {/* { list.map((item, i) => {
                    item.resource = "clients"
                    return <SortListLayout key={i} {...item}></SortListLayout>
                })} */}
            <h2>above this should be my sortable list</h2>
        </>
    )
}
//return here is returning an array of jsx with each item as and obj....?