import Nasa from "./hw1ProjCode"

function Hw1Function() {
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
        <>
            <html lang="en">
            <head>
                <meta charset="UTF-8"/>
                <title>Astronomical Object of the Day</title>
                <link rel="stylesheet" href="../../css/hw1.css"/>
                <script src="hw1ProjCode.js"></script>
            </head>

            <div>
            <body onload="done()">
            <div class="margins">
                <div>
                <h1>Astronomical Object of the Day</h1>
                <ul class="flex-container">
                <button>Navigation1(not implemented)</button>
                <button>Navigation2(not implemented)</button>
                <button>Navigation3(not implemented)</button>
                </ul>
            </div>
            <div>
                <h2>Astronomical Object</h2>
                    <Nasa />
                </div>
            </div>
            </body>
            <footer>
                <p>
                This site was created as a project for a Virginia Tech class by Timothy Kelley.
                </p>
                <p>
                All rights for these images belong to NASA.
                </p>
            </footer>
            </div>

            </html>
        </>
    )
}

export default Hw1Function