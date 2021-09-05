import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";

//import assets
import courseImg from "../../Assets/course-avatar.png";
import { ReactComponent as ChatImg } from "../../Assets/Svg/chat.svg";
import { ReactComponent as ThreedotsImg } from "../../Assets/Svg/threedots.svg";
import { ReactComponent as TrophyImg } from "../../Assets/Svg/trophy.svg";

function CourseRowForDashboard() {
  return (
    <div className="CourseRow-container">
      <div>
        <img className="CourseRow__avatar" src={courseImg} />
      </div>
      <div className="CourseRow__info-container">
        <h1>دوره آموزش زبان فرانسوی</h1>
        <p>4 جلسه از 50 حلسه مشاهده شده</p>
        <ProgressBar
          className="CourseRow__info-progress-bar"
          striped
          variant="success"
          now={40}
        />
      </div>
      <div className="CourseRow__left-container">
        <div className="CourseRow__left-tool-btn-container">
          <ThreedotsImg className="CourseRow__left-tool-btn" />
          <TrophyImg className="CourseRow__left-tool-btn" />
          <ChatImg className="CourseRow__left-tool-btn" />
        </div>
        <button className="btn greenbtn">مرور دوره ها </button>
      </div>
    </div>
  );
}

export default CourseRowForDashboard;
