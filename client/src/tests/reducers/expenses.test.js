// import expensesReducer from '../../Reducers/expenses'
// import expenses from '../fixtures/expenses'
// import moment from 'moment'

// test('should set default state' , () => {
//     const state = expensesReducer(undefined,{type:'@@INIT'})
//     expect(state).toEqual([])
// })

// test('should remove expense by id', ()=> {
//     const action = {
//         type:'REMOVE_EXPENSE',
//         id:expenses[1].id
//     }
//     const state = expensesReducer(expenses, action)
//     expect(state).toEqual([expenses[0],expenses[2]])
    
// })



// test('should not remove expense if id not found', ()=> {
//     const action = {
//         type:'REMOVE_EXPENSE',
//         id:'-1'
//     }
//     const state = expensesReducer(expenses, action)
//     expect(state).toEqual(expenses)
    
// })

// //should add an expense

// test('should add expense', ()=> {
//     const action = {
//         type:'ADD_EXPENSE',
//         expense: {
//             id: "4",
//             description: "test",
//             note: "",
//             amount: 4500,
//             createdAt: moment(0).add(4, "days").valueOf(),
//         }
//     }
//     const state = expensesReducer(expenses, action)
//     expect(state).toEqual([...expenses,{"amount": 4500, "createdAt": 345600000, "description": "test", "id": "4", "note": ""}])
    
// })



// //should edit expense
// test('should edit expense by id', ()=> {
//     const action = {
//         type:'EDIT_EXPENSE',
//         id:expenses[1].id,
//         updates: {description:'gum2'}
//     }
//     const state = expensesReducer(expenses, action)
//     expect(state[1].description).toEqual("gum2")
    
// })







// //should not edit expense if id not found
// test('should not edit expense if id not found', ()=> {
//     const action = {
//         type:'EDIT_EXPENSE',
//         id:'200',
//         updates: {description:'gum2'}
//     }
//     const state = expensesReducer(expenses, action)
//     expect(state).toEqual(expenses)
    
// })