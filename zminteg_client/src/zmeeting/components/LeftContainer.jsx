import React, { Component } from "react";
import { connect } from "react-redux";
import { MEETING_TABS, setActiveTab, PAGES } from "../actions/Meeting";
class LeftContainer extends Component{
    constructor(props){
        super(props);
    }
    
    setActiveTab = (tab)=>{
        const {dispatch, meeting} = this.props;
        if(meeting.activeTab != tab){
            console.log("current tab : "+tab);
            dispatch(setActiveTab(tab));
        }
     }

    render(){
        const { meeting } = this.props;
        let tabs = MEETING_TABS.map((tab, index)=>{
                return(
                <li key = {index} className={"listEle " + ((meeting.activeTab === tab)? 'active' : '')} onClick={()=>this.setActiveTab(tab)}>{tab}</li>
            );
        })
        return(
            <div className="leftContainer">
                <ul className="listContainer">
                    {tabs}
                </ul>
            </div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    }
})(LeftContainer);