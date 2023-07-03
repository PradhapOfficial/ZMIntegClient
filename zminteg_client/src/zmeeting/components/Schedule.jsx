import React, { Component } from "react";
import { connect } from "react-redux";
class Schedule extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
            <div className="schedule">Schedule page</div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Schedule);