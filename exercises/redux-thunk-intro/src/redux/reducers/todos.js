let defaultTodos = []
export const todos = function(prevTodos = defaultTodos, action){
    let newTodos = [...prevTodos];
    switch (action.type){
      case "LOAD_TODO":
          return action.todos;

      case "ADD_TODO":
          newTodos.unshift(action.todo);
          return newTodos;

      case "DELETE_TODO":
          return newTodos.filter((todo)=>{
            return action.id !== todo._id;
          });

      case "EDIT_TODO":
          return newTodos.map((todo)=>{
              if(action.id === todo._id){
                  return action.editedTodo;
            } else {
                  return todo;
            }
          });

      default:
        return prevTodos;
    }
}
