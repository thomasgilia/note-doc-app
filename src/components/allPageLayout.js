import React from "react"
import "./layouts.scss"
import NavBar from "./navBar"
import FlagBarLayout from "./flagBarLayout"
import Helmet from "react-helmet"

export default function AllPageLayout(props) {
    return (
        <>
        <Helmet>
            <title>
                Client-Note App
            </title>
            <meta name="description" content="Keep your company's client notes organized and easy to access"/>
        </Helmet>
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
                    {props.children}
                </div>
                <div class="col-md-1 col-lg-1">
                </div>
            </div>
        </>
    )
}
