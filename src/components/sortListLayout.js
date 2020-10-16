import React from "react"
// import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import { Link } from "gatsby"

export default function SortListLayout(props) {
    //props = {list: [{},{}], resource: "clients"}

    console.log(props.list[0])
    return (
        <>
            <BlockContainer>
                <a class="btn btn-warning" href='/homepage/'>My homepage</a>
                <a class="btn btn-primary" href='/clients/'>New Client</a>
                <br></br>
                <div class="container">
                    <p>Search the table:</p>
                    <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                    <br></br>
                    <table class="table table-bordered table-striped">
                        <thead>
                            <tr>
                                <th>Client</th>
                                <th>Client Id</th>
                                <th>{props.list[0].id}</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            {props.list.map((item, i) => {
                                if (item !== null) {
                                    item.resource = props.resource
                                    return (<tr>
                                        <td>{item.clientName}</td>
                                        <td>{item.id}</td>
                                        <td>{item.ownedBy}</td>
                                        <td>
                                            <Link to={"/client/" + item.id} className="btn btn-secondary btn-sm">View Client</Link>
                                        </td>
                                    </tr>)
                                }
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </BlockContainer>
        </>
    )
}