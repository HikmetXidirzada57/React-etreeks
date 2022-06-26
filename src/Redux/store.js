import { CartReducer } from "./Reducers/CartReducesr";
import { getCategories } from "./Reducers/CategoriesReducer";
import { ChangeColorReducer } from "./Reducers/ColorReducer";
import {getByIdCourse, getCourseByCategory, getCourseByInstuctor, getPopCourse } from "./Reducers/CourseReducer"; 
import { darkModeReducer } from "./Reducers/DarkModeReducer";
import { getInstructors } from "./Reducers/InstructerReducer";


const { combineReducers, createStore, applyMiddleware } = require("redux");
const { composeWithDevTools } = require("redux-devtools-extension");
const { default: thunk } = require("redux-thunk");  
   

const cartItensFromLocalStorage=localStorage.getItem("cartItems")? JSON.parse(localStorage.getItem("cartItems")):[]

const reducer=combineReducers({
   coursesPopular:getPopCourse,
   courseById:getByIdCourse,
   allInstructers:getInstructors,
   instCourses:getCourseByInstuctor,
   categories:getCategories,
   colorReducer:ChangeColorReducer,
   darkMode:darkModeReducer,
   cart:CartReducer
})
const initialState={

    cart:{cartItems:cartItensFromLocalStorage}
}

const middleware=[thunk]
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;











