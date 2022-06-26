import { GET_CATEGORIES_ } from "../Constants/CategoryConstant";



export const getCategories=(state={category:[]},action)=>{
    switch(action.type){
        case GET_CATEGORIES_:
            const item = action.payload;
            if(item){
                return {
                    ...state,
                    category:action.payload
                }
            }
            break
            default:{
                return state;
            }
    }
}