import React, { useEffect } from 'react'
import { BrowserRouter , Route, Routes } from 'react-router-dom';

import HomePage from './HomePage';
import NotFoundPage from './NotFoundPage';

const App = () => {
  useEffect(() => {
   
  }, [])
  
  return (
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={ <HomePage/> }/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App;