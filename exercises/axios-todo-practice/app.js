//var axios = require("axios"); use requre only if you are running the code in node not in website

axios.post("https://api.vschool.io/mak/todo").then(function(response){
 let todolist = document.getElementById("todoInput");
    for (let i = 0; i < response.data.length; i++){
        todolist.innerHTML += `<h2>${response.data[i].title}</h2>
<p>${response.data[i].description}</p>`
    }
});

//document.getElementById("todoInput").addEventListener()


//user input should send the input text to v-school api

//It should be added as new POST in the api todo

//IT should also add the new input under the  list

//