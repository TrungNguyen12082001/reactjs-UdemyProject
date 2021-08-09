import { Button, CardActions, CardMedia, Container } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./Home.css";
import course1 from "../../assets/images/course1.jpg";
import course2 from "../../assets/images/course2.png";

import { NavLink, useHistory } from "react-router-dom";
import CardCourse from "../../components/card-courses/CardCourse";

export default function Home(props) {
  const history = useHistory();
  useEffect(() => {
    document.title = "Udemy";
  });
  const { course } = props;

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
  ]);

  const [topTutors, setTopTutors] = useState([
    {
      ID: 1,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 1,
    },
    {
      ID: 2,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 2,
    },
    {
      ID: 3,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 3,
    },
    {
      ID: 4,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 4,
    },
    {
      ID: 5,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 5,
    },
    {
      ID: 6,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 6,
    },
  ]);

  var tutorList = [];

  for (let i = 0; i < 10; i++) {
    tutorList.push(
      <Button className="tutor rel" key={"tutor-live-" + i}>
        <img src={"https://placeimg.com/100/100/people?" + i} className="bl" />
      </Button>
    );
  }

  var courseList = [];

  for (let i = 0; i < popularCourse.length; i++) {
    courseList.push(
      <NavLink
        to={"/course/" + popularCourse[i].ID}
        className="courses rel"
        key={"popular-course-" + i}
      >
        <div
          className="block"
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
      </NavLink>
    );
  }

  var topTutorsList = [];

  for (let i = 0; i < topTutors.length; i++) {
    topTutorsList.push(
      <a href="#" className="user-block rel noul" key={"top-tutors-" + i}>
        <div className="user aic flex">
          <div className="pic">
            <img src={topTutors[i].dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="s15 name fontb c333">{topTutors[i].name}</h2>
            <h2 className="s13 uname fontn c333">@{topTutors[i].username}</h2>
          </div>
        </div>
      </a>
    );
  }

  return (
    <div className="home-page rel">
      {/* Tutors live now */}
      {/* <div className="section rel">
        <h2 className="title s24 fontb">
          Streaming <span className="fontn">Now</span>
        </h2>

        <div className="tutors rel flex">{tutorList}</div>
      </div> */}

      {/* Popular courses */}
      <div className="section section-b rel">
        <h2 className="title s24 fontb">
          Popular <span className="fontn">This week</span>
        </h2>

        <div className="courses rel flex">{courseList}</div>
      </div>

      <div className="section section-b rel">
        <h2 className="title s24 fontb">Selection of courses</h2>
        <div>
          <div className="course-list noul">
            <CardMedia>
              <CardActions>
                <CardCourse />
              </CardActions>
            </CardMedia>
          </div>
        </div>
      </div>

      {/* <div className="services">
        <div>
          <h1>1</h1>
          <div className="search">
            <h4>Easy to search the topic you want to learn or teaching</h4>
            <p>
              Easy to search the topic you want to learn or teaching Course Hub
              is collect on many resourses. People who study at the Course Hub
              can archive knowledge by join suitable topic.
            </p>
          </div>
        </div>

        <div>
          <h1>2</h1>
          <div className="join">
            <h4>Join us to help share knowledge for the community</h4>
            <p>
              We have an enthusiastic and responsible team of teachers from many
              companies and corporations with many years of experience. Join us
              to grow together.
            </p>
          </div>
        </div>

        <div>
          <h1>3</h1>
          <div className="skill">
            <h4>Course Hub users easy to achieve the desired skills</h4>
            <p>
              Course Hub system is meticulously built to enhance the interaction
              between students and teachers. It provides an authentic and easy
              experience to gain knowledge as well as help teachers easily
              access students
            </p>
          </div>
        </div>
      </div> */}

      {/* Top tutors */}
      {/* <div className="section section-b rel">
          <h2 className="title s24 fontb">
            Top <span className="fontn">Tutors</span>
          </h2>
  
          <div className="top-tutors rel flex">{topTutorsList}</div>
        </div> */}
    </div>
  );
}
