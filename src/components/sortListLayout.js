import React from "react"
// import React, { useEffect, useState } from "react"
import BlockContainer from "../components/blockContainer"
import SearchList from "../components/searchList"
import ListItemSingle from "../components/listItemSingle"
import ListItemMulti from "./listItemMulti"
// import ListItemMulti from "../components/listItemMulti"
// import { Link } from "gatsby"

export default function SortListLayout(props) {
    //old way:    props = {list: [{},{}], resource: "client"}
    //new way:    props = {list: [[],[]], resource: "client"}
    //props.list=[[],[]...] i.e. ["Client Id", 1], ["Client", "Stucky's"]...

    // console.log(props)
    let resourceDisplay = props.resource
    if (resourceDisplay === "clients") {
        resourceDisplay = "client"
    }

    if (props.list !== null) {
        if (props.list[0].length < 3) {
            return (
                <>
                    <BlockContainer>
                        <div class="container">
                            <SearchList resource={props.resource}></SearchList>
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            {
                                                props.list.map(item => {
                                                    return (
                                                        <th>
                                                            {item[0]}
                                                        </th>
                                                    )
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <ListItemSingle list={props.list} resource={props.resource}></ListItemSingle>
                                </table>
                            </div>
                        </div>
                    </BlockContainer>
                </>
            )
        } else {
            return (
                <>
                    <BlockContainer>
                        <div class="container">
                            <SearchList resource={props.resource}></SearchList>
                            <div class="table-responsive">
                                <table class="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th></th> <th></th>
                                            {
                                                props.list.map((element, index) => {
                                                    return (<th>{element[index]}</th>)
                                                })
                                            }
                                        </tr>
                                    </thead>
                                    <ListItemMulti list={props.list} resource={props.resource}></ListItemMulti>
                                </table>
                            </div>
                        </div>
                    </BlockContainer>
                </>
            )
        }
    } else { return null }
}
