import React from "react";
import {connect} from "react-redux";
import {bounties} from "../redux/actions/";
import BountyComponent from "./bounty/Component";


class BountiesComponent extends React.Component{
  constructor(){
    super();
    this.genList = this.genList.bind(this);
  }

    componentDidMount(){
      this.props.loadBounty()
    }

    genList(){
        return this.props.bounties.map((bounty,index)=>{
          return(
            <BountyComponent
                key = {bounty.title + index}
                bounty = {bounty}
                index ={index} />
          )
        })
    }


    render(){
        return (
        <div>
          {this.genList()}
        </div>
      )
    }

  }

    const mapStateToProps = (state)=>{
        return {
            bounties: state.bounties
        }
    }

export default connect(mapStateToProps, bounties)(BountiesComponent);
