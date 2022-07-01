import {useNavigate} from 'react-router-dom';

function ProjectsFunction() {
    const navigate = useNavigate();

    const navigateToHW1 = () => {
        navigate('/projects/1');
    }

    const navigateToHW2 = () => {
        navigate('/projects/2');
    }

    const navigateToHW3 = () => {
        navigate('/projects/3');
    }

    const navigateToHW4 = () => {
        navigate('/projects/4');
    }

    return(
    <>
        <body>
            <div class="margins">
            <h1>
                GUI Projects
            </h1>
            
            <h3>
                Nasa Project
            </h3>
            <p id="hw1" onClick={navigateToHW1}>
                This project was all about getting used to and learning HTML, CSS, and some JavaScript. 
                The JavaScript section had to deal with sending a request to an API by NASA. We process it 
                and display the information and image. Click this text to go to the project.
            </p>

            <h3>
                React Components
            </h3>
            <p id="hw2" onClick={navigateToHW2}>
                This project was about learning React and creating a grid layout to display eight blocks
                to a row filled with numbers. Odd numbers were yellow, even numbers were green, and prime
                numbers were red. Click this text to go to the project.
            </p>

            <h3>
                P5 Practice
            </h3>
            <p id="hw3" onClick={navigateToHW3}>
                In this project I learned about p5 and how to create a simple canvas with some circles to 
                draw on. We were allowed to do just about anything with p5 and I decided to create a canvas
                to draw on where you would click on different buttons to get different colors and draw. 
                Click this text to go to the project.
            </p>

            <h3>
                D3 Project
            </h3>
            <p id="hw4" onClick={navigateToHW4}>
                For this project we used a JSON file to get information from and build a graph out of that data 
                using D3. The assignment also had each circle give its data when it was hovered over. Click 
                this text to go to the project.
            </p>
            </div>
        </body>
    </>
    )
}

export default ProjectsFunction