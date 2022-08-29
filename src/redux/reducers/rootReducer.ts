import { combineReducers } from "redux"
import userReducer from "./userReducer";
import appSettingsReducer from "./appSettingsReducer";

const rootReducer = combineReducers({
  userReducer,
  appSettingsReducer,
})

export default rootReducer;