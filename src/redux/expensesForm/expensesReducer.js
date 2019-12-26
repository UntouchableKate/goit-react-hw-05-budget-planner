import * as types from './expensesTypes';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_BUDGET:
      return [...state, payload.expense];

    case types.REMOVE_BUDGET:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default expensesReducer;
