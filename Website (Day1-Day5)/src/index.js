//index.js
// importing the react and react-dom package

import React from 'react'
import ReactDOM from 'react-dom'

// importing the image
import frontend_image from './images/frontend_technologies.png'

const headerStyles = {
  backgroundColor: '#61DBFB',
  fontFamily: 'Helvetica Neue',
  padding: 25,
  lineHeight: 1.5,
}


const header = (
  <header style={headerStyles}>
  <div className='header-wrapper'>
    <h1>Welcome to 30 Days Of React</h1>
    <h2>Getting Started React</h2>
    <h3>JavaScript Library</h3>
    <p>Sanjaya J Shetty</p>
    <small>Mar 2, 2023</small>
    </div>
  </header>
)

const mainStyles = {
  backgroundColor: '#F3F0F5',
}

// using function to render
const FrontEnd = () => (
  <div>
    <img style={{display:"block", marginLeft: "auto", marginRight: "auto", width: 700, height: 200}} 
    src = {frontend_image} alt = "frontend tech"/>
  </div>
)

const main = (
  <main>
    <div style={mainStyles}>
    <p>Prerequisite to get started react.js:</p>
    <ul>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
    </ul>
    < FrontEnd /> 
    </div>
  </main>
)

// when using functions we wrap the functions inside < functionName />

const footerStyles = {
  backgroundColor: '#61DBFB'
}



const footer = (
  <footer style={footerStyles}>
    <p style={{textAlign:'center'}}> Copyright 2023</p>
  </footer>
)

const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)

// to pass multiple elements to react DOM use the cont app chunck and then pass the same to reactDOM.render() 


const rootElement = document.getElementById('root')  // passes the JSX to root elementID

ReactDOM.render(app, rootElement)
// or we can also use ReactDOM.render([header, main, footer], rootElement)





