import { createStore } from 'redux';

// ACTION GENERATORS

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ count }) => ({
  type: 'SET',
  count
});

const resetCount = () => ({
  type: 'RESET'
});

/// REDUCERS - Actions describe the fact that somehting happened, but don't specify how the app's state changes in response. This is the job of reducers.  1. Reducers are pure functions                                    ////
const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
      case 'SET':
        return {
          count: action.count
        }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
};
const store = createStore(countReducer);

  const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
  });

store.dispatch(incrementCount({ incrementBy: 5 }));

store.dispatch(incrementCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(resetCount());

store.dispatch(setCount({ count: 111 }));

// Setting up a store. 

// Import {createStore} from redux. Variable called store and assign it to a call to createStore. Needs a function as its first argument. It takes in state as first param. No constructor function so need to set up a default in the function. Count:0 is default state obj.

// const store = createStore((state = { count:0 }) => {
//   return state;
// })

// ACTIONS

// Is an obj that gets sent to the store. For example, for a person actions could be walk, stop_walking, sit, work, stop_working. For this example, we will have increment, decrement, reset. For increment object - define an obj we have to define a single property. This is the action.type property. { type: 'INCREMENT' }. * Capitals for action type names. Now we want to send it to the store.

// Sending the object to the store. We need to call a method on the store by calling store.dispatch(); This allows us to send an action object to the store.          store.dispatch({ type: 'INCREMENT' });

// The action object gets passed in as the second argument on the store which is how we manipulate it?? If action.type is 'INCREMENT' we return the state.count + 1. Because there are many action objects, it's best to use a big switch statement.

// HOW TO WATCH FOR CHANGES
// store.subscribe(()=>{console.log(store.getState());}); ---- pass a single function to it. That function gets called every single time the store changes. Call it again to unsubscribe. 


