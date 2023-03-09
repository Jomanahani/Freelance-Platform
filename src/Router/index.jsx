import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'

export const PATHS={
    LOGIN:'/',
    SIGNUP:'/signup'
}
export default function Router() {
  return (
   <Routes>
    <Route index path={PATHS.LOGIN} element={<Login/>}/>
    <Route  path={PATHS.SIGNUP} element={<Signup/>}/>
   </Routes>
  )
}
