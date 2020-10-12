import React from "react"

export default function NavBar() {
    return (
        <>
            {/* <nav class="navbar navbar-dark bg-dark"> */}
            <ul class="nav bgCustomDark nav-fill">
            {/* <ul class="navbar nav nav-fill navbar-dark bg-dark"> */}
                <li class="nav-item">
                    <a class="nav-link" href="#">Homepage</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Login</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Something</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            {/* </nav> */}
        </>
    )
}
