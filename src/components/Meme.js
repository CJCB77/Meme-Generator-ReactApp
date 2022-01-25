import React from "react"
import "../style.css"



export default function Meme() {

    
    const [meme, setMeme] = React.useState({
        topText:"",
        bottomText:"",
        randImg:"https://i.imgflip.com/3si4.jpg",
    })
    const [allMemes, setAllmemes] = React.useState([])

    React.useEffect(() => {

        async function getMemes() {
            const response = await fetch("https://api.imgflip.com/get_memes")
            const data = await response.json()
            setAllmemes(data.data.memes)
        }

        // fetch("https://api.imgflip.com/get_memes")
        //     .then(resp => resp.json())
        //     .then(data => {
        //         setAllmemes(data.data.memes)
        //     })
        getMemes()

        }, [])

    function getMeme(){
        let index = Math.floor(Math.random() * allMemes.length)
        let randMeme = allMemes[index].url 
        setMeme(prevMeme => ({
            ...prevMeme,
            randImg: randMeme
        }))
    }

    function handleChange(event) {
        const {name,value} = event.target
        setMeme((prevMeme) => ({
            ...prevMeme,
            [name] : value
        }))
    }

    return(
        <React.Fragment>
            <section className="generator">
                    <input type="text" placeholder="Shut up" name="topText" 
                        value={meme.topText} onChange={handleChange}/>
                    <input type="text" placeholder="and take my money" name="bottomText" 
                    value={meme.bottomText} onChange={handleChange}/>
                    <button type="" id="btn" onClick={getMeme}>Get meme</button>
            </section>
            <div className="meme-container">
                <img src={meme.randImg} alt="" className="template" id="template"/>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </React.Fragment>
    )
}
