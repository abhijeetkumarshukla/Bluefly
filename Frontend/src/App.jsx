import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Login from '/src/pages/login/Login.jsx'
import SignUp from './pages/login/SignUp'
import LogOut from './pages/login/LogOut'
import PrivateRoutes from './Routers/PrivateRoutes'
// import Left from './pages/ProductPages.jsx/Left.jsx'
import Cart from './pages/cart/Cart'
import ProductsPage from './pages/ProductPages/ProductsPage'
import SingleProduct from './pages/ProductPages/SingleProduct'

function App() {
  

  return (
    <>
   

    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/signup' element={<SignUp/>}/>
    <Route path='/logout' element={ <PrivateRoutes><LogOut/></PrivateRoutes> }/>
    
     <Route
        path="/cart"
        element={
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        }
      />
      <Route path='/products' element={<ProductsPage/>}/>  
      <Route path='/products/:id' element={<SingleProduct/>}/>  
    </Routes>
    </>
  )
}

export default App
