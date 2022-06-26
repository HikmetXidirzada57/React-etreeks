import { GET_INSTRUCTORS } from "../Constants/InstructerConstant";


export const getInstructors=(state={instructors:[]},action)=>{
    switch(action.type){
        case GET_INSTRUCTORS:
            const item = action.payload;
            
            if(item){
                return {
                    ...state,
                    instructors:action.payload
                }
            }
            break
            default:{
                return state;
            }
    }
}