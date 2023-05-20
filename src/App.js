import logo from './logo.svg';
import './App.css';
import { userAction } from './actions/userAction';
import { commentsThunkAction } from './actions/commentsThunkAction';
import {bindActionCreators} from '@reduxjs/toolkit'
import { appStore } from './store/appStore';
function App() {
  const fnGetUsers=()=>{
    userAction();
  }
  const fnGetComments=()=>{
     bindActionCreators(commentsThunkAction,appStore.dispatch)()
  }

  const fnGetPhotos=()=>{
     appStore.dispatch({
      type:'GET_PHOTOS'
     })
  }

  const fnGetPosts=()=>{
    appStore.dispatch({
      type:'GET_POSTS'
    })
  }
  return (
    <div className="App">
       <button onClick={fnGetUsers}>Get Users</button>
       <button onClick={fnGetComments}>Get Comments</button>
       <button onClick={fnGetPosts}>Get Posts</button>
       <button onClick={fnGetPhotos}>Get photos</button>
    </div>
  );
}

export default App;
