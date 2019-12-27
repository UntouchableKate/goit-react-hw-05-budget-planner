import shortid from 'shortid';
import * as types from './expensesTypes';

export const addExpense = (name, amount) => {
  return {
    type: types.ADD_BUDGET,
    payload: {
      expense: {
        id: shortid.generate(),
        name,
        amount: Number(amount),
      },
    },
  };
};

export const removeExpense = id => {
  return {
    type: types.REMOVE_BUDGET,
    payload: {
      id,
    },
  };
};
