import React, { useEffect, useState } from "react"
import { getAll } from "../../backendHookup"
import AllPageLayout from "./allPageLayout"
import SortListLayout from "./sortListLayout"
// import { getClients, getNotes, getDocs } from "../../backendHookup"

export default function HomepageLayout() {
    const [list, setList] = useState(null)

    useEffect(() => {
        getAll().then(transferArr => {
            let response = transferArr[1].response;
            console.log(response)
            return setList(response)
        }
        )
    }, [setList]);
    // let list = [{ "id": 1, "clientName": "General/All Clients", "ownedByUser": false, "ownedBy": "N/A", "keyClient": false, "reqQuote": false, "reqQuoteApproval": false, "standardDiscount": 0, "revisionLog": "", "createdAt": "2020-10-04T01:31:48.684Z", "updatedAt": "2020-10-04T01:31:48.684Z" }, { "id": 2, "clientName": "Stucky's Towing", "ownedByUser": true, "ownedBy": "Jianwei R.", "keyClient": true, "reqQuote": true, "reqQuoteApproval": true, "standardDiscount": 15, "revisionLog": "New corolla manual", "createdAt": "2020-10-04T01:31:48.906Z", "updatedAt": "2020-10-04T01:31:48.906Z" }, { "id": 3, "clientName": "Stucky's Towing", "ownedByUser": true, "ownedBy": "Jianwei R.", "keyClient": true, "reqQuote": true, "reqQuoteApproval": true, "standardDiscount": 15, "revisionLog": "Added discount", "createdAt": "2020-10-04T01:36:57.643Z", "updatedAt": "2020-10-04T01:36:57.643Z" }, { "id": 4, "clientName": "Stucky's Towing", "ownedByUser": true, "ownedBy": "Jianwei R.", "keyClient": true, "reqQuote": true, "reqQuoteApproval": true, "standardDiscount": 15, "revisionLog": "Added discount", "createdAt": "2020-10-04T01:51:23.568Z", "updatedAt": "2020-10-04T01:51:23.568Z" }, { "id": 5, "clientName": "Acme Inc.", "ownedByUser": true, "ownedBy": "Joann Q.", "keyClient": true, "reqQuote": true, "reqQuoteApproval": true, "standardDiscount": 0, "revisionLog": "Lorem Ipsum", "createdAt": "2020-10-04T15:09:59.297Z", "updatedAt": "2020-10-04T15:09:59.297Z" }, { "id": 6, "clientName": "Acme Inc.", "ownedByUser": true, "ownedBy": "Joann Q.", "keyClient": true, "reqQuote": true, "reqQuoteApproval": true, "standardDiscount": 0, "revisionLog": "Lorem Ipsum", "createdAt": "2020-10-04T15:13:52.774Z", "updatedAt": "2020-10-04T15:13:52.774Z" }]
    // console.log(list)
    return (
        <>
            <AllPageLayout>
                {list !== null && <SortListLayout list={list} resource="clients"></SortListLayout>}
            </AllPageLayout>
        </>
    )
}