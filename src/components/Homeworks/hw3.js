function Hw3Function() {

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

  const newScript = document.createElement('script');
  newScript.setAttribute('src', 'hw3ProjCode.js');
  document.head.appendChild(newScript)

  const script = document.createElement('script');
  script.setAttribute('src', 'p5.js');
  document.head.appendChild(script)

  return(
    <>
    <body>
      <div class="margins">
        <script src="p5.js"></script>
        <h1>Drawing Canvas</h1>
        <div>
          <ul class="flex-container">
          <button onclick="changeRed()">Color in Red!</button>
          <button onclick="changeBlue()">Color in Blue!</button>
          <button onclick="changeYellow()">Color in Green!</button>
          </ul>
        </div>
        <div>
          <ul class="flex-container">
          <button onclick="changeSize20()">Size: 20px</button>
          <button onclick="changeSize40()">Size: 40px</button>
          <button onclick="changeSize80()">Size: 80px</button>
          </ul>
        </div>
        <div class="canvas">
          <div id="myCanvas">
          </div>
        </div>
      </div>
    </body>
    </>
  )
}

export default Hw3Function

