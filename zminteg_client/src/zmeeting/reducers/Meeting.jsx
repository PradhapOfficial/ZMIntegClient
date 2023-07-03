import { GET_LIST_OF_MEETINGS, SET_ACTIVE_TAB, PAGES, ZMEETING_INTEG_ERROR, GET_MEETING, SET_ACTIVE_PAGE, DELETE_MEETING } from "../actions/Meeting"
const INITIAL_STATE = {
    meetingList: null,
    errorResponse: false,
    activeTab: PAGES.HOME,
    activePage: PAGES.HOME,
    meetingDetails: null

}

export default function(state = INITIAL_STATE, action){
    switch(action.type){
        case GET_LIST_OF_MEETINGS:
            return{
                ...state,
                meetingList: (action.response !== undefined)? action.response: [],
                errorResponse: false
            }
        case ZMEETING_INTEG_ERROR:
            return{
                ...state,
                errorResponse: action.response
            }
        case SET_ACTIVE_TAB:
            return{
                ...state,
                activeTab: action.tab,
                activePage: action.tab
            }
        case GET_MEETING:
            return{
                ...state,
                meetingDetails: (action.response !== undefined)? action.response : {}
            }
        case SET_ACTIVE_PAGE:
            return{
                ...state,
                activePage: action.page
            }
       default: return state
    }
}