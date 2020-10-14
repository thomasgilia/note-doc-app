import React from "react"
import { Link } from "gatsby"

export default function NavBar() {
    return (
        <>
            <nav class="nav bgCustomDark nav-fill">
                <Link to="/" className="nav-item nav-link" >Homepage</Link>
                <Link to="/clients" className="nav-item nav-link" >Clients</Link>
                <Link to="/login" className="nav-item nav-link" >Login</Link>
            </nav>
        </>
    )
}
