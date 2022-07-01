import { useState, lazy } from 'react'
import { Routes, Route, Link} from 'react-router-dom'
import Home from '../pages/Home'
const Classify = lazy(() => import('../pages/Classify'))
const Shopcar = lazy(() => import('../pages/Shopcar'))
const Mine = lazy(() => import('../pages/Mine'))
const Search = lazy(() => import('../pages/GoSearch'))

const RoutesConfig = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" element={<Home />}></Route>
            <Route path="/classify" element={<Classify />}></Route>
            <Route path="/shopcar" element={<Shopcar />}></Route>
            <Route path="/mine" element={<Mine />}></Route>
            <Route path="/search" element={<Search />}></Route>
        </Routes>
    )
}

export default RoutesConfig