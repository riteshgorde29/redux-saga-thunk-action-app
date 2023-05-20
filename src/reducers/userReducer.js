import { usersInit } from "../utils/init"
export const userReducer=(state=usersInit,action)=>{
   switch(action.type){
    case 'USERS':
        return {
            ...state,
            users:action.payload
        }
        
   }
   return state;
}