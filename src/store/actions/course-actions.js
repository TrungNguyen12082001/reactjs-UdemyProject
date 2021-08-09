import { GET_COURSE_LIST, GET_COURSE_DETAIL } from "../constants/course-consts";

import axios from "axios";

export const getCourseListAction = () => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
      });
      console.log(res);
      dispatch({
        type: "GET_COURSE_LIST",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getCourseDetailAction = (maKhoaHoc) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: "GET",
        url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
      });
      console.log("course-detail", res);
      dispatch({
        type: "GET_COURSE_DETAIL",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
