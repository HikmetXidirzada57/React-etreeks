import { BASE_URL } from "../../Link/config";
import { GET_CATEGORIES_ } from "../Constants/CategoryConstant";

export const GetCategories=()=>async (dispatch,getState)=>{
    const data= await ((await fetch(`${BASE_URL}/api/Category/getCategories`)).json())
    dispatch({
        type:GET_CATEGORIES_,
        payload:data
    })
}  