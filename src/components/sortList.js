import React from "react"

export default function SortList(props) {
    //props is an individual item of response data to turn into a list
    //props = {id: 1, ...}
    return (
        <>
            <h1>anything coming through   {props.clientName}</h1>
        
        </>
    )
}

        //     <ul>
                //         {/* {props !== null &&
        //             <li className="list-group-item">It's currently {props[0].id} </li>
        //         } */}
        //     </ul>