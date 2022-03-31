import React from "react"
import logo from "../pics/logo.png"

export default function Navbar() {
    return (
        <nav className="navbar--container">
            <img src={logo} alt="Logo" className="navbar--logo" />
            <h2 className="navbar--title">My Travel Journal .</h2>
        </nav>
    )
}