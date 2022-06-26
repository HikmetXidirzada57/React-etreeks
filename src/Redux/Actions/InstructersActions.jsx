import { BASE_URL } from "../../Link/config";
import { GET_INSTRUCTORS } from "../Constants/InstructerConstant";


export const GetInstructors=()=>async (dispatch,getState)=>{
    const data= await ((await fetch(`${BASE_URL}/api/Instructotr/getInstructers`)).json())
    dispatch({
        type:GET_INSTRUCTORS,
        payload:data
    })
} 