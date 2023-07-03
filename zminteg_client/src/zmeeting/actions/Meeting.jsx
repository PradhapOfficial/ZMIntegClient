import axios from "axios";

export const GET_LIST_OF_MEETINGS = 'GET_LIST_OF_MEETINGS' //no i18n
export const ZMEETING_INTEG_ERROR = 'ZMEETING_INTEG_ERROR' //no i18n
export const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB' //no i18n
export const GET_MEETING = 'GET_MEETING' //no i18n
export const SET_ACTIVE_PAGE = 'SET_ACTIVE_PAGE' //no i18n
export const DELETE_MEETING = 'DELETE_MEETING' //no i18n
export const MEETING_TABS = [
    'Home',
    'Meetings',
    'Users',
    'Settings' 
]

export const PAGES = {
    HOME: 'Home',
    MEETINGS: 'Meetings',
    USERS: 'Users',
    SETTINGS: 'Settings',
    EDIT: 'Edit',
    SCHEDULE: 'Schedule',
    DETAILS: 'Details'
}

export function getListOfMeetings(){
    let getListOfMeetingUrl = "http://localhost:8081/ZMeetingInteg/meeting/list";
    return ((dispatch) =>{
        axios.get(getListOfMeetingUrl).then((resp)=>{
            console.log(resp.data.session);
            dispatch({
                type: GET_LIST_OF_MEETINGS,
                response: resp.data.session
            });
        }).catch((error)=>{
            dispatch({
                type: ZMEETING_INTEG_ERROR,
                response: error
            });
        });
    })
}

export function getMeeting(meetingKey){
    let getMeetingUrl = "http://localhost:8081/ZMeetingInteg/meeting/get?meetingKey=" + meetingKey;
    return ((dispatch) =>{
        axios.get(getMeetingUrl).then((resp)=>{
            console.log(resp.data.session);
            dispatch({
                type: GET_MEETING,
                response: resp.data.session
            });
        }).catch((error)=>{
            dispatch({
                type: ZMEETING_INTEG_ERROR,
                response: error
            });
        });
    })
}

export function cancelMeeting(meetingKey){
    let deleteMeetingUrl = "http://localhost:8081/ZMeetingInteg/meeting/delete?meetingKey=" + meetingKey;
    return ((dispatch) =>{
        axios.delete(deleteMeetingUrl).then((resp)=>{
            console.log(resp.data.status);
            if(resp.data.status){
                dispatch(setActiveTab(PAGES.MEETINGS));
                dispatch(getListOfMeetings());
            }
            dispatch({
                type: DELETE_MEETING,
                response: resp.data.status
            });
        }).catch((error)=>{
            dispatch({
                type: ZMEETING_INTEG_ERROR,
                response: error
            });
        });
    })
}

export function setActiveTab(tab){
    return(dispatch)=>{
        dispatch({
            type: SET_ACTIVE_TAB,
            tab: tab
        });
    }
}

export function setActivePage(page){
    return(dispatch)=>{
        dispatch({
            type: SET_ACTIVE_PAGE,
            page: page
        });
    }
}