document.getElementById("add-todo").addEventListener("click", function(){
//    get the text from the input box
    var newTodo = document.getElementById("new-todo-text");
    
    
//    add a new list item 
//    var newLi = document.createElement("li")
//    document.getElementById("todo-List").appendChild(newLi);
//    var todoTextNode = document.createTextNode(newTodoText);
//    newLi.appendChild(todoTextNode);
//    
    
//    easier way
    var list = document.getElementById("todo-list");
    list.innerHTML += "<li>" + newTodo.value + "</li>";
    
    newTodo.value = "";
//    with the text inside this item
});