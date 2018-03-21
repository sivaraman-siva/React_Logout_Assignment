import {USER_INFO,USER_LOGGED_STATUS} from "../actionTypes";
export function userLogout(status){
    return {
        type: USER_LOGGED_STATUS,
        value:status
    };
}

export function usersList(status){
    return {
        type: USER_INFO,
        value:status
    };
}