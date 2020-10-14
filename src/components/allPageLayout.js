import React from "react"
import "./layouts.css"
import NavBar from "../components/navBar"
import FlagBarLayout from "../components/FlagBarLayout"
import BlockContainer from "../components/blockContainer"

export default function AllPageLayout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            {/* <div class="container-fluid"> */}
            <div class="row">
                <div class="col-md-3 col-lg-2">
                    <FlagBarLayout></FlagBarLayout>
                </div>
                <div class="col-md-8 col-lg-9">
                    <br></br>
                    <br></br>
                    {/* <BlockContainer>{children}</BlockContainer>      what to put here if we want to reserve space
                    and control overall spacing of the main data area but dont know what mini-layout we need yet? */}
                    {children}
                </div>
                <div class="col-md-1 col-lg-1">
                </div>
            </div>
        </>
    )
}
