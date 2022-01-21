import React from "react"
import ReactDOM from "react-dom"
import "../style.css"
import logo from "../imgs/logo.svg"

export default function Navbar(){
    return(
        <nav>
            <img src={logo} alt="" className="logo"/>
            <h1>Meme generator</h1>
        </nav>

    )
}