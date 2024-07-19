import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SignUp from './Pages/SignUp/SignUp'
import SignIn from './Pages/SignIn/SignIn'
import Index from './Pages/Index/Index'
import Income from './Pages/Income/Income'
import Expenses from './Pages/Expenses/Expenses'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Index/>}/>
        <Route path='SignIn' element={<SignIn/>}/>
        <Route path='SignUp' element={<SignUp/>}/>
        <Route path='Income' element={<Income/>}/>
        <Route path='Expenses' element={<Expenses/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
