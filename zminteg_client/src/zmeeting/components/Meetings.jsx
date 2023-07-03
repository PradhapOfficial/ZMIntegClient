import React, { Component } from "react";
import { connect } from "react-redux";
import { getListOfMeetings, getMeeting, PAGES, setActivePage } from "../actions/Meeting";
class Meetings extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        const { meeting, dispatch } = this.props
        console.log("Meeting list comp called");
        dispatch(getListOfMeetings());
    }
    
    getMeetingDetails = (meetingKey) => {
        const { meeting, dispatch } = this.props;
        dispatch(getMeeting(meetingKey));
        dispatch(setActivePage(PAGES.DETAILS));
    }

    meetingList = () => {
        const { meeting } = this.props;
        let meetingList = meeting.meetingList;
        return(
            <React.Fragment>
                {
                    meetingList.map((meeting, index)=>{
                        return(
                            <div className="meeting" key={index} onClick={()=>this.getMeetingDetails(meeting.meetingKey)}>
                                <div className="sessionInfoContainer">
                                    <div className="startDate">{meeting.sDate}</div>
                                    <div className="startTime">{meeting.sTime}</div>
                                </div>
                                <div className="topicContainer">{meeting.topic}</div>
                                <div className="profileInfoContainer">{meeting.presenterFullName}</div>
                                <div className="moreContainer">{"more"}</div>
                            </div>
                        )
                    })
                }
                
            </React.Fragment>
        );
    }
    render(){
        const { meeting } = this.props
        let meetingList = meeting.meetingList;
        if(meetingList == null){
            return null;
        }
        return(
            <div className="meetings">
                {this.meetingList()}
            </div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Meetings);