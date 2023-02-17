import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { userReducer } from "./auth.reducer";

const rootReducer = combineReducers({
  auth: userReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
