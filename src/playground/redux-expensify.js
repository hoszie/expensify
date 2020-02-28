import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


////    ACTION GENERATORS   ///////
//ADD_EXPENSE - making the addExpense obj
const addExpense = (
  { 
    description = '', 
    note = '', 
    amount = 0, 
    createdAt = 0 
  } = {}
) => ({
    type: 'ADD_EXPENSE',
    expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
    }
});

//REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
  type: 'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});

//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
});

//SORT_BY_DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

//SORT_BY_AMOUNT
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

//SET_START_DATE
const setStartDate = (startDate) => ({
  type: 'SET_START_DATE',
  startDate
});

//SET_END_DATE
const setEndDate = (endDate) => ({
  type: 'SET_END_DATE',
  endDate
});


// Expenses Reducer

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id != action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense) => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        };
      });
    default:
      return state;
  }
};



//Filters Reducer
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'amount'
        };
        case 'SORT_BY_DATE':
          return {
            ...state,
            sortBy: 'date'
          };
        case 'SET_START_DATE':
          return {
            ...state,
            startDate: action.startDate
          };
        case 'SET_END_DATE': 
          return {
            ...state, 
            endDate: action.endDate
          };
    default:
      return state;
  }
}



//Get visibile expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses.filter((expense) => {
    const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());
    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if (sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  });
}

//Store creation
const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })  
);


store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});


const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: 3, note: 'Fuck off cunt' }));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 50000, createdAt: 2 }));
const expenseThree = store.dispatch(addExpense({ description: 'Drug Money', amount: 1000, note: 'I need it, fuck off', createdAt: 7}));
const expenseFour = store.dispatch(addExpense({ description: 'PartyTimes', amount: 100, createdAt: 100 }));
store.dispatch(removeExpense({ id: expenseOne.expense.id }))
store.dispatch(editExpense(expenseTwo.expense.id, { amount: 999, note: 'Blow Me' }))
// store.dispatch(setTextFilter('ee'));
// store.dispatch(sortByAmount());
// store.dispatch(setTextFilter('u'));
store.dispatch(sortByDate());

console.log(expenseThree);

// store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate(0));
// store.dispatch(setEndDate(1250));

// const demoState = {
//   expenses: [{
//     id: 'genoir',
//     description: 'Jan Rent',
//     note: 'This was the final payment for that address',
//     amount: 54500,
//     createdAt: 0
//   }],
//   filters: {
//     text: 'rent',
//     sortBy: 'amount', //date or amount
//     startDate: undefined,
//     endDate: undefined 
//   }
// };


////////////////////////////////////////////

// Start with { createStore, combineReducers }. Write out some demoState such as your object that you are creating. Above. We will also need filters that will sort them in a certain way. Or select one that we are looking for. These are the two states that we are tracking and thus need redux to get the state for either expenses or the filters. 

// We are using a single reducer for each root property in our store. A filterReducer for the filter object and an expensesReducer for the array or expenses objects. One reducer as works on the expenses property as if the filters doesn't exist and vice versa. And then combine them to make the complete store. 

//Setting up reducers. Initiate the state and set up the switch statement. 