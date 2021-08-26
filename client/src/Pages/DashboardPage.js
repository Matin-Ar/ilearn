import React from "react";

//import components
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import YearlyActivityTracker from "../Components/ActivityTracker/YearlyActivityTracker";

function DashboardPage() {
  return (
    <div className="dashboardpage-container">
      <Header />
      <div className="dashboardpage-activity-wrapper">
        <YearlyActivityTracker />
      </div>
      <Footer />
    </div>
  );
}

export default DashboardPage;
