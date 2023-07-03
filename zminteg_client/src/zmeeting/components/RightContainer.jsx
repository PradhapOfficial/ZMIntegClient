import React, { Component } from "react";
import { connect } from "react-redux";
import { PAGES } from "../actions/Meeting";
import Home from "./Home";
import Meetings from "./Meetings";
import Settings from "./Settings";
import Users from "./Users";
import Details from "./Details";
import Edit from "./Edit";
class RightContainer extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
        const { meeting } = this.props;
        let activePage = <Home/>
        switch(meeting.activePage){
            case PAGES.MEETINGS:
                activePage =  <Meetings/>
                break;
            case PAGES.SETTINGS:
                activePage =  <Settings/>
                break;
            case PAGES.USERS:
                activePage =  <Users/>
                break;
            case PAGES.DETAILS:
                    activePage =  <Details/>
                    break;
            case PAGES.EDIT:
                activePage =  <Edit/>
                break;
        }
        return(
            <div className="rightContainer">
                <div className="mainContainer">
                    {activePage}
                </div>
            </div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(RightContainer);