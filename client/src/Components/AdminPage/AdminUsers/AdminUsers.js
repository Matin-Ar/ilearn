import React from "react";
import ViewUsersTable from "../Tables/ViewUsers/ViewUsersTable";

//import components

function AdminUsers() {
  return (
    <>
      <div className="admin-view-all-users-container admin-view-all-users-filters">
        <p>فیلتر ها</p>
        <div className="admin-view-all-users-filters-wrapper">
          <div className="admin-view-all-users-filters-input-group">
            <p>نقش کاربری</p>
            <select className="admin-view-all-users-filters-input"></select>
          </div>
          <div className="admin-view-all-users-filters-input-group">
            پلن کاربری
            <select className="admin-view-all-users-filters-input"></select>
          </div>
          <div className="admin-view-all-users-filters-input-group">
            وضعیت کاربری
            <select className="admin-view-all-users-filters-input"></select>
          </div>
        </div>
      </div>

      <div className="admin-view-all-users-container">
        <ViewUsersTable />
      </div>
    </>
  );
}

export default AdminUsers;
