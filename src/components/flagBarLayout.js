import React from "react"
import { Link } from "gatsby"

export default function FlagBarLayout() {
    return (
        <>
            <nav id="sidebarMenu" class="flex-column mb-2 d-md-block sidebar">
                <div class="sidebar-sticky">
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 1</Link>
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 2</Link>
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 3</Link>
                    <Link to="/flag" className="nav-item nav-link" >Flag Attribute 4</Link>
                </div>
            </nav>
        </>
    )
}