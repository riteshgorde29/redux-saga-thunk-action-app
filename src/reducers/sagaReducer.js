import { sagaInit } from "../utils/init";

export const sagaReducer=(state=sagaInit,action)=>{
    switch(action.type){
        case 'POSTS':
            return {
                ...state,
                posts:action.payload
            }
        case 'PHOTOS':
            return {
                ...state,
                photos:action.payload
            }
    }
    return state;
}