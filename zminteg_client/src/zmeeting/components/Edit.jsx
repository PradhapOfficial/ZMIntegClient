import React, { Component } from "react";
import { connect } from "react-redux";
class Edit extends Component{
    constructor(props){
        super(props);
    }
    render(){
       return(
            <div className="edit">Edit page</div>
        );
    }
}

export default connect((store)=>{
    return{
        meeting: store.meeting
    };
})(Edit);