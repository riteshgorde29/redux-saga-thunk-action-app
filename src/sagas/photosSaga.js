import {takeLatest,call,put} from 'redux-saga/effects'
import { ServerCall } from '../ServerCall'
function* getPhotos(){
   const res=yield call(ServerCall.fnGetReq,'https://jsonplaceholder.typicode.com/photos')
    yield put({
        type:'PHOTOS',
        payload:res.data
    })
}

function* savePhoto(){

}

function* deletePhoto(){

}

function* photosSaga(){
    // 3 function register
   yield takeLatest('GET_PHOTOS',getPhotos)
   yield takeLatest('SAVE_PHOTO',savePhoto)
   yield takeLatest('DEL_PHOTO',deletePhoto)
}

export default photosSaga

