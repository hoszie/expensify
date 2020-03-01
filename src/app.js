import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'water bill', amount: 2370, createdAt: '50000'}));
store.dispatch(addExpense({ description: 'gas bill', amount: 2100}));
store.dispatch(addExpense({ description: 'groveries', amount: 2800}));
store.dispatch(addExpense({ description: 'drugs', amount: 2000}));

// store.dispatch(setTextFilter('jism'));

setTimeout(() => {
  store.dispatch(setTextFilter('drugs'));
}, 3000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log('visibleExpenses', visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));