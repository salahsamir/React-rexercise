import React from 'react'
import { About } from '../About/About'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from '../Home/Home'
import Contact from '../Contact/Contact'
import Location from '../Location/Location'
import Layout from '../layout/Layout'
import Portifolio from '../portfolioComponant/PORTFOLIO/Portifolio'
import Api from '../Apisection/Api'
let route=createBrowserRouter([
  {path:'/',element:<Layout/> ,children:[
    {index:true ,element:<Home/>},
    {path:'portfolio' ,element:<Portifolio/>},

    {path:'about' ,element:<About/>},
    {path:'api' ,element:<Api/>},
    {path:'contact' ,element:<Contact/>},
    {path:'location' ,element:<Location/>},

  ]
}





])
export default function App() {

  return (
   <>
<RouterProvider router={route}/>
   {/* <Home/>
   <Portifolio/>
   <About/>
   <Contact/>
   <Location/> */}
  
   
   </>
  )
}
