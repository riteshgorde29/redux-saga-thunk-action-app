import { ServerCall } from "../ServerCall"
export const commentsThunkAction=()=>{
    return async (dispatch,getState)=>{
      const state=getState()
      if(state.commentsReducer.comments.length > 0)return;
      const res=  await ServerCall.fnGetReq('https://jsonplaceholder.typicode.com/comments')
      dispatch({
        type:'COMMENTS',
        payload:res.data
      })
}
}

