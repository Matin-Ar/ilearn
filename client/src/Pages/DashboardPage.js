import React from "react";

//import components
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import YearlyActivityTracker from "../Components/ActivityTracker/YearlyActivityTracker";
import CourseRowForDashboard from "../Components/CourseRow/CourseRowForDashboard";
import ShortActivityTracker from "../Components/ActivityTracker/ShortActivityTracker";

function DashboardPage() {
  return (
    <div className="dashboardpage-container">
      <Header />
      <div className="dashboardpage-wrapper">
        <div className="dashboardpage__top">
          <h1 className="dashboardpage__title">داشبورد شما</h1>
          <button className="btn greenbtn dashboardpage__button">
            مرور تمامی دوره ها
          </button>
        </div>
        {/* <div className="dashboardpage-activity-wrapper">
          <YearlyActivityTracker />
        </div> */}
        <div className="dashboardpage-grid">
          <div className="dashboardpage-grid__courses">
            <CourseRowForDashboard />
            <CourseRowForDashboard />
            <CourseRowForDashboard />
          </div>
          <div className="dashboardpage-grid__profile"></div>
          <div className="dashboardpage-grid__activity">
            <div className="short-activity-tracker">
              <ShortActivityTracker />
            </div>
          </div>
          <div className="dashboardpage-grid__leaderboard"></div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
