import { useState } from 'react'
import './App.css'

import { Route, Routes } from 'react-router-dom'
import ItemDetails from './Pages/ItemDetails'
import Home from './Pages/Home'


function App() {
  const [post, setPosts] = useState([])
     return (
      <Routes>
        <Route path= '/' element = {<Home/>}></Route>
        <Route path= '/products/: id' element = {<ItemDetails/>}></Route>
      </Routes>

     
     )
  
  
}

export default App
