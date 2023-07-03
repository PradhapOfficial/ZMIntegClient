import React, { Component } from "react";
import { connect } from "react-redux";
import { cancelMeeting } from "../actions/Meeting";
class Details extends Component{
    constructor(props){
        super(props);
    }

    startMeeting = (startLink) => {
        window.open(startLink);
    }

    cancelMeeting = (meetingKey) => {
        const { dispatch } = this.props;
        dispatch(cancelMeeting(meetingKey));
    }

    meetingDetailsHeader = () => {
        const { meeting } = this.props;
        let meetingDetails = meeting.meetingDetails;
        let btnEle = (meetingDetails.isPastSession)? 
                        (<button className="repeatMeeting">Repeat Meeting</button>)
                        : 
                        (
                            <React.Fragment>
                                <button className="startMeeting" onClick={()=>this.startMeeting(meetingDetails.startLink)}>Start Meeting</button>
                                <button className="Edit" onClick={()=>this.startMeeting(meetingDetails.startLink)}>Edit</button>
                            </React.Fragment>
                        );
        return(
            <div className="detailsHeader">
                {btnEle}
                <button className="cancel" onClick={()=>this.cancelMeeting(meetingDetails.meetingKey)}>Cancel</button>
            </div>
        );
    }

    meetingDetails = () => {
        const { meeting } = this.props;
        let meetingDetails = meeting.meetingDetails;
        return(
            <div className="details">
                <div className="timeInfo">
                    <div className="startTime">{meetingDetails.startTime} </div>
                    <div className="timeZone">{meetingDetails.timeZoneOriginal} </div>
                </div>
                <div className="hostInfoContainer">
                    <div className="hostInfo">
                        <div className="host">Host</div>
                        <div className="department">Department</div>
                    </div>
                    <div className="hostInfo">
                        <div className="host">{meetingDetails.presenterEmail}</div>
                        <div className="department">{meetingDetails.departmentName}</div>
                    </div>
                </div>
                <div className="inviteInfo">
                    <div className="meetingKey">{'Meeting ID: ' + meetingDetails.meetingKey}</div>
                    <div className="password">{'Password: ' + meetingDetails.pwd}</div>
                </div>
                <div className="remainderInfo">Remainder info</div>
            </div>
        );
    }
    render(){
        const { meeting } = this.props;
        if(meeting.meetingDetails === null) {
            return null;
        }
        let meetingDetail = meeting.meetingDetails;
        return(
           <React.Fragment>
                {this.meetingDetailsHeader()}
                {this.meetingDetails()}
            </React.Fragment>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Details);