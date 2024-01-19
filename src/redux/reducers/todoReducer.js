import { Todo } from "../../components/Todo";
import { ADD_TODO, DELETE_TODO, EDIT_TODO ,GET_TODO} from "../constants/todotypes";

const initialState = {
  todos: [...Todo],
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODO:
      return{
      ...state,
      todos: [...state.todos, action.payload],
    }
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };

    case EDIT_TODO:
      return {
        ...state,
        todos: state.todos.map((item) => item.id === action.payload.id
            ?  action.payload 
            : item
        ),
    
      };

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((item) => item.id !== action.payload)
      };

    default:
      return state;
  }
};

export default todoReducer;