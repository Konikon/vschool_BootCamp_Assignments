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
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.postList= this.postList.bind(this);
    }

    componentDidMount(){
        axios.get("https://api.vschool.io/mak/todo").then(response=>{
          console.log(response.data);
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
                          listStuff: [response.data, ...prevState.listStuff]
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

    handleClick(id){
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
                    return(
                        <div key ={stuff.title + i}>
                              <TodoList listPopulate = {stuff}
                                            handleClick={this.handleClick}/>
                        </div>
                        )
                      }
                  )}
          </div>
            )
          }
}



export default ListComponent;
