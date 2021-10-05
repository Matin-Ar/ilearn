import React, { useEffect, useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";

//import assets
import AdminImg from "../../../../Assets/Svg/Admin.svg";
import UserImg from "../../../../Assets/Svg/User.svg";

import avatar from "../../../../Assets/avatar.png";

function ViewUsersTable() {
  const [usersData, setUsersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/users/allusers").then((res) => {
      setUsersData((usersData) => [...usersData, ...res.data]);
      setIsLoading(false);
    });
  }, []);
  console.log("this is the users data from view users table", usersData);

  return (
    <div className="admin-view-all-courses-wrapper">
      <div className="admin-view-all-courses-top-container">
        <input
          type="text"
          id="admin-view-all-courses-top-container-input"
          name="admin-view-all-courses-top-container-input"
          placeholder="جستجو کاربر"
        />

        <Link
          to="/admin/Users/add"
          className="admin-view-all-courses-top-button"
        >
          افزودن کاربر
        </Link>
      </div>

      <table className="admin-view-all-courses-table">
        <thead className="admin-view-all-courses-table-head">
          <tr>
            <th>کاربر</th>
            <th>شماره همراه</th>
            <th> نقش کاربری</th>
            <th>تاریخ عضویت</th>
            <th>پلن کاربری</th>
            <th>وضعیت کاربر</th>
            <th>عملیات</th>
          </tr>
        </thead>
        {isLoading && (
          <tbody className="admin-view-all-courses-table-tr-loader">
            {" "}
            در حال جمع آوری داده ها هستیم لطفا منتظر بمانید
          </tbody>
        )}

        <tbody>
          {usersData &&
            !isLoading &&
            usersData.map((user, index) => {
              var dt = DateTime.fromISO(user.createdAt);
              console.log("this is dt", dt);
              var f = { month: "long", day: "numeric" };

              let userRole = <p></p>;

              if (user.role === "Admin") {
                userRole = (
                  <div className="admin-view-all-users-role">
                    <img
                      src={AdminImg}
                      className="admin-view-all-users-role-icon"
                    />{" "}
                    مدیریت
                  </div>
                );
              } else if (user.role === "User") {
                userRole = (
                  <div className="admin-view-all-users-role">
                    <img
                      src={UserImg}
                      className="admin-view-all-users-role-icon"
                    />{" "}
                    کاربر وب سایت
                  </div>
                );
              }

              return (
                <tr key={index} className="admin-view-all-courses-table-tr">
                  <td className="admin-view-all-courses-table-td-avatar-group">
                    <img
                      src={`http://localhost:5000/api/users/avatar/${user._id}`}
                      className="admin-view-all-courses-table-td-avatar"
                    ></img>
                    <p className="admin-view-all-courses-table-td-avatar-name">
                      {user.name + " " + user.lastname}
                    </p>
                  </td>
                  <td className="admin-view-all-courses-table-td">
                    {user.number}
                  </td>
                  <td className="admin-view-all-courses-table-td">
                    {userRole}
                  </td>

                  <td className="admin-view-all-courses-table-td">
                    {dt.setLocale("fa").toLocaleString(DateTime.DATE_FULL)}
                  </td>
                  <td className="admin-view-all-courses-table-td">
                    دسته بندی دوره
                  </td>
                  <td className="admin-view-all-courses-table-td">آنلاین</td>

                  <td className="admin-view-all-courses-table-td">...</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewUsersTable;
