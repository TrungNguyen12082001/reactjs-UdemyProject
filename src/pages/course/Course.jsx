import { Button } from "@material-ui/core";
import React, { useState } from "react";
import "./Course.css";
import course1 from "../../assets/images/course1.jpg";
import course2 from "../../assets/images/course2.png";

import { AiFillPauseCircle } from "react-icons/ai";
import { BsBatteryFull, BsFillVolumeDownFill } from "react-icons/bs";
import { BiCheckShield, BiFullscreen } from "react-icons/bi";

export default function Course(props) {
  const [course, setCourse] = useState({
    ID: 1,
    title:
      "Learning how to create Beautiful Scenes in Illustrator in 60 minutes",
    about:
      "In this course i'll teach you how to make your illustration look really good. We're gonna study a lot of cases here, setting your work panel, making some awesome actions and presets your future.<br /> Hope you'll get some really useful stuff out of this course. Good luck to all!",
    tutor: {
      ID: 1,
      name: "Max",
      username: "max",
      dp: "https://placeimg.com/100/100/people?tutor-" + 1,
    },
    duration: "82 mins",
    poster: course1,

    videos: [
      {
        ID: 1,
        title: "Introduction",
        duration: "03 mins 24 secs",
      },

      {
        ID: 2,
        title: "Getting Started",
        duration: "09 mins 55 secs",
      },

      {
        ID: 3,
        title: "The Illustration",
        duration: "62 mins 48 secs",
      },
    ],
  });

  const courseID = props.match.params.courseid;

  var courseVideos = [];
  for (let i = 0; i < course.videos.length; i++) {
    courseVideos.push(
      <a href="#" key={"course-video-" + i} className="noul aic rel flex">
        <div className="id s18 fontn cfff">{course.videos[i].ID}</div>
        <div className="meta rel">
          <h1 className="s15 lbl fontb c333">{course.videos[i].title}</h1>
          <h1 className="s13 dur fontn c777">{course.videos[i].duration}</h1>
        </div>
      </a>
    );
  }

  return (
    <div className="course-page rel flex">
      <div className="course-info rel">
        <div className="tutor rel aic flex">
          <div className="pic">
            <img src={course.tutor.dp} className="bl" />
          </div>
          <div className="meta rel">
            <h2 className="s15 name fontb c333">{course.tutor.name}</h2>
            <h2 className="s13 uname fontn c777">Course Tutor</h2>
          </div>
        </div>

        <div className="course-meta">
          <h2 className="s24 title fontb c333">{course.title}</h2>
          <p
            className="s18 about fontn c777"
            dangerouslySetInnerHTML={{ __html: course.about }}
          />

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Achievements</span>
            </h2>
            <div className="course-stats aic flex">
              <div className="stats-box flex">
                <BiCheckShield className="ico ico-points s24" />
                <h2 className="val s15 c333 fontb">1800</h2>
                <h2 className="lbl s13 c777">Points</h2>
              </div>
              <div className="stats-box flex">
                <BsBatteryFull className="ico ico-battery s24" />
                <h2 className="val s15 c333 fontb">90%</h2>
                <h2 className="lbl s13 c777">Completed</h2>
              </div>
              <div className="stats-box flex">
                <BsBatteryFull className="ico ico-battery s24" />
                <h2 className="val s15 c333 fontb">+26</h2>
                <h2 className="lbl s13 c777">Level</h2>
              </div>
            </div>
          </div>

          <div className="section section-b rel">
            <h2 className="title s24 fontb">
              Course <span className="fontn">Details</span>
            </h2>
            <div className="course-videos aic flex">{courseVideos}</div>
          </div>
        </div>
      </div>

      <div className="course-preview rel">
        <div className="player rel">
          <video poster={course.poster} />
          {/* <div className="ctrls abs aic flex">
            <Button className="pp">
              <AiFillPauseCircle className="s24" />
            </Button>
            <div className="timer rel fontn s15 cfff">02:54 / 09:55</div>
            <div className="slider rel">
              <div className="prog rel">
                <div className="bar rel">
                  <div className="knob abs" />
                </div>
              </div>
            </div>
            <Button className="vol">
              <BsFillVolumeDownFill className="s24" />
            </Button>
            <Button className="fs">
              <BiFullscreen className="s24" />
            </Button>
          </div> */}
        </div>

        <div className="extras-block rel flex">
          {/* <div className="chat rel">
            <div className="section section-b rel">
              <h2 className="title s24 fontb">
                Quick <span className="fontn">Chat</span>
              </h2>
              <div className="messages aic flex">
                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>
                </div>
                <div className="bubble rel">
                  <h2 className="txt ibl fontn s15 c333">Love this course!</h2>
                </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">Hey</h2>
                </div>
                <div className="bubble bubble-mine rel">
                  <h2 className="txt ibl fontn s15 c333">Dope! Thanks</h2>
                </div>
              </div>
            </div>
          </div> */}

          <div className="now-watching rel">
            {/* <div className="tooltip abs s13 fontb cfff">86 Watching</div> */}
            {/* <div className="section section-b rel">
              <h2 className="title s24 fontb">
                Now <span className="fontn">Watching</span>
              </h2>
              <div className="you-list rel">
                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="https://placeimg.com/100/100/people?guest-1"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Nguyễn Văn Tèo</h2>
                    <h2 className="s13 uname fontn c777">@teo</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="https://placeimg.com/100/100/people?guest-2"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Trần Văn Tũn</h2>
                    <h2 className="s13 uname fontn c777">@tun</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="https://placeimg.com/100/100/people?guest-3"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Trần Văn Tũn</h2>
                    <h2 className="s13 uname fontn c777">@tun</h2>
                  </div>
                </div>

                <div className="you rel aic flex">
                  <div className="pic">
                    <img
                      src="https://placeimg.com/100/100/people?guest-4"
                      className="bl"
                    />
                  </div>
                  <div className="meta rel">
                    <h2 className="s15 name fontb c333">Trần Văn Tũn</h2>
                    <h2 className="s13 uname fontn c777">@tun</h2>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}
