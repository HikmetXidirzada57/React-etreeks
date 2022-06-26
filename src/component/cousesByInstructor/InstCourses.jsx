import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { useParams } from 'react-router-dom'
import { GetPopCoursesByInstructor } from '../../Redux/Actions/CourseActions'
const InstCourses = () => {
   const {id}=useParams();
    const coursesInst=useSelector(state=>state.instCourses.course)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(GetPopCoursesByInstructor(id))
    },[dispatch,id])
    console.log(coursesInst)
   
  return (
    <div className="container">
        {coursesInst?.map(instCourse=>{
            return(
                <div className="col-lg-4">
                <img src={instCourse.photoUrl} alt=""/>
                <h4>{instCourse.name}</h4>
                <p>{instCourse.price}</p>
              </div>
            )
        })}
  
  </div>
  )
}

export default InstCourses