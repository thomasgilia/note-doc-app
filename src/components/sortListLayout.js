import React from "react"
// import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SearchList from "../components/searchList"
import { Link } from "gatsby"

export default function SortListLayout(props) {
    //old way:    props = {list: [{},{}], resource: "client"}
    //new way:    props = {list: [[],[]], resource: "client"}
    //props.list=[[],[]...] i.e. ["Client Id", 1], ["Client", "Stucky's"]...
    console.log(props.resource)

    //add logic: if resource=client or note or doc, dont put in search, else, put in search
    // if (props.color === "contrast-light") {
    //     return (<div className="container block-container my-3 p-30 contrast-light rounded shadow">{props.children}</div>)
    // } else {
    //     return (<div className="container block-container my-3 p-30 bg-white rounded shadow">{props.children}</div>)
    // }
    return (
        <>
            <BlockContainer>
                <div class="container">
                    <SearchList resource={props.resource}></SearchList>
                    <div class="table-responsive">
                        <table class="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    {props.list.map(item => {
                                        return (
                                            <th>
                                                {item[0]}
                                            </th>
                                        )
                                    })}
                                </tr>
                                <tr>
                                    {props.list.map(item => {
                                        return (
                                            <td>
                                                {item[1]}
                                            </td>
                                        )
                                    })}
                                </tr>
                            </thead>
                        </table>
                    </div>
                </div>
            </BlockContainer>
        </>
    )
}

