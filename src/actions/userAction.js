import { ServerCall } from "../ServerCall"
import { appStore } from "../store/appStore"
export const userAction=()=>{
    ServerCall.fnGetReq('https://jsonplaceholder.typicode.com/users')
    .then((res)=>{
        appStore.dispatch({
            type:'USERS',
            payload:res.data
        })
    })
    .catch(()=>{
        appStore.dispatch({
            type:'USERS',
            payload:[]
        })
    })
}

