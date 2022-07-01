function Hw4Function() {
    var theStyle = {
        background: "lightgray"
    }

    const newScript = document.createElement('script');
    newScript.setAttribute('src', 'hw4ProjCode.js');
    document.head.appendChild(newScript)

    return(
        <>
            <div class="margins">
            <h1>D3 Chart</h1>
            <body onload="callBuilds()">
                <div>
                    <svg id="d1" width="800" height="300" style={theStyle}></svg>
                </div>
            </body>
            </div>
        </>
    )
}

export default Hw4Function