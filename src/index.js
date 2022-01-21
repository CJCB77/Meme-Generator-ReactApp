import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Navbar from "./components/Navbar"

function App() {
    return (
        <Navbar />
    )
}

ReactDOM.render(<App />, document.getElementById("root"))