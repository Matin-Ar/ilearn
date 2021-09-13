import React, { useEffect, useState } from "react";
import axios from "axios";
import avatar from "../../../../Assets/avatar.png";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";

function ViewCoursesTable() {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/courses").then((res) => {
      setCourseData((coursedata) => [...coursedata, ...res.data]);
      setIsLoading(false);
    });
  }, []);
  console.log(courseData);

  return (
    <div className="admin-view-all-courses-wrapper">
      <div className="admin-view-all-courses-top-container">
        <input
          type="text"
          id="admin-view-all-courses-top-container-input"
          name="admin-view-all-courses-top-container-input"
          placeholder="جستجو دوره"
        />

        <Link
          to="/admin/AddCourse"
          className="admin-view-all-courses-top-button"
        >
          افزودن دوره
        </Link>
      </div>

      <table className="admin-view-all-courses-table">
        <thead className="admin-view-all-courses-table-head">
          <tr>
            <th>نام دوره</th>
            <th>مدرس</th>
            <th>محتوا</th>
            <th> دانشجویان</th>
            <th>قیمت</th>
            <th>دسته‌ها</th>
            <th>دیدگاه‌ها</th>
            <th>تاریخ انتشار</th>
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
          {courseData &&
            !isLoading &&
            courseData.map((course, index) => {
              var dt = DateTime.fromISO(course.createdAt);
              console.log("this is dt", dt);
              var f = { month: "long", day: "numeric" };

              return (
                <tr key={index} className="admin-view-all-courses-table-tr">
                  <td className="admin-view-all-courses-table-td-avatar-group">
                    <img
                      src={`http://localhost:5000/api/courses/avatar/${course._id}`}
                      className="admin-view-all-courses-table-td-avatar"
                    ></img>
                    <p className="admin-view-all-courses-table-td-avatar-name">
                      {course.title}
                    </p>
                  </td>
                  <td className="admin-view-all-courses-table-td">مدرس دوره</td>
                  <td className="admin-view-all-courses-table-td">
                    جلسات دوره
                  </td>
                  <td className="admin-view-all-courses-table-td">
                    دانشجویان دوره
                  </td>
                  <td className="admin-view-all-courses-table-td">
                    {course.price}
                  </td>
                  <td className="admin-view-all-courses-table-td">
                    دسته بندی دوره
                  </td>
                  <td className="admin-view-all-courses-table-td">g</td>
                  <td className="admin-view-all-courses-table-td">
                    {dt.setLocale("fa").toLocaleString(DateTime.DATE_FULL)}
                  </td>

                  <td className="admin-view-all-courses-table-td">ویرایش</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCoursesTable;
