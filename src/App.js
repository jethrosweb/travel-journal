import React from "react"
import Cards from "./components/Cards"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
    const cardElements = data.map(item => {
        return (
            <Cards 
                key = {item.id}
                item = {item}
            />
        )
    })
    return (
    <div className="app--container">
        <Navbar />
        <div className="cards--container">
            {cardElements}
        </div>
    </div>
    )
}