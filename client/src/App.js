import React, {useEffect, useState} from 'react'
import Content from './components/Content'
import Header from './components/Header'


function App() {
  return (
    <div className="bg-dark">
      <Header/>
      <Content/>
    </div>
  )
}

export default App