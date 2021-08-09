import {
  Container,
  CardMedia,
  CardContent,
  Card,
  Typography,
  Grid,
  CardActionArea,
  CardActions,
  Button,
} from "@material-ui/core";
import React, { Component } from "react";
import { getCourseListAction } from "../../store/actions/course-actions";
import CarouselMovie from "react-slick";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { style } from "./style";
import "./CardCourse.css";
import Slider from "react-slick";
import DetailCourse from "../../pages/detail-course/DetailCourse";
import { NavLink, useHistory, Link } from "react-router-dom";

class CardCourse extends Component {
  renderCourseList = () => {
    const { courseList } = this.props;

    if (courseList && courseList.length > 0) {
      console.log("abc", courseList);
      return courseList.map((course, index) => {
        // console.log(course);
        return (
          <Card className="course-card">
            <CardActionArea>
              <CardMedia
                // style={{ height: 100 }}
                className="course-detail"
                image={course.hinhAnh}
                key={index}
              />
              <CardContent className="course-title">
                <Typography>{course.tenKhoaHoc}</Typography>
              </CardContent>

              <Button>
                <Link
                  to={{
                    pathname: "/course-detail/" + course.maKhoaHoc,
                  }}
                >
                  Learn more
                </Link>
              </Button>
            </CardActionArea>
          </Card>
        );
      });
    }
  };
  render() {
    // const { classes } = this.props;
    // const settings = {
    //   className: "center",
    //   centerMode: true,
    //   infinite: true,
    //   centerPadding: "60px",
    //   slidesToShow: 3,
    //   speed: 500,
    //   rows: 2,
    //   slidesPerRow: 1,
    // };
    // const settings = {
    //   dots: true,
    //   infinite: true,
    //   speed: 500,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    // };

    return (
      <Container maxWidth="lg">
        <Grid>
          <div className="course flex">{this.renderCourseList()}</div>
        </Grid>
        {/* <CarouselMovie>{this.renderCourseList()}</CarouselMovie> */}
      </Container>
      // <Container>
      //   <Slider className="course-slider" {...settings}>
      //     {this.renderCourseList()}
      //   </Slider>
      // </Container>
    );
  }

  async componentDidMount() {
    this.props.dispatch(getCourseListAction());
    console.log("abc", this.props.courseList);
  }
}

const mapStateToProps = (state) => {
  return {
    courseList: state.course.courseList,
  };
};

export default connect(mapStateToProps)(withStyles(style)(CardCourse));
