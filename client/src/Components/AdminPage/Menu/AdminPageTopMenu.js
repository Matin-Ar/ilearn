import React from "react";

import profileAvatar from "../../../Assets/avatar.png";

function AdminPageTopMenu() {
  return (
    <div className="admin-page-top-menu">
      <div className="admin-page-top-menu-wrapper">
        <div className="admin-page-top-menu-left-container">
          <div className="admin-page-top-menu-left-profile-container">
            <div className="admin-page-top-menu-left-profile-image-container">
              <img
                className="admin-page-top-menu-left-profile-image"
                src={profileAvatar}
              ></img>
            </div>
            <div className="admin-page-top-menu-left-profile-info-container">
              {" "}
              <h3 className="admin-page-top-menu-left-profile-name">
                متین عراقی
              </h3>
              <p className="admin-page-top-menu-left-profile-role">
                مدیریت سایت
              </p>
            </div>
          </div>
        </div>
        <div className="admin-page-top-menu-right-container"></div>
      </div>
    </div>
  );
}

export default AdminPageTopMenu;
