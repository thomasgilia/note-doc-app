import React, { useEffect, useState } from "react"
import "./layouts.scss"
import NavBar from "./navBar"
import FlagBarLayout from "./flagBarLayout"
import Helmet from "react-helmet"

export default function AllPageLayout(props) {
    // console.log(window)
    const [thisWindow, setThisWindow] = useState(null)
    useEffect(() => {
        if (typeof window !== 'undefined') {
            return setThisWindow(window)
        }
    }, [])

    // if (typeOf window === 'undefined') {
    //     thisWindow = null
    //     console.log("window does not exist")
    // }else {
    //     thisWindow = window
    // }
    return (
        <>
            <Helmet>
                <title>
                    Client-Note App
                </title>
                <meta name="description" content="Keep your company's client notes organized and easy to access" />
                <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
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
                    {(thisWindow !== null) && <FlagBarLayout location={thisWindow.location}></FlagBarLayout>}
                    {(thisWindow === null) && <FlagBarLayout location={null}></FlagBarLayout>}
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
