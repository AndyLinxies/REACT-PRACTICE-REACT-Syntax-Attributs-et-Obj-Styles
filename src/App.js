//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.

//Morning = red, Afternoon = green, Night = blue.


import React, { Component } from 'react';

class App extends React.Component {
  render() {
    {/*Mettre du JSX dans une variable JS */}

    let bonjour = (<h1 className="heading" style={{color:'red'}} >Good Morning</h1>);

    let bonAprem = (<h1 className="heading" style={{color:'green'}}>Good Afternoon</h1>);
    let bonsoir = (<h1 className="heading" style={{color:'blue'}} >Good Evening</h1>)
    let salutation
    let date = new Date();
    let hour = date.getHours();
    
    if (hour >0 && hour <12) {
      salutation = bonjour;
      
    } else if (hour >=12 && hour <18){
      salutation = bonAprem;
      
    }else{
      salutation = bonsoir;
    }
    return (
      <div>
        <h1>Il est {hour} heures</h1>
        {salutation}
      </div>
    );
  }
}
//Correction
// const date = new Date();
// const currentTime = date.getHours();

// let greeting;

// const customStyle = {
//   color: ""
// };

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

// class App extends React.Component {
//   render() {
//     <h1 className="heading" style={customStyle}>
//     {greeting}
//   </h1>,
//   document.getElementById("root")
//   }
// }
  
export default App;


