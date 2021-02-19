import {createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"


/**
 *  Importing User Reducer 
 */
import {userLoginReducer} from "./redux/reducers/userReducer"
/**
 *  Importing Project Reducers 
 */
import {projectCreateReducer,projectUpdateReducer,projectListReducer,projectDetailsReducer,projectDeleteReducer} from './redux/reducers/projectReducer'

const userDetailsFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : [];

const reducer = combineReducers({
  userLogin: userLoginReducer,
  projectCreate: projectCreateReducer,
  projectUpdate: projectUpdateReducer,
  listProjects: projectListReducer,
  projectDelete: projectDeleteReducer,
  projectDetail: projectDetailsReducer,
});
const initialState = {
  userLogin: { userInfo: userDetailsFromStorage },
};
const middleware = [thunk]
const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))
export default store;