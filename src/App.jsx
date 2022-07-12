import React from 'react'
import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
//importing colorblock.js
import ColorBlock from './colorblock'
import ColorForm from './colorform'

function App(){
  let [colors, setColors] = useState ([
      'violet', 'blue',
      'lightblue', 'green',
      'greenyellow', 'yellow',
      'orange', 'red'
  ])
  
  let colorMap = colors.map((color, i) => {
      return (
        <>
          <ColorBlock color={color}/>
          </>
      )
  })
const addColor =(newColor) =>{
  setColors([...colors,newColor])
}
  return (
      <div className="App">
          {colorMap}
          <ColorForm addColor={addColor}/>
      </div>
  )
}


export default App;
