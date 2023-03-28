import { combineReducers } from "redux";

import videos from "./videos";
import history from "./history";

export const rootReducer = combineReducers({videos,history})