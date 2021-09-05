import React, { useState } from "react";
import CalendarHeatmap from "react-calendar-heatmap";
import axios from "axios";
import ReactTooltip from "react-tooltip";

const today = new Date();

function ShortActivityTracker() {
  const [userValues, setUserValues] = useState([]);
  const fetchValues = () => {
    axios.get("/api/users/me").then((resp) => {
      console.log("this is from short activity", resp.data.activity);
      resp.data.activity.map((item) => {
        let date = Date.parse(item.date);
        let mycount = item.count;
        userValues.push({ date, mycount });
      });
    });
  };

  fetchValues();

  console.log(Date.parse("2021-08-01T14:11:16+04:30"));
  console.log("this is user values", userValues);

  // const randomValues = getRange(30).map((index) => {
  //   return {
  //     date: shiftDate(today, -index),
  //     count: getRandomInt(1, 3),
  //   };
  // });

  return (
    <>
      <CalendarHeatmap
        startDate={shiftDate(today, -30)}
        endDate={today}
        values={userValues}
        weekdayLabels={[
          "شنبه",
          "یک شنبه",
          "دو شنبه",
          "سه شنبه",
          "شنبه چهار",
          "جمعه",
        ]}
        monthLabels={[
          "فروردین",
          "اردیبهشت",
          "خرداد",
          "تیر",
          "مرداد",
          "شهریور",
          "مهر",
          "آبان",
          "آذر",
          "دی",
          "بهمن",
          "اسفند",
        ]}
        classForValue={(value) => {
          if (!value) {
            return "color-empty";
          }
          return `color-github-${value.count}`;
        }}
        tooltipDataAttrs={(value) => {
          return {
            "data-tip": `${value.date} has count: ${value.count}`,
          };
        }}
        showWeekdayLabels={true}
        onClick={(value) =>
          alert(`Clicked on value with count: ${value.count}`)
        }
      />
      <ReactTooltip />
    </>
  );
}

export default ShortActivityTracker;

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}
