import React from "react";
import ListRenderer from "./ListRenderer";
import axios from "axios";

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
          this.setState ({
                listStuff: response.data
                })
            })
        }

    postList(event){
        axios.post('https://api.vschool.io/mak/todo/${this.state.newList}').then(
          response=>{
              this.state(prevState=>{
                    return{
                        listStuff: [...prevState.listStuff, response.data]
                    }
              })
          })

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
                    return dItem._id != id;
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
                valueTitle={this.state.newList.title}
                valueDescription={this.state.newList.description}
                handleChange={this.handleChange}
                postList={this.postList}

               </div>
                this.state.listStuff.map((stuff, i)=>{
                    return(
                      <div key ={stuff.title + i}>
                      <ListRenderer listPopulate = {stuff}
                                    handleClick={this.handleClick}/>
                      </div>)
                )}
          </div>
            )
          }
}



export default ListComponent;
