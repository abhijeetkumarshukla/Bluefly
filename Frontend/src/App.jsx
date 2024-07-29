import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '/src/pages/login/Login.jsx'
import SignUp from './pages/login/SignUp'
import LogOut from './pages/login/LogOut'
import PrivateRoutes from './Routers/PrivateRoutes'

function App() {
  

  return (
    <>
   

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/logout' element={ <PrivateRoutes><LogOut/> </PrivateRoutes> }/>
    {/* <Route path='/' element={<Home/>}/>
    <Route path='/' element={<Home/>}/> */}
    </Routes>
    </>
  )
}

export default App
