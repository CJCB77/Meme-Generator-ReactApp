import React from "react"
import "../style.css"
import { memeTemplates } from "../templates"



export default function Meme() {

    
    const [meme, setMeme] = React.useState("")
    
    function getMeme(){
        let memes =[]
        for(let meme of memeTemplates){
            memes.push(meme.url)
        }
        let index = Math.floor(Math.random() * memes.length)
        let randMeme = memes[index] 
        setMeme(randMeme)
    }

    return(
        <React.Fragment>
            <section className="generator">
                    <input type="text" placeholder="Shut up"/>
                    <input type="text" placeholder="and take my money"/>
                    <button type="" id="btn" onClick={getMeme}>Get meme</button>
            </section>
            <div className="meme-container">
                <img src={meme} alt="" className="template" id="template"/>
            </div>
        </React.Fragment>
    )
}
