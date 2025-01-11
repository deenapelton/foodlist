import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from "./layout"
import Grocerylist from './grocerylist'
import Foodonstock from './foodonstock'
import Menu from './menu'

const router = createBrowserRouter([
  {
    path: "/foodlist",
    //this is the part that stays the same between pages
    element: <Layout key="layout"/>,
      //Now the parts that change
    children: [
      {
        path: "/foodlist/grocerylist",
        element: <Grocerylist key="grocerylist"/> 
        
      },
      {
        path: "/foodlist/foodonstock",
        element: <Foodonstock key="foodonstock"/>
      },
      {
        path: "/foodlist/menu",
        element: <Menu key="menu"/>
      }
    ]
  }
])


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
