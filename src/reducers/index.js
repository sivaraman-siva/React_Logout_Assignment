
import {USER_INFO,USER_LOGGED_STATUS} from "../actionTypes";
export default (prevState = { userList:[],userLoggedStatus:false},action) => {
    switch(action.type){
        case USER_INFO:
        return {
            ...prevState,
            userList:action.value
        }
        case USER_LOGGED_STATUS:
        return {
            ...prevState,
            userLoggedStatus:true
        }
    }
    return prevState;
};