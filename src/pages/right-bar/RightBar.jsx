import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Rightbar.css";
import course1 from "../../assets/images/course1.jpg";
import course2 from "../../assets/images/course2.png";
import cake from "../../assets/images/cake.png";

export default function RightBar() {
  const [popularCourse, setPopularCourse] = useState([
    {
      ID: 1,
      title:
        "Learning how to create Beautiful Scenes in Illustrator in 60 minutes",
      tutor: {
        ID: 1,
        name: "Max",
        username: "max",
        dp: "https://placeimg.com/100/100/people?tutor-" + 1,
      },
      duration: "82 mins",
      poster: course1,
    },

    {
      ID: 2,
      title:
        "Creating a beautiful portrail illustration. Learning new Technics and Tricks",
      tutor: {
        ID: 2,
        name: "Ben",
        username: "ben",
        dp: "https://placeimg.com/100/100/people?tutor-" + 2,
      },
      duration: "1 hr 30 mins",
      poster: course2,
    },

    {
      ID: 3,
      title:
        "Creating a beautiful portrail illustration. Learning new Technics and Tricks",
      tutor: {
        ID: 3,
        name: "Ben",
        username: "ben",
        dp: "https://placeimg.com/100/100/people?tutor-" + 3,
      },
      duration: "1 hr 30 mins",
      poster: course2,
    },
  ]);

  var courseList = [];

  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <a href="#" className="course rel" key={"popular-course-" + i}>
        <div
          className="block rel"
          style={{
            background:
              "#e2e2e2 url(" + popularCourse[i].poster + ") no-repeat center",
          }}
        >
          <div className="user abs aic flex">
            <div className="pic">
              <img src={popularCourse[i].tutor.dp} className="bl" />
            </div>
            <div className="meta rel">
              <h2 className="s15 name fontb cfff">
                {popularCourse[i].tutor.name}
              </h2>
              <h2 className="s13 uname fontn cfff">
                @{popularCourse[i].tutor.username}
              </h2>
            </div>
          </div>

          <div className="dura abs">
            <h2 className="s13 name fontb cfff">{popularCourse[i].duration}</h2>
          </div>

          <div className="course-title abs">
            <h2 className="s15 name fontb cfff">{popularCourse[i].title}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="rightbar rel">
      <div className="section rel">
        <h2 className="title s24 fontb">
          Advanced <span className="fontn">Search</span>
        </h2>

        <div className="search-box rel flex">
          <input
            type="text"
            placeholder="Start writing something"
            className="qry s15 fontb"
          />
          <Button className="go">Find</Button>
        </div>
      </div>

      <div className="section section-b rel">
        <div className="courses rel flex">
          <div className="course-a ">{courseList[0]}</div>
          {/* {courseList[0]} */}

          <div className="flex cols">
            {courseList[1]}
            {courseList[2]}
          </div>
        </div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Special <span className="fontn">Offer</span>
        </h2>
        <div className="special-offer rel flex">
          <div className="meta rel">
            <h2 className="h1 s20 fontb">50 Days Premium!</h2>
            <h2 className="h2 s14 fontb">Get it before 12/8/2021</h2>
            <Button className="s15 fontb">Learn More</Button>
          </div>

          <div className="vector rel">
            <img src={cake} />
          </div>

          <div className="ring abs" />
        </div>
      </div>
    </div>
  );
}
