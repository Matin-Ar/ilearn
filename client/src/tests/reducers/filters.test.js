// import filtersReducer from '../../Reducers/filters'
// import moment from 'moment'



// test('setup filtersReducer Default values', () => {
//     const defaultReducers = {
//         text: "",
//         sortBy: "date",
//         startDate: moment().startOf("month"),
//         endDate: moment().endOf("month"),
//     }

//     const result = filtersReducer(undefined,{type:'@@INIT'})
//     expect(result).toEqual({
//         text: "",
//         sortBy: "date",
//         startDate: moment().startOf("month"),
//         endDate: moment().endOf("month"),
//     })

// })

// test('setup sortBy amount ' , () => {
//     const result = filtersReducer(undefined,{type:'SORT_BY_AMOUNT'})
//     expect(result).toEqual({
//         text: "",
//         sortBy: "amount",
//         startDate: moment().startOf("month"),
//         endDate: moment().endOf("month"),
//     })

// })


// test('setup sortBy date ' , () => {
//     const defaultReducers = {
//         text: "",
//         sortBy: "amount",
//         startDate: moment().startOf("month"),
//         endDate: moment().endOf("month"),
//     }
//     const result = filtersReducer(defaultReducers,{type:'SORT_BY_DATE'})
//     expect(result).toEqual({
//         text: "",
//         sortBy: "date",
//         startDate: moment().startOf("month"),
//         endDate: moment().endOf("month"),
//     })

// })


// test('should set text filter' , () => {
//     const result = filtersReducer(undefined,{type:'SET_TEXT_FILTER',text:'hello'})
//     expect(result).toEqual({
//             text: "hello",
//             sortBy: "date",
//             startDate: moment().startOf("month"),
//             endDate: moment().endOf("month"),    
//     })
// })



// // test('should set startDate' , () => {
// //     const startDate = moment(0);
// //     const action = {
// //         type:'SET_START_DATE',
// //         startDate
// //     }
// //     const result = filtersReducer(undefined,action)
// //     expect(result.startDate).toEqual({startDate})
// // })



// // test('should set endDate' , () => {
// //     const endDate = moment();
// //     const action = {
// //         type:'SET_END_DATE',
// //         endDate
// //     }
// //     const result = filtersReducer(undefined,action)
// //     expect(result.endDate).toEqual({endDate})
// // })