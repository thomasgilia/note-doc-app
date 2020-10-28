import React from "react"
import "./layouts.scss"
import NavBar from "./navBar"
import FlagBarLayout from "./flagBarLayout"
import Helmet from "react-helmet"

export default function AllPageLayout(props) {
    // console.log(props)
    return (
        <>
        <Helmet>
            <title>
                Client-Note App
            </title>
            <meta name="description" content="Keep your company's client notes organized and easy to access"/>
        </Helmet>
            {/* <NavBar></NavBar> */}
            {/* <div class="container-fluid"> */}
            <div class="row nav-text bgCustomDark heading">
                <h1 class="nav-text">Client-Note App</h1>
            </div>
            <div class="row nav-text bgCustomDark heading">
                <p class="nav-text">Keep track of important details for clients and their projects</p>
            </div>
            
            <NavBar></NavBar>
            <div class="row">
                <div class="col-md-3 col-lg-2">
                    <FlagBarLayout></FlagBarLayout>
                </div>
                <div class="col-md-8 col-lg-9">
                    <br></br>
                    {/* <BlockContainer>{children}</BlockContainer>      what to put here if we want to reserve space
                    and control overall spacing of the main data area but dont know what mini-layout we need yet? */}
                    {props.children}
                </div>
                <div class="col-md-1 col-lg-1">
                </div>
            </div>
        </>
    )
}
