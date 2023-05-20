import {configureStore} from '@reduxjs/toolkit'
import { userReducer } from '../reducers/userReducer'
import { commentsReducer } from '../reducers/commentsReducer'
import { sagaReducer } from '../reducers/sagaReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import createSagaMiddleware from 'redux-saga'
import rootSagas from '../sagas/rootSagas'

const sagaMiddleware=  createSagaMiddleware()
export const appStore=configureStore({
    reducer:{
        userReducer,
        commentsReducer,
        sagaReducer
    },
    middleware:[logger,thunk,sagaMiddleware]
})

sagaMiddleware.run(rootSagas)