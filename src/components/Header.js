import {NavLink} from "react-router-dom";

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

const activeStyle = {
    color: 'cyan',
    borderBottom: '1em, solid, black'
}

const unActiveStyle = {
    color: 'navy'
}

function Tab({name, link}) {

    return (
        <>
            <div class="margins">
            <ul class="navigation">
                <NavLink 
                    style={({isActive}) => isActive ? activeStyle : unActiveStyle}
                    to = {link} key={name}>
                    {name}
                </NavLink>
            </ul>
            </div>
        </>
    )
}

function Header() {
    const tabsValue = ["Home ", "Projects "]
    const tabsLink = ["/", "/projects"]
    return(
        <header>
            <nav>
                {tabsValue.map((element, idx) => <Tab name={element} link={tabsLink[idx]}/>)}
            </nav>
        </header>
    )
}

export default Header