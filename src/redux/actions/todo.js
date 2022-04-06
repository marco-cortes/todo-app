import { myfetch } from "../../helpers/fetch";
import { types } from "../type/types";


export const fetchSaveTodo = (todo) => {
    return async (dispatch) => {
        try {
            const resp = await myfetch("todo/save", todo, "POST");
            const body = await resp.json();
            if(todo.id){
                dispatch(updateTodo(body));
            } else {
                dispatch(saveTodo(body));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchDeleteTodo = (id) => {
    return async (dispatch) => {
        try {
            const resp = await myfetch(`todo/delete/${id}`, null, "DELETE");
            const body = await resp.json();
            console.log(body);
            if (body === true) {
                dispatch(deleteTodo(id));
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchDeleteChecked = () => {
    return async (dispatch) => {
        try {
            const resp = await myfetch("todo/delete", null, "DELETE");
            const body = await resp.json();
            console.log(body);
            if (body === true) {
                dispatch(deleteChecked());
            }
        } catch (error) {
            console.log(error);
        }
    }
}

export const fetchTodoList = () => {
    return async (dispatch) => {
        try {
            const resp = await myfetch("todo/", null);
            const body = await resp.json();
            dispatch(setTodoList(body));
        } catch (e) {
            console.log(e);
        }
    }
}
//export const

/*export const startSelectTodo = (id) => {
    return async (dispatch, getState) => {
        try {

        }
    }
}*/

export const setTodoList = (todos) => ({
    type: types.setList,
    payload: {
        todos
    }
});

export const selectTodo = (id) => ({
    type: types.selectTodo,
    payload: id
});

export const saveTodo = (todo) => ({
    type: types.saveTodo,
    payload: todo
});

export const updateTodo = (todo) => ({
    type: types.editTodo,
    payload: todo
});

export const deleteTodo = (id) => ({
    type: types.deleteTodo,
    payload: id
});

export const deleteChecked = () => ({
    type: types.deleteChecked
});