import { put, takeLatest } from "redux-saga/effects";
import { usersList,userLogout } from "../actions";
import {USER_INFO,USER_LOGGED} from "../actionTypes";
function* usersInfo() {

    let usersInfo = {profileId:12345,loggedStatus:true,profileName:"My React"}
    yield put(usersList(usersInfo));

    // let url = "http://10.100.110.132:4000/users/logout";
    // try {
    //     let usersInfo = yield fetch(url).then(r =>
    //         r.json()
    //     );
    //     console.log("usersInfo", usersInfo);
    //     yield put(UserLogout(usersInfo));
    // } catch (error) {
    //     console.log("usersInfo", error);
    //     yield put(UserLogout(error));
    // }
}

function* logOut() {

    let usersInfo = {profileId:12345,loggedStatus:false,profileName:"My React"}
    yield put(usersList(userLogout));

    // let url = "http://10.100.110.132:4000/users/logout";
    // try {
    //     let usersInfo = yield fetch(url).then(r =>
    //         r.json()
    //     );
    //     console.log("usersInfo", usersInfo);
    //     yield put(UserLogout(usersInfo));
    // } catch (error) {
    //     console.log("usersInfo", error);
    //     yield put(UserLogout(error));
    // }
}

export function* getUsersListWatcher() {
  //  yield [takeLatest(USER_INFO, usersInfo),takeLatest(USER_LOGGED, logOut)];
}
