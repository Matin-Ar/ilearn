// import getVisibleExpenses from "../../Selectors/expenses";
// import moment from "moment";
// import expenses from '../fixtures/expenses'

// const defaultfilters = {
//   text: "",
//   sortBy: "date",
//   startDate: undefined,
//   endDate: undefined,
// };

// //should filter by text value
// test("should filter by text value", () => {
//   const textfilter = {
//     text: "e",
//     sortBy: "date",
//     startDate: undefined,
//     endDate: undefined,
//   };

//   const filterbyText = getVisibleExpenses(expenses, textfilter);
//   expect(filterbyText).toEqual([expenses[2], expenses[1]]);
// });

// //should filter by startDate
// test("should filter by startDate", () => {
//   const startDateFilter = {
//     text: "",
//     sortBy: "date",
//     startDate: moment(0),
//     endDate: undefined,
//   };

//   const result = getVisibleExpenses(expenses, startDateFilter);
//   expect(result).toEqual([expenses[2], expenses[0]]);
// });

// //should filter by endDate
// test("should filter by endDate", () => {
//   const endDateFilter = {
//     text: "",
//     sortBy: "date",
//     startDate: undefined,
//     endDate: moment(0),
//   };

//   const result = getVisibleExpenses(expenses, endDateFilter);
//   expect(result).toEqual([expenses[2], expenses[0]]);
// });

// //should filter by amount
// test("should filter by amount", () => {
//   const amountFilter = {
//     text: "",
//     sortBy: "amount",
//     startDate: undefined,
//     endDate: undefined,
//   };

//   const result = getVisibleExpenses(expenses, amountFilter);
//   expect(result).toEqual([expenses[1], expenses[2],expenses[0]]);
// });


// //should filter by date
// test("should filter by date", () => {
//   const dateFilter = {
//     text: "",
//     sortBy: "date",
//     startDate: undefined,
//     endDate: undefined,
//   };

//   const result = getVisibleExpenses(expenses, dateFilter);
//   expect(result).toEqual([expenses[2], expenses[0],expenses[1]]);
// });