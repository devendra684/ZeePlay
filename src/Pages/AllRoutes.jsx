import React from 'react'
import {Routes, Route} from "react-router-dom"
import Home from './Home'
import Login from './Login'
import Movies from './Movies'
import TVShows from "./TVShows";
import WebSeries from "./WebSeries";
import News from "./News";
import Payment from './Payment'
import Buy from './Buy'
import Register from './Register'

export default function AllRoutes() {
  return (
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/TVShows" element={<TVShows />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/WebSeries" element={<WebSeries />}></Route>
        <Route path="/News" element={<News />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/Buy" element={<Buy />}></Route>
        <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  )
}
