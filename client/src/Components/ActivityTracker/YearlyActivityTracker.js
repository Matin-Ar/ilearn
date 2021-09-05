import React from "react";

import CalendarHeatmap from "react-calendar-heatmap";
// import ReactTooltip from "react-tooltip";

const today = new Date();

function YearlyActivityTracker() {
  const randomValues = getRange(280).map((index) => {
    return {
      date: shiftDate(today, -index),
      count: getRandomInt(1, 3),
    };
  });

  return (
    <>
      <CalendarHeatmap
        startDate={shiftDate(today, -360)}
        endDate={today}
        values={randomValues}
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
        // tooltipDataAttrs={(value) => {
        //   return {
        //     "data-tip": `${value.date.toISOString().slice(0, 10)} has count: ${
        //       value.count
        //     }`
        //   };
        // }}
        showWeekdayLabels={true}
        // onClick={(value) =>
        //   alert(`Clicked on value with count: ${value.count}`)
        // }
      />
      {/* <ReactTooltip /> */}
    </>
  );
}

export default YearlyActivityTracker;

function shiftDate(date, numDays) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
}

function getRange(count) {
  return Array.from({ length: count }, (_, i) => i);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
