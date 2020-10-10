import React, { useEffect, useState } from "react"
import { getAll } from "../../backendHookup"
import SortList from "./sortList"
// import { getClients, getNotes, getDocs } from "../../backendHookup"
// import SortList from "../components/sortList"


export default function HomepageLayout() {
    const [list, setList] = useState(null)
    // const [listSubject, setListSubject] = useState(null)

    //goal:  will call applicable data in from backend then send it through sort-list component
    //sort-list has formatting for the list only then passes formatted list back to homepage (or wherever)
    useEffect(() => {
        getAll().then(transferArr => {
            let response = transferArr[1].response;

            // let resource = transferArr[0].resource  //"clients"
            console.log(response)       //is giving me the resource
            return setList(response)
        }
        )
    }, [setList]);
    // console.log(list)
    //list is now an array of objects, each object is a client

    // so I can have a collection saved in state but cannot directly access it unless in JSX???
    return (
        <>
         {/* <SortList {...list}></SortList> */}
                { list.map((item, i) => {
                    return <SortList key={i} {...item}></SortList>
                })}
            <h2>just wonder if it prints</h2>
        </>
    )
}
//return here is returning an array of jsx with each item as and obj....?