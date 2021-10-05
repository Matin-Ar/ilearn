import React, { useEffect, useState } from "react";
import axios from "axios";
import { DateTime } from "luxon";
import { Link } from "react-router-dom";

//importing assets
import DotImg from "../../../../Assets/Svg/verticle3dots.svg";
import GearImg from "../../../../Assets/setting.png";
import DeleteImg from "../../../../Assets/delete.png";
import LessonImg from "../../../../Assets/lesson.png";

function ViewCoursesTable() {
  const [courseData, setCourseData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [threeDotHovered, setThreeDotHovered] = useState(-1);

  const handleMouseEnterDots = (index) => {
    console.log("mouse entered");
    setThreeDotHovered(index);
  };

  const handleMouseLeaveDots = () => {
    console.log("mouse leave");
    setThreeDotHovered(-1);
  };

  useEffect(() => {
    setIsLoading(true);
    axios.get("/api/allcourses").then((res) => {
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

            <th> دانشجویان</th>
            <th>قیمت</th>
            <th>دسته‌ها</th>

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
                  <td className="admin-view-all-courses-table-td">
                    {course.instructor}
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
                  <td className="admin-view-all-courses-table-td">
                    {dt.setLocale("fa").toLocaleString(DateTime.DATE_FULL)}
                  </td>

                  <td className="admin-view-all-courses-table-td">
                    <div
                      className="admin-view-all-courses-dots-wrapper"
                      onMouseEnter={() => handleMouseEnterDots(index)}
                      onMouseLeave={() => handleMouseLeaveDots()}
                    >
                      <img
                        src={DotImg}
                        className="admin-view-all-courses-dots"
                      />
                      <div
                        className={
                          threeDotHovered === index
                            ? "admin-view-all-courses-dots-menu-wrapper-visible"
                            : "admin-view-all-courses-dots-menu-wrapper"
                        }
                      >
                        <Link
                          className="admin-view-all-courses-dots-menu-group-links"
                          to={`/admin/ViewCourse/${course._id}`}
                        >
                          <div className="admin-view-all-courses-dots-menu-group-container">
                            <img
                              className="admin-view-all-courses-dots-menu-group-icon"
                              src={GearImg}
                            />

                            <p>تنظیمات دوره</p>
                          </div>
                        </Link>

                        <div className="admin-view-all-courses-dots-menu-group-container">
                          <img
                            className="admin-view-all-courses-dots-menu-group-icon"
                            src={LessonImg}
                          />
                          <p>تنظیمات جلسه</p>
                        </div>

                        <div className="admin-view-all-courses-dots-menu-group-container">
                          <img
                            className="admin-view-all-courses-dots-menu-group-icon"
                            src={DeleteImg}
                          />
                          <p>حذف دوره</p>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default ViewCoursesTable;
