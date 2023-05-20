import {all} from 'redux-saga/effects'
import photosSaga from "./photosSaga";
import postsSaga from "./postsSaga";

function* rootSagas(){
  return yield all([
    photosSaga(),
    postsSaga()
   ])
}

export default rootSagas