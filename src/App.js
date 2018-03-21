import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as usersActions from "./actions";

import {USER_INFO,USER_LOGGED} from "./actionTypes";

class App extends Component {
  constructor(props){
    super(props);
    this.logout = this.logout.bind(this);
  }
   componentDidMount(){
      let usersInfo = {profileId:12345,loggedStatus:true,profileName:"Sivaraman"}
      this.props.actions.usersList(usersInfo);
  }
  logout() {
    let { usersList } = this.props;
    usersList.loggedStatus = false;
    this.props.actions.userLogout(usersList);
  }
  render() {
    let { usersList,loggedUserStatus  } = this.props;
    let { loggedStatus,profileName } = usersList
    return (
      <div className="App">
        {!loggedUserStatus && <p className="text-right">
          <span>Hi {profileName}</span> | <span><a href="javascript:void(0)" onClick={this.logout}>Logout</a></span>
        </p>}
      {loggedUserStatus && <p> Successfully logged out </p> }
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
      usersList : state.userList,
      loggedUserStatus : state.userLoggedStatus
    };
}
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(usersActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
