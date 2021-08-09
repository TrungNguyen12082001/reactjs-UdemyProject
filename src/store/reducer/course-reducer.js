import { GET_COURSE_LIST, GET_COURSE_DETAIL } from "../constants/course-consts";

const initialState = {
  courseList: [],
  courseDetail: {},
};

export const courseReducers = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_COURSE_LIST: {
      state.courseList = payload;
      return { ...state };
    }
    case GET_COURSE_DETAIL: {
      state.courseDetail = payload;
      return { ...state };
    }
    default:
      return state;
  }
};
