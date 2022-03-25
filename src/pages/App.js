import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';


const App = () => {
  useEffect(() => {
   
  }, [])
  
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <HomePage/> }/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;