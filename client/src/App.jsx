import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Form from "./pages/Form.jsx"
import SubmitPage from './pages/SubmitPage.jsx'
import DashBoard from './pages/DashBoard.jsx'


const App = () => {
  return (
    <>
    <Routes>
      <Route path='/' element={<Form/>}/>
      <Route path='/submit' element={<SubmitPage/>}/>
      <Route path='/dashboard' element={<DashBoard/>}/>
    </Routes>
    </>
  )
}

export default App