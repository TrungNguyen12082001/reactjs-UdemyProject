import React from "react";

import "./css/uifont.css";
import "./css/App.css";
import "./css/props.css";

//components
import Header from "./components/header/Header";
import Sidebar from "./pages/sidebar/Sidebar";
import Home from "./pages/home/Home";
import RightBar from "./pages/right-bar/RightBar";
import Course from "./pages/course/Course";
import Discover from "./pages/discover/Discover";
import Categories from "./pages/categories/Categories";
import MyCourses from "./pages/my-courses/MyCourses";
import Footer from "./pages/footer/Footer";
import DetailCourse from "./pages/detail-course/DetailCourse";

import {
  Route,
  NavLink,
  HashRouter,
  BrowserRouter,
  Switch,
} from "react-router-dom";
import SignIn from "./pages/sign-in/SignIn";

function App() {
  return (
    <div className="App rel" style={{ boxSizing: "unset" }}>
      <BrowserRouter>
        <div className="app-container flex">
          <Sidebar />
          <Switch>
            <div className="app-content">
              {/* <Home /> */}
              <Route exact={true} path="/" component={Home} />
              <Route path="/course/:courseid" component={Course} />
              <Route path="/discover" component={Discover} />
              <Route path="/categories" component={Categories} />
              <Route path="/my-courses" component={MyCourses} />
              <Route path="/course-detail/:maKhoaHoc">
                <DetailCourse />
              </Route>
              <Route path="/sign-in">
                <SignIn />
              </Route>
            </div>
          </Switch>
          <RightBar />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
