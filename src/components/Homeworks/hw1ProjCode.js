import React, {useState} from 'react'

function Nasa() {
    const[desc, setDesc] = useState()
    const[url, setUrl] = useState()
    const getImage = () => {
        const api = "LhhXjcMBYsXc5CrmHmV0cLZFMnSIEW6HgMl0Ly0X"
        const url = `https://api.nasa.gov/planetary/apod?api_key=${api}`
        fetch(url).then(response => response.json())
        .then(data => {
            setDesc(data.explanation)
            setUrl(data.url)
        })
    }
    return(
        <div>
            <button onClick={getImage}>Get Image</button>
            <img src={url} alt={'Nasa apod api'}/>
            <section>
                <p>{desc}</p>
            </section>
        </div>
    )
}

export default Nasa