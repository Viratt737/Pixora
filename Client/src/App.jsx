import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import BuyCreadit from './pages/BuyCreadit'
import Result from './pages/Result'
const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/result' element={<Result/>}/>
        <Route path='/buycreadits' element={<BuyCreadit/>}/>
        
      </Routes>
      
    </div>
  )
}

export default App