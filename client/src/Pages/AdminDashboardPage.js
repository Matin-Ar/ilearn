import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

//import components
import AdminUsers from "../Components/AdminPage/AdminUsers/AdminUsers";
import AdminMenu from "../Components/AdminPage/Menu/AdminMenu";
import AdminPageTopMenu from "../Components/AdminPage/Menu/AdminPageTopMenu";
import AddCourse from "../Components/AdminPage/AdminCourse/AddCourse/AddCourse";
import ViewCourse from "../Components/AdminPage/AdminCourse/ViewCourse/ViewCourse";
import AddLessonsPage from "../Components/AdminPage/AdminCourse/AddLessons/AddLessonsPage";
import EditCourse from "../Components/AdminPage/AdminCourse/EditCourse/EditCourse";

function AdminDashboardPage() {
  console.log("admin dashboard page useRouteMatch", useRouteMatch());
  return (
    <div className="admin-dashboard-page-container">
      <AdminMenu />
      <AdminPageTopMenu />
      <div className="admin-dashboard-page-scrollable">
        <Switch>
          <Route path="/admin/users" component={AdminUsers} />
          <Route path="/admin/ViewCourse" component={ViewCourse} exact />
          <Route path="/admin/AddCourse" component={AddCourse} />
          <Route path="/admin/AddLessons/:id" component={AddLessonsPage} />
          <Route path="/admin/ViewCourse/:id" component={EditCourse} />
        </Switch>
      </div>
    </div>
  );
}

export default AdminDashboardPage;
