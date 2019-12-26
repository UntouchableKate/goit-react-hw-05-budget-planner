import { combineReducers } from 'redux';

//redux redusers
import budgetReducer from './budgetForm/budgetReducer';
import expensesReducer from './expensesForm/expensesReducer';

export default combineReducers({
  budget: budgetReducer,
  expenses: expensesReducer,
});
