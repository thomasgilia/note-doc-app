import React from "react"

export default function SearchList(props) {
    // console.log(props.resource)
    if (props.resource === ("clients" || "notes" || "docs")) {
        return (<>
            <p>Search the table:</p>
            <input class="form-control" id="myInput" type="text" placeholder="Search.." />
            <br></br>
        </>
        )
    } else {
        return (null)
    }
}
