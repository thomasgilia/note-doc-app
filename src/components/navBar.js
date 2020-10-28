import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
    return (
        <>
            <div className="justify-content-start">
                <nav class="nav bgCustomDark nav-fill">
                    <Link to="/" className="nav-item nav-link" >Home</Link>
                    <br></br>
                </nav>
            </div>
        </>
    )
}
