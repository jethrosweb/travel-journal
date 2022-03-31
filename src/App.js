import React from "react"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
    return (
    <div className="app--container">
        <Navbar />
        <Cards />
    </div>
    )
}