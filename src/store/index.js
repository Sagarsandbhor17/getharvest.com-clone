import {
    legacy_createStore,
    combineReducers,
    applyMiddleware,
  } from "redux";
  import thunk from "redux-thunk";
  import { loginReducer } from "../Components/auth/auth.reducer";
  
 
  
  let rootReducer = combineReducers({
    login: loginReducer,
  });
  
  export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));