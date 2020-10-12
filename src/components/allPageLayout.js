import React from "react"
import "./layouts.css"
import NavBar from "../components/navBar"
import FlagBarLayout from "../components/FlagBarLayout"

export default function AllPageLayout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            {/* <div class="container-fluid"> */}
            <div class="row">
                <div class="col-md-3 col-lg-2">
                    <FlagBarLayout></FlagBarLayout>
                </div>
                <div class="col-md-9 col-lg-10">
                    <div className="container my-3 p-3 bg-white rounded shadow-sm">
                        <br></br>
                        <br></br>
                        <div1>{children}</div1>
                    </div>
                </div>
            </div>

        </>
    )
}
