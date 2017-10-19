import React from "react";
import TodoList from "./TodoList";
import axios from "axios";
import TodoForm from "./TodoForm";



class ListComponent extends React.Component{
    constructor() {
        super();
        this.state = {
          listStuff: [],
          newList: {
              title: "",
              description: ""
          }
        }
        this.handleDelete = this.handleDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postList = this.postList.bind(this);
        this.editList = this.editList.bind(this);
    }

    componentDidMount(){
        axios.get("https://api.vschool.io/mak/todo").then(response=>{
          this.setState({
                listStuff: response.data.reverse()
          })
        })
    }

    postList(event){
      event.preventDefault();
      if (this.state.newList.title === ""){
          alert("you have to provide a title to your todo")
          } else {
          axios.post('https://api.vschool.io/mak/todo/', this.state.newList).then(
            response=>{
                this.setState(prevState=>{
                      return{
                          listStuff: [response.data, ...prevState.listStuff],
                          newList: {
                            title: "",
                            description: ""
                          }
                      }
                })
            })
        }
    }

    handleChange(event){
        event.persist();
        this.setState (prevState=>{
            return{
              newList: {
                ...prevState.newList,
                [event.target.name]: event.target.value
              }
          }
        });
    }

  handleDelete(id){
        axios.delete(`https://api.vschool.io/mak/todo/${id}`).then(response=>
            this.setState ((prevState) =>{
                let deletedItemArray = prevState.listStuff.filter((dItem)=>{
                    return dItem._id !== id;
                  })
                      return {
                        listStuff: deletedItemArray
                      }
                    })
                )
            }

  editList(editedTodo, id){
      axios.put(`https://api.vschool.io/mak/todo/${id}`, editedTodo)
      .then(response=>{
          let newEdit = response.data;
          this.setState(prevState=>{
              const newList = prevState.listStuff.map(stuff=>{
                    if(stuff._id === id){
                        return newEdit
                    } else {
                        return stuff;
                    }
              })
              return {
                  ...prevState,
                  listStuff: newList
              }
          })
      })
    }

  render(){
    return(
        <div> 
            <div>
              <TodoForm
                  valueTitle={this.state.newList.title}
                  valueDescription={this.state.newList.description}
                  handleChange={this.handleChange}
                  postList={this.postList}
                />

             </div>
              {this.state.listStuff.map((stuff, i)=>{
                console.log(stuff);
                  return(
                      <div key ={stuff.title + i}>
                            <TodoList listPopulate = {stuff}
                                      handleDelete={this.handleDelete}
                                      />
                      </div>
                      )
                    }
                )}
        </div>
          )
        }
}



export default ListComponent;
