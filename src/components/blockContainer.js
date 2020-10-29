import React from "react"

export default function BlockContainer(props) {
    if (props.resource === "note") {
        return (<div className="container block-container my-3 p-30 bg-white  rounded shadow-note">{props.children}</div>)
    } else {
        return (<div className="container block-container my-3 p-30 bg-white rounded shadow">{props.children}</div>)
    }
}