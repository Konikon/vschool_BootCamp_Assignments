import axios from "axios";
const todosUrl = "https://api.vschool.io/mak/todo/";

export function loadTodo() {
    return (dispatch) => {
        axios.get(todosUrl).then((response) => {
            dispatch({
              type: "LOAD_TODO",
            todos: response.data.reverse()
          })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function addTodo(todo) {
    return (dispatch) => {
        axios.post(todosUrl, todo).then((response) => {
            dispatch({
              type: "ADD_TODO",
              todo
            })
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function deleteTodo(id) {
    return (dispatch) => {
        axios.delete(todosUrl + id).then((response) => {
            dispatch({
              type: "DELETE_TODO",
              id})
        }).catch((err) => {
            console.log(err);
        })
    }
}

export function editTodo(editedTodo, id) {
    return (dispatch) => {
        axios.put(todosUrl + id, editedTodo).then((response) => {
            dispatch({
              type: "EDIT_TODO",
              id,
            editedTodo: response.data})
        }).catch((err) => {
            console.log(err);
        })
    }
}
