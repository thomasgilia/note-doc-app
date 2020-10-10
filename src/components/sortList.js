import React from "react"

export default function SortList(props) {
    console.log(props)  //props is just response data to turn into a list
    return (
        <>
            <ul>
                {props !== null &&
                    <li className="list-group-item">It's currently {props[0].id} </li>
                }
            </ul>
        </>
    )
}