// import { startAddExpense, addExpense, editExpense, removeExpense } from "../../Actions/expenses";
// import expenses from '../fixtures/expenses'
// import configureMockStore from 'redux-mock-store'
// import thunk from 'redux-thunk'
// import { database } from "firebase";


// const createMockStore = configureMockStore([thunk])

// beforeEach((done)=> {
//   const expensesData = {

//   }
//   expenses.forEach(({id, description, note,amount,createdAt})=> {
//     expensesData[id]={ description,note,amount,createdAt}
//   })
//   database.ref('expenses').set(expensesData).then(()=> {
//     done()
//   })
// })
// test("should setup removeExpense action object", () => {
//   const action = removeExpense({ id: "abc" });
//   expect(action).toEqual({
//     type: "REMOVE_EXPENSE",
//     id: "abc",
//   });
// });

// test("should setup editExpense action object", () => {
//   const action = editExpense(2, { note: "my new note" });
//   expect(action).toEqual({
//     type: "EDIT_EXPENSE",
//     id: 2,
//     updates: {
//       note: "my new note",
//     },
//   });
// });

// test("should setup addExpense action object with provided values", () => {

//   const action = addExpense(expenses[2]);
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: expenses[2],
//   });
// });


// test('should add expense to database and store', (done) => {
//   jest.useFakeTimers();
//   const store = createMockStore({})
//   const expenseData = {description:'mounse',amount:3000,note:'this one is better',createdAt:1000}
//   store.dispatch(startAddExpense(expenseData)).then(()=> {
//     const actions= store.getActions()
//     expect(actions[0]).toEqual({
//       type:'ADD_EXPENSE',
//       expense: {
//         id:expect.any(String),
//         ...expenseData
//       }
//     })
//     done()
//   })
// })



// // test("should setup addExpense action object without any value", () => {
// //   const action = addExpense();
// //   expect(action).toEqual({
// //     type: "ADD_EXPENSE",
// //     expense: {
// //       description: "",
// //       note: "",
// //       amount: 0,
// //       createdAt: 0,
// //       id: expect.any(String),
// //     },
// //   });
// // });
