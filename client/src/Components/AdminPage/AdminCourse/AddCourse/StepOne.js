import React, { useState } from "react";
import { connect } from "react-redux";
import ProgressBar from "@ramonak/react-progress-bar";
import axios from "axios";

//imported actions
import { startAddAlert } from "../../../../Actions/NotificationActions";

//import assets
import ImgUpload from "../../../../Assets/Svg/imgupload.svg";
import VideoUploadImg from "../../../../Assets/Svg/videoupload.svg";
import BadgeUploadImg from "../../../../Assets/Svg/badgeupload.svg";
import AstBeach from "../../../../Assets/Svg/ast-beach.svg";

function StepOne(props) {
  //img switch states
  const [courseBadge, setCourseBadge] = useState(null);
  const [courseImage, setCourseImage] = useState(null);
  const [courseVideo, setCourseVideo] = useState(null);

  const [courseI, setCourseI] = useState(null);
  const [courseV, setCourseV] = useState(null);

  //input states
  const [courseTitle, setCourseTitle] = useState("");
  const [courseShortDesc, setCourseShortDesc] = useState("");
  const [courseDuration, setCourseDuration] = useState("");
  const [courseAuthor, setCourseAuthor] = useState("");
  const [courseLevel, setCourseLevel] = useState("");
  const [courseLanguage, setCourseLanguage] = useState("");
  const [coursePrice, setCoursePrice] = useState("");
  const [courseLongDesc, setCourseLongDesc] = useState("");
  const [coursePrerequisite, setCoursePrerequisite] = useState("");

  //other states
  const [requestSent, setRequestSent] = useState(false);
  const [uploadProgressPercent, setUploadProgressPercent] = useState(0);

  //handle image & video change
  const handleBadgeSwitch = (e) => {
    const badge = e.target.files[0];
    const badgeIMG = window.URL.createObjectURL(badge);
    setCourseBadge(badgeIMG);
  };

  const handleCourseImageSwitch = (e) => {
    const IMG = e.target.files[0];
    const courseIMG = window.URL.createObjectURL(IMG);
    setCourseImage(courseIMG);
    setCourseI(IMG);
  };

  const handleCourseVideoSwitch = (e) => {
    const Video = e.target.files[0];
    const courseVideo = window.URL.createObjectURL(Video);
    setCourseVideo(courseVideo);
    setCourseV(Video);
  };

  //handle API request
  const handleAddCourseRequest = () => {
    if (
      courseTitle &&
      courseShortDesc &&
      courseDuration &&
      courseAuthor &&
      courseAuthor &&
      courseLevel &&
      courseLanguage &&
      coursePrice &&
      courseLongDesc &&
      coursePrerequisite &&
      courseBadge &&
      courseImage &&
      courseVideo
    ) {
      //set upload/wait screen
      setRequestSent(true);

      //getting upload progress for progress bar
      const axiosConfig = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          let percent = Math.floor((loaded * 100) / total);
          console.log(`${loaded} kb of ${total}kb | ${percent}%`);
          setUploadProgressPercent(percent);
        },
      };

      var formData = new FormData();
      formData.append("avatar", courseI);
      formData.append("demo", courseV);
      formData.append("badge", "123");
      formData.append("title", courseTitle);
      formData.append("shortdesc", courseShortDesc);
      formData.append("price", coursePrice);
      formData.append("longdesc", courseLongDesc);
      formData.append("duration", courseDuration);
      formData.append("prerequisite", coursePrerequisite);
      formData.append("instructor", courseAuthor);
      formData.append("level", courseLevel);
      formData.append("language", courseLanguage);

      axios
        .post("/api/courses", formData, axiosConfig)
        .then((res) => console.log(res));

      props.dispatch(startAddAlert("success", "دوره در حال ایجاد می باشد"));
    } else {
      props.dispatch(
        startAddAlert("error", "لطفا تمامی قیلد ها را تکمیل نمایید")
      );
    }
  };

  return (
    <div className="add-course-step-one-container">
      {requestSent && (
        <div className="add-course-step-one-progress-bar-container">
          <img
            src={AstBeach}
            className="add-course-step-one-progress-bar-img"
          />
          <div className="add-course-step-one-progress-bar-wrapper">
            <ProgressBar completed={uploadProgressPercent} />
          </div>
          <p className="add-course-step-one-progress-bar-text">
            در حال ارسال اطلاعات به سرور می باشیم ، بسته به حجم فایل های آپلودی
            و سرعت اینترنت شما این پروسه ممکن است چند دقیقه به طول بیانجامد
            {<br />}
            لطفا از Reload صفحه خودداری فرمایید
          </p>
        </div>
      )}
      {!requestSent && (
        <>
          <h1 className="add-course-step-one__title">تنظیمات دوره</h1>

          <div className="add-course-step-one-main-wrapper">
            <div className="add-course-step-one-right-wrapper">
              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  نام دوره
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={courseTitle}
                  onChange={(e) => setCourseTitle(e.target.value)}
                />
              </div>
              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  متن کوتاه
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={courseShortDesc}
                  onChange={(e) => setCourseShortDesc(e.target.value)}
                />
              </div>

              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  مدت زمان دوره
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={courseDuration}
                  onChange={(e) => setCourseDuration(e.target.value)}
                />
              </div>
              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  مدرس دوره
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={courseAuthor}
                  onChange={(e) => setCourseAuthor(e.target.value)}
                />
              </div>
              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  سطح دوره
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={courseLevel}
                  onChange={(e) => setCourseLevel(e.target.value)}
                />
              </div>
              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  زبان دوره
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={courseLanguage}
                  onChange={(e) => setCourseLanguage(e.target.value)}
                />
              </div>
              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  قیمت دوره
                </label>
                <input
                  className="add-course-step-one-input-field"
                  type="text"
                  value={coursePrice}
                  onChange={(e) => setCoursePrice(e.target.value)}
                />
              </div>

              <div className="add-course-step-one-input-group">
                <label className="add-course-step-one-input-label">
                  متن کامل
                </label>
                <textarea
                  className="add-course-step-one-input-field add-course-step-one-textarea"
                  value={courseLongDesc}
                  onChange={(e) => setCourseLongDesc(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/*left side markup */}
            <div className="add-course-step-one-left-wrapper">
              <div className="add-course-step-one-left-group">
                <label className="add-course-step-one-input-label">
                  تصویر دوره
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="add-course-user-upload-input"
                  id="add-course-user-upload-course-image"
                  onChange={(e) => handleCourseImageSwitch(e)}
                />
                <label htmlFor="add-course-user-upload-course-image">
                  <img
                    src={courseImage ? courseImage : ImgUpload}
                    className="add-course-user-upload-course-image-placeholder"
                  />
                </label>
              </div>
              <div className="add-course-step-one-left-group">
                <label className="add-course-step-one-input-label">
                  ویدیو دوره
                </label>
                <input
                  type="file"
                  // accept=".mp4, .mkv , .mov, .avi, .flv, .3gp"
                  className="add-course-user-upload-input"
                  id="add-course-user-upload-course-video"
                  onChange={(e) => handleCourseVideoSwitch(e)}
                />
                <label htmlFor="add-course-user-upload-course-video">
                  {courseVideo ? (
                    <video width="320" height="240" controls>
                      <source src={courseVideo} type="video/mp4" />
                      <source src={courseVideo} type="video/ogg" />
                    </video>
                  ) : (
                    <img
                      src={VideoUploadImg}
                      className="add-course-user-upload-course-image-placeholder"
                    />
                  )}
                </label>
              </div>

              <div className="add-course-step-one-left-group">
                <label className="add-course-step-one-input-label">
                  این دوره پیش نیاز دارد؟
                </label>
                <input
                  className="add-course-step-one-left-input-field"
                  type="text"
                  placeholder="دوره های پیش نیاز مورد نظر را انتخاب نمایید"
                  value={coursePrerequisite}
                  onChange={(e) => setCoursePrerequisite(e.target.value)}
                />
              </div>
              <div className="add-course-step-one-left-group">
                <label className="add-course-step-one-input-label">
                  نشان دوره{" "}
                </label>
                <input
                  type="file"
                  accept="image/*"
                  className="add-course-user-upload-input"
                  id="add-course-user-upload-course-badge"
                  onChange={(e) => handleBadgeSwitch(e)}
                />
                <label htmlFor="add-course-user-upload-course-badge">
                  <img
                    src={courseBadge ? courseBadge : BadgeUploadImg}
                    className="add-course-user-upload-course-image-placeholder"
                  />
                </label>
              </div>
              <div className="add-course-next-step-button-container">
                <button
                  className="add-course-next-step-button"
                  onClick={(e) => handleAddCourseRequest(e)}
                >
                  مرحله بعد
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default connect()(StepOne);
