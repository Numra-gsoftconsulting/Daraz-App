import {configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "../features/userslice";
import {persistStore, persistReducer } from "redux-persist"
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist:['user']
    
    
  }
  const persistedReducer = persistReducer(persistConfig, userSliceReducer)
export const store =  configureStore ({
 
    reducer: {
      user:persistedReducer, 
      
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false})
 });
 export  
   const persistor= persistStore(store)
 