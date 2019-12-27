import { toast } from 'react-toastify';

import * as types from './expensesTypes';

const expensesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case types.ADD_BUDGET:
      if (payload.expense.name.length <= 0 || payload.expense.amount <= 0) {
        toast.warn('Введите целое число!', {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        return state;
      }
      return [...state, payload.expense];

    case types.REMOVE_BUDGET:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default expensesReducer;
