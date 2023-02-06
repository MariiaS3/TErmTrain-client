import { combineReducers } from "redux";
import elementReducer from "./fileOrDir/elementReducer";

//the root reducer
//reducer as an event listener which handles events based on the received action (event) type.
export default combineReducers({
    elementReducer
})
