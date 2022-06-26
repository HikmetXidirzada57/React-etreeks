import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InstCourses from '../component/cousesByInstructor/InstCourses'
import Detail2 from '../component/Detailscomponents/section2/Detail2'
// import About from '../pages/About'
import Blog from '../pages/Blog'
import Cart from '../pages/Cart'
import Contact from '../pages/Contact'
import Detail from '../pages/Detail'
import EnLangCourse from '../pages/EnLangCourse'
import ExplorePage from '../pages/ExplorePage'
import FilterCourses from '../pages/FilterCourses'
import Home from '../pages/Home'
import Instructor from '../pages/Instructor'
import VideoList from '../pages/VideoList'

export const MyRoutes = () => {
  return (
    <Routes>
     <Route path='/' element={<Home/>}></Route>
     <Route path='/course/:id' element={<Detail/>}></Route>
     <Route path='/Instcourse/:id' element={<InstCourses/>}></Route>
     {/* <Route path='/CatCourse/:id' element={<InstCourses/>}></Route> */}
     <Route path='/blog' element={<Blog/>}></Route>
     <Route path='/instructors' element={<Instructor/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>
     <Route path='/video' element={<VideoList/>}></Route>
     <Route path='/search/:term' element={<FilterCourses/>}></Route>
     <Route path='/cart' element={<Cart/>}></Route>
     <Route path='/explore' element={<ExplorePage/>}></Route>
     <Route path='/categoriesDevelopment' element={<EnLangCourse/>}></Route>
    </Routes>
  )
}
export default MyRoutes
