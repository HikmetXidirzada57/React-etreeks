import { GET_CATEGORY_COURSES, GET_INSTRUCTOR_COURSES, GET_ONE_COURSE } from "../Constants/CursConstans";
import { GET_POP_COURSES } from "../Constants/CursConstans";

export const getByIdCourse=(state={course:[]},action)=>{
    switch(action.type){
        case GET_ONE_COURSE:
            const item = action.payload;
            
            if(item){
                return {
                    ...state,
                    course:action.payload
                }
            }
            break
            default:{
                return state;
            }
    }
}
export const getPopCourse =(state={course:[]},action)=>{
    switch(action.type){
        case GET_POP_COURSES:
            const item = action.payload;
            
            if(item){
                return {
                    ...state,
                    course:action.payload
                }
            }
            break
            default:{
                return state;
            }
    }
}

export const getCourseByInstuctor=(state={course:[]},action)=>{
  switch (action.type) {
      case GET_INSTRUCTOR_COURSES:
          if(action.payload){
              return{
                  ...state,
                  course:action.payload
              }
          }
          break;
  
      default:
          return state;
  }


}
