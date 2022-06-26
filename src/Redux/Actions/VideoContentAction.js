import { GET_VIDEO_LESSON } from "../Constants/LessonVideosConstant"
import { BASE_URL } from "../../Link/config"



export const GetVideos=()=>async (dispatch,getState)=>{
    const data= await ((await fetch(`${BASE_URL}/api/LessonVideo/`)).json())
    dispatch({
        type:GET_VIDEO_LESSON,
        payload:data
    })
} 