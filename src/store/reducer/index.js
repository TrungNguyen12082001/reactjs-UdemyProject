import { combineReducers } from "redux";
import { courseReducers } from "./course-reducer";

export const rootReducer = combineReducers({
  course: courseReducers,
});
