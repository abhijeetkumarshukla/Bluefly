import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '/src/pages/login/Login.jsx'
import SignUp from './pages/login/SignUp'

function App() {
  

  return (
    <>
   

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    {/* <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/> */}
    </Routes>
    </>
  )
}

export default App
