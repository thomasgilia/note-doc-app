import React from "react"

export default function BlockContainer(props) {
    // console.log(props.color)
    // let color = props.color;
    if (props.color === "contrast-light") {
        return (<div className="container block-container my-3 p-3 contrast-light rounded shadow-sm">{props.children}</div>)
    } else {
        return (<div className="container block-container my-3 p-3 bg-white rounded shadow-sm">{props.children}</div>)
    }
}