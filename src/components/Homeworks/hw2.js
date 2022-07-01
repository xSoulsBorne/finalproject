import React from 'react';
function Hw2Function() { 
    var style = `
    .grid-container {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      gap: 40px 10px;
      padding-top: 20px;
    }
    
    .grid-item {
      display: grid;
      justify-content: center;
    }
    `
    var styles = document.createElement("style")
    styles.innerText = style
    document.head.appendChild(styles)
    
    // generates an array based on a beginning value and an ending
    function GenArray(beginning, end) {
      for (let i = 0; i <= (end - beginning); i++) {
        arr[i] = beginning + i
      }
    }
    
    // this takes an array of numbers and creates an array of the stylized numbers
    function NumberArray() {
      const styleArr = []
      for (let i = 0; i < arr.length; i++) {
        styleArr[i] = Number(arr[i])
      }
      return styleArr
    }
    
    // function for determining if a number is prime or not
    function isPrime(theNum) {
      if (theNum === 1) {
        return false
      }
      else if (theNum === 2) {
        return true
      }
      for (let i = 2; i < theNum; i++) {
        if (theNum % i === 0) {
          return false
        }
      }
      return true
    }
    
    // gets a number and turns it into a stylized number object based on even, odd, or prime
    function Number(numb) {
      if (numb % 2 === 0) {
        return React.createElement("grid-item", {style: {background: "green", textAlign: "center"}}, numb)
      }
      if (numb % 2 === 1) {
        if (isPrime(numb)) {
          return React.createElement("grid-item", {style: {background: "red", textAlign: "center", 
            border: "4px solid black"}}, numb)
        }
        else {
          return React.createElement("grid-item", {style: {background: "yellow", textAlign: "center"}}, numb)
        }
      }
    }
    
    // the actual parameters for beginning and end
    const theBeggin = 1
    const theEnd = 70
    
    // the two arrays that are worked with and changed
    const arr = [];
    GenArray(theBeggin, theEnd)
    const newArr = NumberArray()
    
    function MyApp(props) {
      return (
        <div class="grid-container">
          {props.numbers}
        </div>
      )
    }
    
    return(
        <MyApp numbers={newArr}/>
    );
}

export default Hw2Function