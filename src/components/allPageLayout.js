import React from "react"
import "./layouts.css"
import NavBar from "../components/navBar"

export default function AllPageLayout({ children }) {
    return (
        <>
            <NavBar></NavBar>
            <div className="container my-3 p-3 bg-white rounded shadow-sm">
                <br></br>
                <br></br> 
                <div1>{children}</div1>
            </div>

        </>
    )
}
