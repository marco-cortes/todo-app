import { types } from "../type/types";

const todoList = [];
const todoActive = {
    text: "",
    checked: false
}

const initialState = {
    todoList: todoList,
    todoActive: todoActive
}

export const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.saveTodo:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case types.selectTodo:
            return {
                ...state,
                todoActive: state.todoList.find(todo => todo.id === action.payload)
            }
        case types.editTodo:
            return {
                ...state,
                todoList: state.todoList.map(todo => todo.id === action.payload.id ? action.payload : todo),
                todoActive
            }
        case types.deleteTodo:
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== action.payload)
            }
        case types.deleteChecked:
            return {
                ...state,
                todoList: state.todoList.filter(todo => !todo.checked)
            }
        case types.setList:
            return {
                ...state,
                todoList: action.payload.todos
            }
        case types.reset: 
            return initialState;
        default:
            return state;
    }
}