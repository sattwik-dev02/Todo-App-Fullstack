import React from 'react'
import Home from './pages/Home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateModal from './components/UpdateModal'

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/update/:id' element={<UpdateModal />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App