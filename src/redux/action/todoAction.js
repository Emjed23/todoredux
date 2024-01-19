import { ADD_TODO, GET_TODO } from "../constants/todotypes";
import { EDIT_TODO } from "../constants/todotypes";
import { DELETE_TODO } from "../constants/todotypes";



export const getTodo=(Task, description)=>{
  return {
    type: GET_TODO,
    payload: { Task, description }, 
}
}

export const addtodo=(Task, description)=>{
return {
    type: ADD_TODO,
    payload: { Task, description }, 
}
}
export const editTodo= (Task) => { 
  console.log(Task)
    return {   
      type:  EDIT_TODO,
      payload:  Task ,
     }
  }


export const deleteTodo = (Task, description)=> {
  return {
  type : DELETE_TODO,
  payload: { Task, description },
  }
}
