import React from "react"
// import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import { Link } from "gatsby"

export default function SortListLayout(props) {
    //old way:    props = {list: [{},{}], resource: "client"}
    //new way:    props = {list: [[],[]], resource: "client"}
    //props.list=[[],[]...] i.e. ["Client Id", 1], ["Client", "Stucky's"]...
    // console.log(props.list)
    return (
        <>
            <BlockContainer>
                <div class="container">
                    <p>Search the table:</p>
                    <input class="form-control" id="myInput" type="text" placeholder="Search.." />
                    <br></br>
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
        </BlockContainer>
        </>
    )
}

