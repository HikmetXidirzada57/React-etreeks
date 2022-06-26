import { BASE_URL } from "../../Link/config";
import { GET_CATEGORY_COURSES, GET_INSTRUCTOR_COURSES, GET_ONE_COURSE } from "../Constants/CursConstans";
import { GET_POP_COURSES } from "../Constants/CursConstans";


export const GetOneCourse=(id)=>async (dispatch,getState)=>{
    console.log("id-"+id)
    const data= await ((await fetch(`${BASE_URL}/api/Course/${id}`)).json())
    dispatch({
        type:GET_ONE_COURSE,
        payload:data
    })
}   

export const GetPopCourses=()=>async (dispatch,getState)=>{
    const data= await ((await fetch(`${BASE_URL}/api/Course/getPopulars`)).json())
    dispatch({
        type:GET_POP_COURSES,
        payload:data
    })
} 
export const GetPopCoursesByInstructor=(id)=>async (dispatch,getState)=>{
    const data= await ((await fetch(`${BASE_URL}/api/Course/getAllInclude/${id}`)).json())
    dispatch({
        type:GET_INSTRUCTOR_COURSES,
        payload:data
    })
}
// export const GetCoursesByCategory=(id)=>async (dispatch,getState)=>{
//     const data= await ((await fetch(`${BASE_URL}/api/Course/getAllInclude/${id}`)).json())
//     dispatch({
//         type:GET_CATEGORY_COURSES,
//         payload:data
//     })
// }

