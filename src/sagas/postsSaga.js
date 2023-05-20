
import {takeLatest,call,put} from 'redux-saga/effects'
import { ServerCall } from '../ServerCall'

function* getPosts(){
   const res=yield call(ServerCall.fnGetReq,'https://jsonplaceholder.typicode.com/posts')
   yield put({
    type:'POSTS',
    payload:res.data
   })
}

function* updatePosts(){

}

function* postsSaga(){
    // 2 functions register
    yield takeLatest('GET_POSTS',getPosts)
    yield takeLatest('UPDATE_POSTS',updatePosts)
}

export default postsSaga