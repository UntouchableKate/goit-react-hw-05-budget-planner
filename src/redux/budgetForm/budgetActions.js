import * as budgetTypes from './budgetTypes';

export const save = budget => {
  return {
    type: budgetTypes.SAVE_BUDGET,
    payload: {
      budget,
    },
  };
};
