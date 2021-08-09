import { Button, Container, Grid, Typography } from "@material-ui/core";
import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, withRouter } from "react-router-dom";

import "./DetailCourse.css";

import { getCourseDetailAction } from "../../store/actions/course-actions";

class DetailCourse extends Component {
  render() {
    const { courseDetail } = this.props;

    return (
      <Container maxWidth="lg" className="course-detail">
        <Grid container>
          <Grid>
            <img src={courseDetail.hinhAnh} />
          </Grid>
          {/* <Grid>
            <Typography>{courseDetail.tenKhoaHoc}</Typography>
          </Grid> */}

          <Button>
            <Link to={{ pathname: "/sign-in" }}>Enroll Now</Link>
          </Button>
        </Grid>
        <div className="course-page rel flex">
          <div className="course-info rel">
            <div className="course-meta">
              <h2 className="s24 title fontb c333">
                {courseDetail.tenKhoaHoc}
              </h2>
              {/* <p
                className="s18 about fontn c777"
                dangerouslySetInnerHTML={{ __html: course.about }}
              /> */}

              <div className="section section-b rel">
                <h2 className="title s24 fontb">
                  Views: <span className="fontn">{courseDetail.luotXem}</span>
                </h2>
              </div>

              <div className="section section-b rel">
                <h2 className="title s24 fontb">
                  Course <span className="fontn">Details</span>
                </h2>
                <div className="course-videos aic flex">
                  {courseDetail.moTa}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="course-preview rel">
            <div className="player rel">
              <video poster={course.poster} />
              <div className="ctrls abs aic flex">
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
              </div>
            </div>

            <div className="extras-block rel flex">
              <div className="chat rel">
                <div className="section section-b rel">
                  <h2 className="title s24 fontb">
                    Quick <span className="fontn">Chat</span>
                  </h2>
                  <div className="messages aic flex">
                    <div className="bubble rel">
                      <h2 className="txt ibl fontn s15 c333">I am a newbie</h2>
                    </div>
                    <div className="bubble rel">
                      <h2 className="txt ibl fontn s15 c333">
                        Love this course!
                      </h2>
                    </div>
                    <div className="bubble bubble-mine rel">
                      <h2 className="txt ibl fontn s15 c333">Hey</h2>
                    </div>
                    <div className="bubble bubble-mine rel">
                      <h2 className="txt ibl fontn s15 c333">Dope! Thanks</h2>
                    </div>
                  </div>
                </div>
              </div>

              <div className="now-watching rel">
                <div className="tooltip abs s13 fontb cfff">86 Watching</div>
                <div className="section section-b rel">
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
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Container>
    );
  }

  componentDidMount() {
    const maKhoaHoc = this.props.match.params.maKhoaHoc;
    this.props.dispatch(getCourseDetailAction(maKhoaHoc));
    // console.log("acdsa", this.props.courseDetail);
  }
}

const mapStateToProps = (state) => ({
  courseDetail: state.course.courseDetail,
});

export default connect(mapStateToProps)(withRouter(DetailCourse));
