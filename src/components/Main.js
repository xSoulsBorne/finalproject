function MyMain() {
    var stylez = `
    .margins {
        background: #93E1D8;
        margin-left: 20%;
        margin-right: 20%
    }

    .navigation {
        background: teal;
        justify-content: space-between;
        justify-content: left;
    }

    .navItem {
        height: 50px;
        display: flex;
        justify-content: space-between;
        justify-content: center;
    }
    
    /**
    * This is used to set the background color for the whole page.
    */
    body {
        background: #22162B;
        
    }
    
    img {
        width: 300px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    
    h1 {
        color: #22162B;
        background: #DDFFF7;
        display: flex;
        justify-content: center;
    }
    
    h2 {
        color: #22162B;
        background: #DDFFF7;
        display: flex;
        justify-content: center;
    }
    
    /**
    * This is for the navigation tabs.
    */
    .flex-container {
        height: 50px;
        display: flex;
        justify-content: space-between;
        justify-content: center;
    }
    
    footer {
        background: #DDFFF7;
        color: #451F55;
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
    }
    
    p {
        display: flex;
        justify-content: center;
    }
    
    @media screen
      and (min-width: 601px) 
      and (max-width: 1000px) {
        .margins {
            margin-left: 15%;
            margin-right: 15%;
        }
    }
    
    @media screen
      and (min-width: 300px) 
      and (max-width: 600px) {
        .flex-container {
            flex-direction: column;
            height: 100px;
            width: 200px;
            justify-content: space-between;
          }
        .margins {
            margin-left: 10%;
            margin-right: 10%
        }
    }`

    var styles = document.createElement("style")
    styles.innerText = stylez
    document.head.appendChild(styles)

    return(
        <body>
            <div class="margins">
            <h1>
                Home - About me
            </h1>
            <p> 
                My name is Timothy Kelley. I attend Virginia Tech and am majoring in Computer Science.
                I enjoy playing video games and am trying to learn more about how to make them in my spare time.
                I have three cats and a dog and enjoy having them wake me up early each morning to feed them. 
            </p>

            <h3>
                Hobbies
            </h3>
            <p>
                As I said I enjoy playing video games, but I also really enjoy learning about game design
                and so I watch and read essays including critiques and anatomy series. All of this is just a 
                hobby, I intend to find work elsewhere with my degree. 
            </p>
            <p>
                I play a good range of games and try to look for games that try to do something more unique.
                Some of my favorite games include Inscryption, Portal 2, Shadow of the Colossus, From Software souls-likes,
                Hollow Knight, Doom: Eternal, Hunt: Showdown, Nier: Automata, and others. 
            </p>

            <h3>
                Picture
            </h3>
            <div>
                This is one of my cats; his picture serves as a project requirement.
                <img id="imgHolder" src={require("../images/Grayson.jpg")} alt="My cat named Grayson"></img>
            </div>
            </div>
        </body>
    )
}

export default MyMain