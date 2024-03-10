import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Products from './products'


function App() {

  

  return (
    <>
     <h1>Products Catalog using React </h1>
        <div className='display'>
     <Products></Products>
    </div>
      </>
  )
}

export default App
