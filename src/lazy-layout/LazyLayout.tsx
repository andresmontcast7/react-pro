import React from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import LazyPage from '../lazy-load/pages/LazyPage';
import LazyPage2 from '../lazy-load/pages/LazyPage2';
import LazyPage3 from '../lazy-load/pages/LazyPage3';
import { routesLazy } from './routesLazy';


export const LazyLayout = () => {

  
  return (
<>
    <h1>lazy layoute</h1>
    <ul>
      {
       routesLazy.map(({to,name}) => {
        return(
         <li key={name}><NavLink to={to}>{name}</NavLink></li>
        )
       })
      }
      
      
    </ul>
    <Routes>
    {
      routesLazy.map(({path, Component})=> {
        return (
         <Route key={path} path={path} element={<Component/>}></Route>
        )
      })
    }
</Routes>

    
    </>
  )
}

export default LazyLayout;