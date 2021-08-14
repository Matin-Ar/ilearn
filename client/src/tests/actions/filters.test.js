// import moment from "moment";
// import {
//   setStartDate,
//   setEndDate,
//   sortByAmount,
//   sortByDate,
//   setTextFilter,
// } from "../../Actions/filters";

// test("setup setStartDate action object", () => {
//   const action = setStartDate(moment(0));
//   expect(action).toEqual({
//     type: "SET_START_DATE",
//     date: moment(0),
//   });
// });

// test("setup setENDDate action object", () => {
//   const action = setEndDate(moment(0));
//   expect(action).toEqual({
//     type: "SET_END_DATE",
//     date: moment(0),
//   });
// });

// test("setup SORTBYAMOUNT action object", () => {
//   const action = sortByAmount();
//   expect(action).toEqual({
//     type: "SORT_BY_AMOUNT",
//   });
// });

// test("setup SORTBYDATE action object", () => {
//   const action = sortByDate();
//   expect(action).toEqual({
//     type: "SORT_BY_DATE",
//   });
// });

// test("setup setTEXTFilter action object with argument", () => {
//   const action = setTextFilter("bill");
//   expect(action).toEqual({
//     type: "SET_TEXT_FILTER",
//     text: "bill",
//   });
// });

// test("setup setTEXTFilter action object with argument", () => {
//   const action = setTextFilter();
//   expect(action).toEqual({
//     type: "SET_TEXT_FILTER",
//     text: "",
//   });
// });
