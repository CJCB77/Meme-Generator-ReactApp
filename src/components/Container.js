import React from "react"
import "../style.css"
import { memeTemplates } from "../templates"

export default function Container(){
    let memes =[]
    for(let meme of memeTemplates){
        memes.push(meme.url)
    }
    let index = Math.floor(Math.random() * memes.length)
    let randMeme = memes[index] 
    return(
        <div className="meme-container">
            <img src={randMeme} alt="" className="template"/>
        </div>
    )
}