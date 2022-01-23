import React from "react"
import ReactDOM from "react-dom"
import "./style.css"
import Navbar from "./components/Navbar"
import Meme from "./components/Meme"
import Container from "./components/Container"



function App() {
    return (
        <React.Fragment>
            <Navbar />
            <Meme />
            <Container />
        </React.Fragment>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))