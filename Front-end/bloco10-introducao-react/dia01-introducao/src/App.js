import React, { Component } from 'react'
import './App.css';

class App extends Component {
  render (){

    const textJSX='Hello, JSX!'
      return (
          <>
            <h1>{ textJSX }</h1>
          </>
      )
  }
}

export default App;
