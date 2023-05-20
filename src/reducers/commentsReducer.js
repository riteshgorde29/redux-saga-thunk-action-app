import { commentsInit } from "../utils/init";

export const commentsReducer=(state=commentsInit,action)=>{
  switch(action.type){
    case 'COMMENTS':
        return {
            ...state,
            comments:action.payload
        }
  }
  return state;
}