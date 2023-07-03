import React, { Component } from "react";
import { connect } from "react-redux";
class Home extends Component{
    constructor(props){
        super(props);
    }

    meetingBox = () => {
        return(
            <div className="meetingBox">
                <div className="meetingLbl">Meeting</div>
                <div className="meetingDesc">Create a meeting, invite participants, and interact through screen sharing and audio/video conferencing.</div>
                <div className="scheduleContainer">
                    <div className="scheduleBtn">Schedule</div>
                </div>
            </div>
        );
    } 

    render(){
       return(
            <div className="home">
                {this.meetingBox()}
            </div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Home);