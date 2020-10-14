import React from "react"
// import React, { useEffect, useState } from "react"
import SortListItem from "../components/sortListItem"
import BlockContainer from "../components/blockContainer"

export default function SortListLayout(props) {
    //props = {list: [{},{}], resource: "clients"}

    console.log(props.list)
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
                                <th>Client Owner</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="myTable">
                            {props.list.map((item, i) => {
                                item.resource = props.resource
                                return <SortListItem key={i} {...item}></SortListItem>
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </BlockContainer>
        </>
    )
}