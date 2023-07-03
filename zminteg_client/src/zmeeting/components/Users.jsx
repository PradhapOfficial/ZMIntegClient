import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
            <div className="Users">Users page</div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Users);