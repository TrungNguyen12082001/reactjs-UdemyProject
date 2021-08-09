import DetailCourse from "../../pages/detail-course/DetailCourse";
import Home from "../../pages/home/Home";
import SignIn from "../../pages/sign-in/SignIn";
import Course from "../../pages/course/Course";
import Discover from "../../pages/discover/Discover";
import Categories from "../../pages/categories/Categories";
import MyCourses from "../../pages/my-courses/MyCourses";

export const clientRouter = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },

  {
    path: "/course/:courseid",
    exact: false,
    Component: Course,
  },

  {
    path: "/discover",
    exact: false,
    Component: Discover,
  },

  {
    path: "/categories",
    exact: false,
    Component: Categories,
  },

  {
    path: "/my-courses",
    exact: false,
    Component: MyCourses,
  },

  {
    path: "/course-detail/:maKhoaHoc",
    exact: false,
    Component: DetailCourse,
  },

  {
    path: "/sign-in",
    exact: false,
    Component: SignIn,
  },
];
