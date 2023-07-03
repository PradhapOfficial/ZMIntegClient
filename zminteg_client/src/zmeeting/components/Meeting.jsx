import React, { Component } from "react";
import {getListOfMeetings} from '../actions/Meeting'
import { connect } from "react-redux"
import LeftContainer from "./LeftContainer"
import RightContainer from "./RightContainer"

class Meeting extends Component {
    constructor(props){
        super(props);
    }
   
    leftContainer = ()=>{
        return(
            <LeftContainer/>
        );
    }

    rightContainer = ()=>{
        return(
            <RightContainer/>
        );
    }

    render(){
        const {meeting} = this.props;
        if(meeting.errorResponse){
            return null;
        }
        return(
            <div className="container">
                {this.leftContainer()}
                {this.rightContainer()}
            </div>
        );
    }
}
export default connect((store)=>{
    return{
        meeting: store.meeting
    }
})(Meeting);