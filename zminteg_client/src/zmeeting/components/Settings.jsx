import React, { Component } from "react";
import { connect } from "react-redux";
class Settings extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
            <div className="Settings">Settings page</div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Settings);